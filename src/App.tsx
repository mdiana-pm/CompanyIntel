import React, { useState } from 'react';
import { CompanySummaryReport, DisambiguationResponse, CompanyNotFoundResponse, ApiResponse } from './types.ts';
import { CompanyAnalysisView } from './components/CompanyAnalysisView.tsx';
import { CompanyDisambiguationView } from './components/CompanyDisambiguationView.tsx';
import { CompanyNotFoundView } from './components/CompanyNotFoundView.tsx';
import { findSimilarCompanies } from './data/benchmarks.ts';
import { 
  Building2, 
  Search, 
  Sparkles, 
  Globe, 
  Package, 
  Users, 
  CreditCard, 
  TrendingUp,
  X,
  ArrowRight
} from 'lucide-react';

function isLikelyGibberish(str: string): boolean {
  const withoutUrl = str
    .toLowerCase()
    .trim()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/.*$/, '');
  const clean = withoutUrl.replace(/[^a-z0-9]/g, '');
  if (clean.length < 5) return false;

  const whitelist = [
    'dell', 'heo', 'sap', 'ibm', 'bmw', 'asml', 'amd', 'intel', 'stripe', 'spotify',
    'siemens', 'notion', 'mercury', 'square', 'airbnb', 'linear', 'vercel',
    'oracle', 'microsoft', 'google', 'apple', 'amazon', 'meta', 'nvidia', 'tesla',
    'uber', 'lyft', 'slack', 'zoom', 'github', 'gitlab', 'docker', 'reddit'
  ];
  if (whitelist.includes(clean)) return false;

  if (/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(clean)) return true;

  if (clean.length >= 15 && !withoutUrl.includes('.') && !withoutUrl.includes(' ')) {
    const vowels = (clean.match(/[aeiouyäöü]/gi) || []).length;
    const vowelRatio = vowels / clean.length;
    if (vowelRatio < 0.22 || vowelRatio > 0.68) return true;

    if (/(?:asdf|qwer|zxcv|hjkl|joju|wioru|floej|öroieu)/i.test(clean)) return true;
  }

  if (/(.)\1{3,}/.test(clean)) return true;

  return false;
}

export default function App() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [currentReport, setCurrentReport] = useState<CompanySummaryReport | null>(null);
  const [disambiguationData, setDisambiguationData] = useState<DisambiguationResponse | null>(null);
  const [notFoundData, setNotFoundData] = useState<CompanyNotFoundResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const liveSuggestions = isInputFocused && searchInput.trim().length >= 3 
    ? findSimilarCompanies(searchInput) 
    : [];

  const handleSearch = async (query: string) => {
    const trimmed = query.trim().slice(0, 120);
    if (!trimmed) return;
    setIsLoading(true);
    setCurrentReport(null);
    setDisambiguationData(null);
    setNotFoundData(null);
    setIsInputFocused(false);

    // Client-side instant check for keyboard mashing
    if (isLikelyGibberish(trimmed)) {
      setNotFoundData({
        type: 'notFound',
        query: trimmed,
        message: `No verified company found for "${trimmed}"`,
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/company-intel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName: trimmed }),
      });

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        setNotFoundData({
          type: 'notFound',
          query: trimmed,
          message: `No verified company found for "${trimmed}"`,
        });
        return;
      }

      if (!response.ok) {
        setNotFoundData({
          type: 'notFound',
          query: trimmed,
          message: `No verified company found for "${trimmed}"`,
        });
        return;
      }

      const data = await response.json();

      if ('type' in data && data.type === 'disambiguation') {
        setDisambiguationData(data as DisambiguationResponse);
      } else if ('type' in data && data.type === 'notFound') {
        setNotFoundData(data as CompanyNotFoundResponse);
      } else if (data && data.companyName) {
        setCurrentReport(data as CompanySummaryReport);
      } else {
        setNotFoundData({
          type: 'notFound',
          query: trimmed,
          message: `No verified company found for "${trimmed}"`,
        });
      }
    } catch {
      setNotFoundData({
        type: 'notFound',
        query: trimmed,
        message: `No verified company found for "${trimmed}"`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectDisambiguatedCompany = (option: { id: string }) => {
    setSearchInput(option.id);
    handleSearch(option.id);
  };

  const handleReset = () => {
    setCurrentReport(null);
    setDisambiguationData(null);
    setNotFoundData(null);
    setSearchInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col">
      {/* Clean Minimal Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleReset}>
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center shadow-xs">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-base tracking-tight block">
                CompanyIntel
              </span>
              <span className="text-[11px] text-slate-500 block">
                Website, Products and Monetization Analyzer
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Search Bar Section */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="company-search-query" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Enter Company Name or Website
            </label>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  id="company-search-query"
                  name="company_search_query"
                  type="text"
                  autoComplete="off"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  maxLength={30}
                  value={searchInput}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => setTimeout(() => setIsInputFocused(false), 250)}
                  onChange={(e) => {
                    setSearchInput(e.target.value.slice(0, 30));
                    setIsInputFocused(true);
                  }}
                  placeholder="Enter company name or website (e.g. Siemens, HEO, Stripe, Spotify)..."
                  className="block w-full pl-10 pr-9 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white font-medium transition-all"
                />
                {searchInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchInput('');
                      setIsInputFocused(false);
                    }}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                {/* Instant Live Suggestions & Typo Proposal Dropdown */}
                {isInputFocused && liveSuggestions.length > 0 && !isLoading && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-slate-100 animate-in fade-in duration-150">
                    <div className="px-4 py-2.5 bg-slate-50 flex items-center justify-between text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Matching Companies (Confirm To Research)</span>
                      </span>
                      <span className="text-slate-400 font-normal">Click to select</span>
                    </div>
                    <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                      {liveSuggestions.map((candidate) => (
                        <div
                          key={candidate.id}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            setIsInputFocused(false);
                            handleSelectDisambiguatedCompany(candidate);
                          }}
                          className="p-3.5 hover:bg-slate-50 cursor-pointer flex items-center justify-between gap-3 group transition-colors"
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                              {candidate.name.slice(0, 2).toUpperCase()}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-900 text-sm truncate group-hover:text-emerald-600 transition-colors">
                                  {candidate.name}
                                </span>
                                <span className="font-mono text-[11px] text-slate-400 shrink-0">
                                  {candidate.website.replace(/^https?:\/\//, '')}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 truncate">
                                {candidate.industry} • {candidate.headquarters}
                              </p>
                            </div>
                          </div>
                          <span className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 text-xs font-semibold rounded-lg transition-colors">
                            <span>Confirm</span>
                            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading || !searchInput.trim()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer disabled:cursor-not-allowed shrink-0"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Researching...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Research</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* State 1: Disambiguation View (e.g. searching 'you' finds YouHodler, TrustYou, etc.) */}
        {disambiguationData && (
          <CompanyDisambiguationView
            query={disambiguationData.query}
            message={disambiguationData.message}
            options={disambiguationData.options}
            hasMore={disambiguationData.hasMore}
            totalCount={disambiguationData.totalCount}
            onSelectCompany={handleSelectDisambiguatedCompany}
          />
        )}

        {/* State 2: Company Not Found View (e.g. searching gibberish like sflöwjerfloejöroieuwjojuewioru) */}
        {notFoundData && (
          <CompanyNotFoundView
            query={notFoundData.query}
            message={notFoundData.message}
            onResetSearch={handleReset}
          />
        )}

        {/* State 3: Zero State View when no company has been entered */}
        {!currentReport && !disambiguationData && !notFoundData && (
          <div className="w-full py-8 text-center space-y-8 animate-in fade-in duration-200">
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                <Building2 className="w-8 h-8" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Enter Company Name
              </h1>
              <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                Enter any company name or website above to receive a comprehensive executive breakdown:
              </p>
            </div>

            {/* The 5 Core Deliverables Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Company Website Analysis
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Analyzes the official web portal, primary headline, key messaging, and online positioning.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  <Package className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  What It Does, Products and Clients
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Plain-English explanation of what the business actually does, its core products, and target client profiles.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Creation Date and Headcount
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Provides when the company was founded and its latest verified employee headcount number.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Monetization Model
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Plain-English breakdown of how the company makes money, business model type, and revenue streams.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-2xs space-y-2 sm:col-span-2 lg:col-span-2">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  Market Share and Main Competitors
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Highlights documented market share percentage, industry leadership standing, and 3 primary competitors with their key strategic differences.
                </p>
              </div>
            </div>


          </div>
        )}

        {/* Populated State: The 5 Information Blocks */}
        {currentReport && (
          <CompanyAnalysisView report={currentReport} />
        )}
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>Company Intelligence: Website, Simple Explanation, Products, Clients, Vitals, Monetization, Market Share and Competitors.</span>
          <span className="font-mono text-[11px] text-slate-400">Grounded via Google Search and Verified Disclosures</span>
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import { CompanySummaryReport } from '../types.ts';
import { 
  Globe, 
  ExternalLink, 
  Package, 
  Users, 
  Calendar, 
  Building2, 
  CreditCard, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp,
  PieChart
} from 'lucide-react';

interface CompanyAnalysisViewProps {
  report: CompanySummaryReport;
}

export const CompanyAnalysisView: React.FC<CompanyAnalysisViewProps> = ({ report }) => {
  const {
    companyName,
    website,
    simpleExplanation,
    websiteAnalysis,
    products,
    clientProfiles,
    vitals,
    monetization,
    marketIntel,
    sources,
  } = report;

  return (
    <div className="space-y-6 w-full">
      {/* Company Header & Key Vitals Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-xs shrink-0">
              {companyName.slice(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {companyName}
                </h1>
                {website && (
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-slate-500" />
                    <span>{website.replace(/^https?:\/\//, '').replace(/\/$/, '')}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Executive analysis based on official website disclosures and public corporate filings
              </p>
            </div>
          </div>
        </div>

        {/* 3. Company Vitals (When Created, Employees, Headquarters & Paid Clients) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>When Created</span>
            </div>
            <p className={`text-sm sm:text-base ${vitals.createdYear === 'Information not provided' ? 'text-slate-500 font-medium italic' : 'text-slate-900 font-bold font-mono'}`}>
              {vitals.createdYear}
            </p>
          </div>

          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
              <Users className="w-4 h-4 text-emerald-600" />
              <span>Number of Employees</span>
            </div>
            <p className={`text-sm sm:text-base ${vitals.employeeCount === 'Information not provided' ? 'text-slate-500 font-medium italic' : 'text-slate-900 font-bold font-mono'}`}>
              {vitals.employeeCount}
            </p>
          </div>

          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
              <Building2 className="w-4 h-4 text-indigo-600" />
              <span>Headquarters</span>
            </div>
            <p className={`text-sm sm:text-base ${vitals.headquarters === 'Information not provided' ? 'text-slate-500 font-medium italic' : 'text-slate-900 font-bold'}`}>
              {vitals.headquarters}
            </p>
          </div>

          <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
              <CreditCard className="w-4 h-4 text-purple-600" />
              <span>Paid Clients</span>
            </div>
            <p className={`text-sm sm:text-base ${!vitals.paidClients || vitals.paidClients.startsWith('Information not provided') ? 'text-slate-500 font-medium italic' : 'text-slate-900 font-bold'}`}>
              {vitals.paidClients || 'Information not provided'}
            </p>
          </div>
        </div>
      </div>

      {/* What Company Does */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-4 h-4" />
          <span>What The Company Does</span>
        </div>
        <p className="text-base sm:text-lg leading-relaxed text-slate-100 font-medium">
          {simpleExplanation}
        </p>
      </div>

      {/* 1. Analyse the Company Web-site */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Company Website Analysis
              </h2>
              <p className="text-xs text-slate-500">
                Audited directly from {websiteAnalysis.url}
              </p>
            </div>
          </div>
          <a
            href={websiteAnalysis.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <span>Visit Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Main Headline from the site */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
            Primary Website Headline and Positioning
          </span>
          <p className="text-base font-bold text-slate-900 italic">
            &ldquo;{websiteAnalysis.headline}&rdquo;
          </p>
        </div>

        {/* Website Content Summary */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {websiteAnalysis.summary}
        </p>

        {/* Key Highlights from the site */}
        {websiteAnalysis.keyHighlights && websiteAnalysis.keyHighlights.length > 0 && (
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Key Website Highlights
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {websiteAnalysis.keyHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-3.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-xs text-slate-700 flex items-start gap-2.5 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 2b. Products and Client Profiles */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Products */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Package className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Products and Offerings
              </h2>
            </div>

            <div className="space-y-3">
              {products.map((p, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-1">
                  <h3 className="font-bold text-sm text-slate-900">{p.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Profiles */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Target Client Profiles
              </h2>
            </div>

            <div className="space-y-3">
              {clientProfiles.map((cp, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-slate-900">{cp.targetSegment}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{cp.description}</p>
                  {cp.examples && cp.examples.length > 0 && (
                    <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-600">Examples:</span>
                      <span>{cp.examples.join(', ')}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Information on Monetization Model */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              Monetization Model
            </h2>
            <p className="text-xs text-slate-500">
              How the company generates revenue and converts value into cash flow
            </p>
          </div>
        </div>

        {/* Business Model Type Tag */}
        <div className="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-xl space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
              Core Business Model
            </span>
            <span className="text-xs font-mono font-bold text-emerald-900 bg-white px-2.5 py-0.5 rounded-md border border-emerald-300/60">
              {monetization.modelType}
            </span>
          </div>
          <p className="text-sm font-semibold text-slate-900 pt-1 leading-relaxed">
            {monetization.summary}
          </p>
        </div>

        {/* Revenue Streams List */}
        {monetization.revenueStreams && monetization.revenueStreams.length > 0 && (
          <div className="space-y-2 pt-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Identified Revenue Streams
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {monetization.revenueStreams.map((stream, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{stream}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Structure */}
        {monetization.pricingStructure && (
          <div className="pt-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <span className="font-semibold text-slate-800 block mb-0.5">Pricing Details:</span>
            <p>{monetization.pricingStructure}</p>
          </div>
        )}
      </div>

      {/* 5. Market Share & 3 Main Competitors */}
      {marketIntel && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
            <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Market Share and Main Competitors
              </h2>
              <p className="text-xs text-slate-500">
                Documented market standing, industry stature, and key peer alternatives
              </p>
            </div>
          </div>

          {/* Market Share Overview */}
          <div className="p-4 bg-purple-50/50 rounded-xl border border-purple-200/70 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block">
              Estimated / Documented Market Share
            </span>
            <p className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              {marketIntel.marketShare}
            </p>
          </div>

          {/* Visual 100% Total Market Allocation Bar */}
          {marketIntel.companySharePercent && (
            <div className="p-4 bg-slate-50/90 rounded-xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-700">
                <span className="flex items-center gap-1.5">
                  <PieChart className="w-4 h-4 text-purple-600" />
                  <span>100% Market Share Allocation</span>
                </span>
                <span className="text-[11px] font-mono text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  Total: 100%
                </span>
              </div>

              {/* Progress segments bar */}
              <div className="h-4 w-full bg-slate-200 rounded-lg overflow-hidden flex shadow-inner">
                <div
                  style={{ width: `${marketIntel.companySharePercent}%` }}
                  className="bg-slate-900 h-full transition-all flex items-center justify-center text-[10px] text-white font-mono font-bold"
                  title={`${companyName}: ${marketIntel.companySharePercent}%`}
                >
                  {marketIntel.companySharePercent >= 12 ? `${marketIntel.companySharePercent}%` : ''}
                </div>
                {marketIntel.competitors.map((c, i) => {
                  const colors = ['bg-purple-600', 'bg-indigo-500', 'bg-blue-500'];
                  const pct = c.sharePercent || 0;
                  return (
                    <div
                      key={i}
                      style={{ width: `${pct}%` }}
                      className={`${colors[i % colors.length]} h-full transition-all flex items-center justify-center text-[10px] text-white font-mono font-bold`}
                      title={`${c.name}: ${pct}%`}
                    >
                      {pct >= 10 ? `${pct}%` : ''}
                    </div>
                  );
                })}
                {marketIntel.otherMarketShare && (
                  <div
                    style={{ width: `${marketIntel.otherMarketShare.sharePercent}%` }}
                    className="bg-slate-400 h-full transition-all flex items-center justify-center text-[10px] text-white font-mono font-bold"
                    title={`Others: ${marketIntel.otherMarketShare.sharePercent}%`}
                  >
                    {marketIntel.otherMarketShare.sharePercent >= 10 ? `${marketIntel.otherMarketShare.sharePercent}%` : ''}
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-3.5 flex-wrap text-[11px] text-slate-600 pt-0.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-900 shrink-0" />
                  <span className="font-semibold text-slate-900">{companyName}: {marketIntel.companySharePercent}%</span>
                </div>
                {marketIntel.competitors.map((c, i) => {
                  const dots = ['bg-purple-600', 'bg-indigo-500', 'bg-blue-500'];
                  return (
                    <div key={i} className="flex items-center gap-1.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${dots[i % dots.length]} shrink-0`} />
                      <span>{c.name}: {c.sharePercent}%</span>
                    </div>
                  );
                })}
                {marketIntel.otherMarketShare && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-400 shrink-0" />
                    <span>Others: {marketIntel.otherMarketShare.sharePercent}%</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 3 Main Competitors Table */}
          {marketIntel.competitors && marketIntel.competitors.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Primary Competitors and Differentiation
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {marketIntel.competitors.length} Peer Benchmarks
                </span>
              </div>

              {/* Table with border matching outer container edges */}
              <div className="overflow-hidden border border-slate-200 rounded-xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                      <th className="py-3 px-4 w-1/3 sm:w-1/4">Competitor</th>
                      <th className="py-3 px-4">Key Market Difference and Strategic Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {marketIntel.competitors.map((comp, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900 align-top">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-bold text-slate-900">{comp.name}</span>
                            {comp.marketShare && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200/80">
                                {comp.marketShare}
                              </span>
                            )}
                            {comp.website && (
                              <a
                                href={comp.website.startsWith('http') ? comp.website : `https://${comp.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-0.5 text-[11px] font-normal"
                              >
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 leading-relaxed align-top">
                          {comp.focusDifference}
                        </td>
                      </tr>
                    ))}
                    {marketIntel.otherMarketShare && (
                      <tr className="bg-slate-50/60 hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900 align-top">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-bold text-slate-800">Others / Rest of Market</span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-200/80 text-slate-700 border border-slate-300">
                              {marketIntel.otherMarketShare.percentage}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 leading-relaxed align-top">
                          {marketIntel.otherMarketShare.description}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sources Audited */}
      {sources && sources.length > 0 && (
        <div className="p-4 bg-slate-100/80 rounded-xl border border-slate-200 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <span className="font-semibold text-slate-700">Verified Sources Consulted:</span>
          <div className="flex flex-wrap gap-3">
            {sources.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
              >
                <span>{s.title}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

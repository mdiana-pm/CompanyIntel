import React from 'react';
import { CompanyDisambiguationOption } from '../types.ts';
import { Globe, ArrowRight, Building2, MapPin, Layers, Search } from 'lucide-react';

interface CompanyDisambiguationViewProps {
  query: string;
  message?: string;
  hasMore?: boolean;
  totalCount?: number;
  options: CompanyDisambiguationOption[];
  onSelectCompany: (company: CompanyDisambiguationOption) => void;
}

export const CompanyDisambiguationView: React.FC<CompanyDisambiguationViewProps> = ({
  query,
  message,
  hasMore,
  totalCount,
  options,
  onSelectCompany,
}) => {
  const displayedOptions = options.slice(0, 6);
  const hasOverflow = hasMore || options.length > 6 || (totalCount !== undefined && totalCount > 6);
  const totalCompaniesCount = totalCount || options.length;

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Live Web Discovery
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Which company would you like to research?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Found recognized corporate entities matching &ldquo;{query}&rdquo;. Select the company you wish to analyze in detail.
            </p>
          </div>
        </div>
      </div>

      {/* Overflow Banner: When there are more than 6 companies */}
      {hasOverflow && (
        <div className="bg-amber-50/90 border border-amber-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-amber-900 shadow-2xs">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <Search className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-amber-950">
              Showing top 6 of {totalCompaniesCount > 6 ? totalCompaniesCount : 'many'} matching companies
            </h3>
            <p className="text-xs text-amber-800/90 mt-1 leading-relaxed">
              There are a lot of companies matching &ldquo;{query}&rdquo;. If your target organization is not among the 6 below, type more characters or enter the official website to narrow your search.
            </p>
          </div>
        </div>
      )}

      {/* Disambiguation Cards Grid (Top 6) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {displayedOptions.map((option) => {
          const initials = option.name
            .split(' ')
            .slice(0, 2)
            .map((word) => word[0])
            .join('')
            .toUpperCase() || option.id.slice(0, 2).toUpperCase();

          const cleanDomain = option.website.replace(/^https?:\/\//, '').replace(/\/$/, '');

          return (
            <div
              key={option.id}
              className="bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Top Row: Avatar & Domain Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-2xs">
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-slate-900 leading-snug truncate">
                        {option.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5 text-xs text-slate-500 font-mono truncate">
                        <Globe className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{cleanDomain}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags: Industry & Headquarters */}
                <div className="flex flex-wrap gap-1.5 text-[11px] pt-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg font-medium">
                    <Building2 className="w-3 h-3 text-slate-500 shrink-0" />
                    <span className="truncate max-w-[140px]">{option.industry}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg font-medium">
                    <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                    <span className="truncate max-w-[120px]">{option.headquarters}</span>
                  </span>
                  {option.foundingYear && (
                    <span className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg font-mono">
                      Est. {option.foundingYear}
                    </span>
                  )}
                </div>

                {/* 1-2 Sentences Overview */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 pt-1">
                  {option.shortDescription}
                </p>
              </div>

              {/* Action Button: Research This Company */}
              <button
                type="button"
                onClick={() => onSelectCompany(option)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer group mt-2"
              >
                <span>Research {option.name.split('(')[0].trim()}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};


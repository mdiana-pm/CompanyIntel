import React from 'react';
import { CompanyDisambiguationOption } from '../types.ts';
import { Globe, ArrowRight, Building2, MapPin, Layers } from 'lucide-react';

interface CompanyDisambiguationViewProps {
  query: string;
  message?: string;
  options: CompanyDisambiguationOption[];
  onSelectCompany: (company: CompanyDisambiguationOption) => void;
}

export const CompanyDisambiguationView: React.FC<CompanyDisambiguationViewProps> = ({
  query,
  message,
  options,
  onSelectCompany,
}) => {
  const isSingleMatch = options.length === 1;

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
              Multiple Entities Detected
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Which company would you like to research?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Multiple recognized corporate entities operate under this or similar names. Please select the company you wish to analyze in detail:
            </p>
          </div>
        </div>
      </div>

      {/* Disambiguation Cards Grid */}
      <div className={`grid grid-cols-1 ${options.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'} gap-5`}>
        {options.map((option) => {
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
              className="bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Top Row: Avatar & Domain Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-extrabold text-base flex items-center justify-center shrink-0 shadow-2xs">
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {option.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500 font-mono">
                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                        <span>{cleanDomain}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags: Industry & Headquarters */}
                <div className="flex flex-wrap gap-2 text-[11px] pt-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg font-medium">
                    <Building2 className="w-3 h-3 text-slate-500" />
                    <span>{option.industry}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg font-medium">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{option.headquarters}</span>
                  </span>
                  {option.foundingYear && (
                    <span className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg font-mono">
                      Est. {option.foundingYear}
                    </span>
                  )}
                </div>

                {/* 2-3 Sentences Overview */}
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {option.shortDescription}
                </p>
              </div>

              {/* Action Button: Research This Company */}
              <button
                type="button"
                onClick={() => onSelectCompany(option)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer group mt-2"
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

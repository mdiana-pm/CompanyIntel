import React from 'react';
import { SearchX, HelpCircle, RotateCcw } from 'lucide-react';

interface CompanyNotFoundViewProps {
  query?: string;
  message?: string;
  onResetSearch: () => void;
}

export const CompanyNotFoundView: React.FC<CompanyNotFoundViewProps> = ({
  message,
  onResetSearch,
}) => {
  return (
    <div className="w-full space-y-6 animate-in fade-in duration-200">
      {/* Friendly Empty/Not Found Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto shadow-2xs">
          <SearchX className="w-7 h-7" />
        </div>

        <div className="space-y-2 max-w-lg mx-auto">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            No verified company found
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {message || "We couldn't verify an active official website, public filings, or recognized business profile matching your search."}
          </p>
        </div>

        {/* Helpful Search Tips without any specific company names */}
        <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl text-left max-w-xl mx-auto space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            <HelpCircle className="w-4 h-4 text-slate-500" />
            <span>Search Guidance</span>
          </div>
          <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Check for spelling errors, typos, or accidental keyboard characters.</li>
            <li>Try entering the official website domain directly.</li>
            <li>Search using the primary corporate registered name or parent organization.</li>
          </ul>
        </div>

        {/* Action: Try Another Search */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onResetSearch}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
            <span>Try Another Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

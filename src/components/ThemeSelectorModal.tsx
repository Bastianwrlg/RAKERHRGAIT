import React from 'react';
import { SlideTheme } from '../types';
import { THEME_LIST } from '../utils/theme';
import { Palette, Check, Sparkles, X, Sun, Moon } from 'lucide-react';

interface ThemeSelectorModalProps {
  currentTheme: SlideTheme;
  onSelectTheme: (theme: SlideTheme) => void;
  onClose: () => void;
}

export const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({
  currentTheme,
  onSelectTheme,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="theme-selector-dialog"
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-800"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>Pilih Tema Presentasi RAKER</span>
                <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">
                  Light Edition
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Pilih palet visual terang dan modern dengan gaya font Poppins yang jernih dan tajam.
              </p>
            </div>
          </div>
          <button
            id="btn-close-theme-modal"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Theme Options Grid */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {THEME_LIST.map((theme) => {
              const isSelected = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  id={`theme-option-${theme.id}`}
                  onClick={() => {
                    onSelectTheme(theme.id);
                  }}
                  className={`group relative text-left p-4 rounded-xl border-2 transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/40 shadow-lg shadow-blue-500/10 scale-[1.01]'
                      : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/60'
                  }`}
                >
                  {/* Top row: Name, mode badge, checked */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {/* Swatches */}
                        <div className="flex -space-x-1 items-center">
                          <div
                            className="w-4 h-4 rounded-full border border-slate-300 shadow-xs"
                            style={{ backgroundColor: theme.swatchPrimary }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border border-slate-300 shadow-xs"
                            style={{ backgroundColor: theme.swatchSecondary }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                          {theme.isLight ? (
                            <Sun className="w-3.5 h-3.5 text-amber-500" />
                          ) : (
                            <Moon className="w-3.5 h-3.5 text-slate-600" />
                          )}
                          <span className="text-[11px] text-slate-500 font-medium">
                            {theme.isLight ? 'Light Mode' : 'Dark Mode'}
                          </span>
                        </span>
                      </div>

                      {isSelected && (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-100 border border-blue-300 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" />
                          <span>Aktif</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {theme.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {theme.tagline}
                    </p>
                  </div>

                  {/* Micro Visual Preview Box */}
                  <div
                    className={`mt-4 p-3 rounded-lg border text-xs overflow-hidden ${
                      theme.id === 'light-corporate'
                        ? 'bg-[#f8fafc] text-slate-900 border-slate-200'
                        : theme.id === 'editorial-ivory'
                        ? 'bg-[#faf8f5] text-stone-900 border-stone-300'
                        : theme.id === 'light-emerald'
                        ? 'bg-[#f2fbf7] text-slate-900 border-emerald-200'
                        : theme.id === 'light-amber'
                        ? 'bg-[#fffdfa] text-slate-900 border-amber-200'
                        : theme.id === 'obsidian-gold'
                        ? 'bg-[#090a0f] text-amber-100 border-amber-500/30'
                        : 'bg-[#050b18] text-sky-100 border-sky-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-black/10">
                      <span className="text-[9px] font-bold tracking-wider uppercase opacity-75">
                        RAKER 2026
                      </span>
                      <span className="text-[9px] font-mono opacity-70">01 / 17</span>
                    </div>
                    <div className="text-xs font-bold mb-1">
                      Evaluasi & Sasaran Strategis
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold border border-current opacity-90">
                        HR
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold border border-current opacity-90">
                        GA
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold border border-current opacity-90">
                        IT
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom helper tip */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Tema dan font Poppins langsung tersimpan otomatis dan berlaku untuk presentasi layar penuh serta cetak PDF.</span>
            </span>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors shrink-0 shadow-xs"
            >
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

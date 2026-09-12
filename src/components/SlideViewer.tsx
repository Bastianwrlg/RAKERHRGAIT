import React from 'react';
import { Slide, Department, SlideTheme } from '../types';
import { IconRenderer } from './IconRenderer';
import { InteractiveBudgetWidget } from './InteractiveBudgetWidget';
import { SopSlideContent } from './SopSlideContent';
import { triggerConfetti } from '../utils/confetti';
import { THEMES } from '../utils/theme';
import { motion, AnimatePresence } from 'motion/react';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Edit3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface SlideViewerProps {
  slide: Slide;
  totalSlides: number;
  currentNumber: number;
  onEditSlide?: () => void;
  isFullscreen?: boolean;
  onNavigateToMateri?: (category: 'HR' | 'GA' | 'IT' | string) => void;
  onOpenSlideMenu?: () => void;
  themeId?: SlideTheme;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slide,
  totalSlides,
  currentNumber,
  onEditSlide,
  isFullscreen = false,
  onNavigateToMateri,
  onOpenSlideMenu,
  themeId = 'light-corporate',
}) => {
  const currentTheme = THEMES[themeId] || THEMES['light-corporate'];

  const getDeptName = (dept: Department) => {
    switch (dept) {
      case 'HR':
        return 'HUMAN RESOURCES';
      case 'GA':
        return 'GENERAL AFFAIRS';
      case 'IT':
        return 'INFORMATION TECHNOLOGY';
      default:
        return 'HRGA-IT STRATEGIC DECK';
    }
  };

  return (
    <div
      id={`slide-render-${slide.id}`}
      className={`relative w-full overflow-hidden transition-all select-none rounded-2xl border ${currentTheme.containerBorder} ${currentTheme.containerBg} ${
        currentTheme.isLight ? 'text-slate-900' : 'text-slate-100'
      } flex flex-col justify-between ${
        isFullscreen ? 'h-screen max-w-none rounded-none border-none p-6 md:p-10' : 'slide-aspect min-h-[520px] p-6 md:p-8'
      }`}
    >
      {/* Executive Corner Flourishes */}
      <div className={`absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 ${currentTheme.cornerAccent} pointer-events-none opacity-80`} />
      <div className={`absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 ${currentTheme.cornerAccent} pointer-events-none opacity-80`} />
      <div className={`absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 ${currentTheme.cornerAccent} pointer-events-none opacity-80`} />
      <div className={`absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 ${currentTheme.cornerAccent} pointer-events-none opacity-80`} />

      {/* Subtle Background ambient glow for light theme */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />

      {/* Slide Top Bar */}
      <div className={`relative z-10 flex items-center justify-between pb-3 border-b ${currentTheme.topBarBorder}`}>
        <div className="flex items-center gap-3">
          <span
            className={`text-[11px] font-bold tracking-wider px-2.5 py-0.5 rounded-full border uppercase ${currentTheme.deptBadge(
              slide.department
            )}`}
          >
            {getDeptName(slide.department)}
          </span>
          <span className={`text-xs hidden sm:inline ${currentTheme.metaTextColor}`}>
            Rapat Kerja Tahunan • Evaluasi & Rencana Strategis 2026
          </span>
        </div>

        <div className="flex items-center gap-2">
          {onEditSlide && (
            <button
              onClick={onEditSlide}
              title="Kustomisasi teks & angka slide ini"
              className="no-print p-1.5 rounded-md transition-colors text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          )}

          <div className="text-xs font-mono px-2 py-0.5 rounded border bg-slate-50 text-slate-700 border-slate-200 font-bold">
            {currentNumber} <span className="opacity-40">/</span> {totalSlides}
          </div>
        </div>
      </div>

      {/* Slide Main Content Area with Smooth Motion Slide/Fade Transition */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 my-auto py-3 flex-1 flex flex-col justify-center"
        >
          {/* Layout 1: Title / Cover */}
          {slide.layout === 'title' && (
            <div className="text-center max-w-4xl mx-auto py-2">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold mb-4 tracking-wider uppercase ${currentTheme.deptBadge(slide.department)}`}>
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>DEPARTEMEN HRGA & TEKNOLOGI INFORMASI</span>
              </div>

              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 leading-tight ${currentTheme.titleFont} ${currentTheme.titleColor}`}>
                {slide.title}
              </h1>

              <p className={`text-base sm:text-xl font-medium mb-2 max-w-2xl mx-auto leading-relaxed ${currentTheme.subtitleColor}`}>
                {slide.subtitle}
              </p>

              {slide.tagline && (
                <p className={`text-xs sm:text-sm mb-6 ${currentTheme.taglineColor}`}>
                  {slide.tagline}
                </p>
              )}

              {slide.cards && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2.5 px-1">
                    <span className={`text-[11px] font-semibold flex items-center gap-1.5 ${currentTheme.metaTextColor}`}>
                      <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                      <span>Klik pilar di bawah untuk langsung membuka materi presentasi:</span>
                    </span>
                    {onOpenSlideMenu && (
                      <button
                        onClick={onOpenSlideMenu}
                        className="text-[11px] text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1 hover:underline transition-all"
                      >
                        <span>Buka Menu Pengatur Slide</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
                    {slide.cards.map((card) => {
                      const isHR = card.category === 'HR';
                      const isGA = card.category === 'GA';
                      const isIT = card.category === 'IT';

                      const borderCol = isHR
                        ? 'border-emerald-300 hover:border-emerald-500 bg-white hover:bg-emerald-50/40 shadow-xs'
                        : isGA
                        ? 'border-amber-300 hover:border-amber-500 bg-white hover:bg-amber-50/40 shadow-xs'
                        : 'border-sky-300 hover:border-sky-500 bg-white hover:bg-sky-50/40 shadow-xs';

                      const actionText = isHR
                        ? 'Buka Materi HR'
                        : isGA
                        ? 'Buka Materi GA'
                        : isIT
                        ? 'Buka Materi IT'
                        : 'Buka Materi';

                      const actionBadgeClass = isHR
                        ? 'text-emerald-800 bg-emerald-50 group-hover:bg-emerald-100 border-emerald-300 font-semibold'
                        : isGA
                        ? 'text-amber-800 bg-amber-50 group-hover:bg-amber-100 border-amber-300 font-semibold'
                        : 'text-sky-800 bg-sky-50 group-hover:bg-sky-100 border-sky-300 font-semibold';

                      return (
                        <button
                          key={card.id}
                          type="button"
                          onClick={() => {
                            if (card.category && onNavigateToMateri) {
                              onNavigateToMateri(card.category);
                            }
                          }}
                          className={`group p-4 rounded-xl border ${borderCol} transition-all duration-200 hover:-translate-y-1 hover:shadow-lg text-left flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/50 relative overflow-hidden`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2.5">
                              <div className="p-2 rounded-lg bg-slate-100 text-slate-800 group-hover:scale-110 transition-transform">
                                <IconRenderer name={card.iconName} className="w-5 h-5 text-blue-600" />
                              </div>
                              {card.badge && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border bg-slate-100 text-slate-700 border-slate-200">
                                  {card.badge}
                                </span>
                              )}
                            </div>
                            <h3 className={`text-sm font-bold transition-colors mb-1.5 flex items-center justify-between ${currentTheme.cardTitle}`}>
                              <span>{card.title}</span>
                            </h3>
                            <p className={`text-xs leading-relaxed transition-colors mb-3 ${currentTheme.cardDesc}`}>
                              {card.description}
                            </p>
                          </div>

                          {/* Interactive Action Indicator */}
                          <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border flex items-center gap-1 transition-all ${actionBadgeClass}`}>
                              <span>{actionText}</span>
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="text-[10px] text-slate-500 group-hover:text-slate-800 transition-colors">
                              Klik untuk Masuk
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Layout 2: Executive Summary */}
          {slide.layout === 'executive-summary' && (
            <div className="max-w-5xl mx-auto w-full">
              <div className="mb-4">
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${currentTheme.titleFont} ${currentTheme.titleColor}`}>{slide.title}</h2>
                <p className={`text-xs sm:text-sm mt-1 ${currentTheme.subtitleColor}`}>{slide.subtitle}</p>
              </div>

              {/* Metrics Row */}
              {slide.metrics && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  {slide.metrics.map((m) => (
                    <div
                      key={m.id}
                      className={`p-3.5 rounded-xl ${currentTheme.cardBg} border ${currentTheme.cardBorder} ${currentTheme.cardHover} transition-all shadow-xs`}
                    >
                      <span className={`text-[11px] font-semibold ${currentTheme.statLabelColor}`}>{m.label}</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className={`text-2xl font-extrabold ${currentTheme.statNumberColor}`}>{m.value}</span>
                        {m.unit && <span className={`text-xs font-semibold ${currentTheme.statLabelColor}`}>{m.unit}</span>}
                      </div>

                      {m.target && (
                        <div className={`text-[11px] mt-0.5 font-mono opacity-80 ${currentTheme.statLabelColor}`}>{m.target}</div>
                      )}

                      {m.progress !== undefined && (
                        <div className={`w-full h-1.5 rounded-full mt-2.5 overflow-hidden ${currentTheme.progressTrack}`}>
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${currentTheme.progressBar}`}
                            style={{ width: `${Math.min(m.progress, 100)}%` }}
                          />
                        </div>
                      )}

                      {m.trendText && (
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 mt-2">
                          {m.trend === 'up' && <TrendingUp className="w-3 h-3" />}
                          {m.trend === 'down' && <TrendingDown className="w-3 h-3 text-rose-600" />}
                          {m.trend === 'neutral' && <Minus className="w-3 h-3 text-slate-500" />}
                          <span>{m.trendText}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Bullet Highlights Card */}
              {slide.bulletPoints && (
                <div className={`p-4 rounded-xl ${currentTheme.cardBg} border ${currentTheme.cardBorder} shadow-xs`}>
                  <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 ${currentTheme.cardTitle}`}>
                    <Award className="w-4 h-4 text-blue-600" /> Poin Strategis & Sinergi Kunci
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {slide.bulletPoints.map((bp, i) => (
                      <div key={i} className={`flex items-start gap-2 text-xs leading-relaxed ${currentTheme.cardDesc}`}>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Layout 3: KPI Dashboard */}
          {slide.layout === 'kpi-dashboard' && (
            <div className="max-w-5xl mx-auto w-full">
              <div className="mb-4">
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${currentTheme.titleFont} ${currentTheme.titleColor}`}>{slide.title}</h2>
                <p className={`text-xs sm:text-sm mt-1 ${currentTheme.subtitleColor}`}>{slide.subtitle}</p>
              </div>

              {/* 4 Large KPI Cards */}
              {slide.metrics && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                  {slide.metrics.map((m) => (
                    <div
                      key={m.id}
                      className={`p-3.5 rounded-xl ${currentTheme.cardBg} border ${currentTheme.cardBorder} shadow-xs relative overflow-hidden group ${currentTheme.cardHover} transition-all`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-semibold line-clamp-1 ${currentTheme.statLabelColor}`}>{m.label}</span>
                        {m.status && (
                          <span
                            className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${
                              m.status === 'achieved'
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                                : m.status === 'warning'
                                ? 'bg-amber-50 text-amber-800 border border-amber-300'
                                : 'bg-blue-50 text-blue-800 border border-blue-300'
                            }`}
                          >
                            {m.status}
                          </span>
                        )}
                      </div>

                      <div className="flex items-baseline gap-1 my-1.5">
                        <span className={`text-2xl md:text-3xl font-extrabold ${currentTheme.statNumberColor}`}>{m.value}</span>
                        {m.unit && <span className={`text-xs font-medium ${currentTheme.statLabelColor}`}>{m.unit}</span>}
                      </div>

                      {m.target && (
                        <div className={`text-[11px] font-mono mb-2 opacity-80 ${currentTheme.statLabelColor}`}>{m.target}</div>
                      )}

                      {m.progress !== undefined && (
                        <div className={`w-full h-1.5 rounded-full overflow-hidden mb-2 ${currentTheme.progressTrack}`}>
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${currentTheme.progressBar}`}
                            style={{ width: `${Math.min(m.progress, 100)}%` }}
                          />
                        </div>
                      )}

                      {m.trendText && (
                        <span className="text-[10px] text-emerald-700 flex items-center gap-1 font-semibold">
                          <TrendingUp className="w-3 h-3" />
                          {m.trendText}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Supporting Cards */}
              {slide.cards && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {slide.cards.map((c) => (
                    <div key={c.id} className={`p-3.5 rounded-xl ${currentTheme.cardBg} border ${currentTheme.cardBorder} shadow-xs`}>
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className={`text-xs font-bold ${currentTheme.cardTitle}`}>{c.title}</h4>
                        {c.badge && (
                          <span className="text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                            {c.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mb-2 ${currentTheme.cardDesc}`}>{c.description}</p>
                      {c.details && (
                        <ul className="space-y-1">
                          {c.details.map((d, idx) => (
                            <li key={idx} className={`text-xs flex items-start gap-1.5 ${currentTheme.cardDesc}`}>
                              <span className="text-blue-600 font-bold mt-0.5">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Layout 4: Split Details */}
          {slide.layout === 'split-details' && (
            <div className="max-w-5xl mx-auto w-full">
              <div className="mb-4">
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${currentTheme.titleFont} ${currentTheme.titleColor}`}>{slide.title}</h2>
                <p className={`text-xs sm:text-sm mt-1 ${currentTheme.subtitleColor}`}>{slide.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Left Column: Metrics */}
                <div className="lg:col-span-5 space-y-3">
                  {slide.metrics?.map((m) => (
                    <div key={m.id} className={`p-3.5 rounded-xl ${currentTheme.cardBg} border ${currentTheme.cardBorder} shadow-xs`}>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold ${currentTheme.statLabelColor}`}>{m.label}</span>
                        {m.target && <span className={`text-[10px] font-mono opacity-80 ${currentTheme.statLabelColor}`}>{m.target}</span>}
                      </div>
                      <div className={`text-2xl font-extrabold mt-1 ${currentTheme.statNumberColor}`}>{m.value}</div>
                      {m.trendText && (
                        <p className="text-xs text-emerald-700 flex items-center gap-1 mt-1 font-semibold">
                          <TrendingUp className="w-3 h-3" /> {m.trendText}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right Column: Detailed narrative cards */}
                <div className="lg:col-span-7 space-y-3">
                  {slide.cards?.map((card) => (
                    <div key={card.id} className={`p-4 rounded-xl ${currentTheme.cardBg} border ${currentTheme.cardBorder} shadow-xs`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`text-sm font-bold ${currentTheme.cardTitle}`}>{card.title}</h4>
                        {card.badge && (
                          <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full font-semibold">
                            {card.badge}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs leading-relaxed mb-3 ${currentTheme.cardDesc}`}>{card.description}</p>
                      {card.details && (
                        <div className={`space-y-1.5 border-t ${currentTheme.topBarBorder} pt-2`}>
                          {card.details.map((detail, idx) => (
                            <div key={idx} className={`flex items-start gap-2 text-xs ${currentTheme.cardDesc}`}>
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Layout 5: Initiatives Grid */}
          {slide.layout === 'initiatives-grid' && (
            <div className="max-w-5xl mx-auto w-full">
              <div className="mb-4">
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${currentTheme.titleFont} ${currentTheme.titleColor}`}>{slide.title}</h2>
                <p className={`text-xs sm:text-sm mt-1 ${currentTheme.subtitleColor}`}>{slide.subtitle}</p>
              </div>

              {slide.cards && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {slide.cards.map((card) => (
                    <div
                      key={card.id}
                      className={`p-4 rounded-xl ${currentTheme.cardBg} border ${currentTheme.cardBorder} ${currentTheme.cardHover} transition-all shadow-xs flex flex-col justify-between`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-xs font-bold ${currentTheme.cardTitle}`}>{card.title}</span>
                          {card.badge && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                              {card.badge}
                            </span>
                          )}
                        </div>
                        <p className={`text-xs leading-relaxed mb-3 ${currentTheme.cardDesc}`}>{card.description}</p>
                      </div>

                      {card.metrics && (
                        <div className={`grid grid-cols-2 gap-2 pt-2 border-t ${currentTheme.topBarBorder}`}>
                          {card.metrics.map((cm, idx) => (
                            <div key={idx} className={`p-2 rounded-lg border ${currentTheme.cardHighlight}`}>
                              <span className={`text-[10px] block font-medium ${currentTheme.statLabelColor}`}>{cm.label}</span>
                              <span className={`text-xs font-bold font-mono ${currentTheme.statNumberColor}`}>{cm.val}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Layout 6: Timeline Roadmap */}
          {slide.layout === 'timeline-roadmap' && (
            <div className="max-w-5xl mx-auto w-full">
              <div className="mb-4">
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${currentTheme.titleFont} ${currentTheme.titleColor}`}>{slide.title}</h2>
                <p className={`text-xs sm:text-sm mt-1 ${currentTheme.subtitleColor}`}>{slide.subtitle}</p>
              </div>

              {slide.timeline && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {slide.timeline.map((item, idx) => {
                    const isCurrent = item.status === 'In Progress';
                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border flex flex-col justify-between shadow-xs transition-all ${
                          isCurrent
                            ? 'bg-blue-50/70 border-blue-300 ring-1 ring-blue-300'
                            : `${currentTheme.cardBg} ${currentTheme.cardBorder}`
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-base font-black font-mono text-blue-700 px-2 py-0.5 bg-blue-100 rounded border border-blue-200">
                              {item.quarter}
                            </span>
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                                item.status === 'Done'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : item.status === 'In Progress'
                                  ? 'bg-amber-100 text-amber-800 animate-pulse'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {item.status}
                            </span>
                          </div>

                          <h4 className={`text-xs font-bold mb-1.5 line-clamp-2 ${currentTheme.cardTitle}`}>{item.title}</h4>
                          <p className={`text-[11px] leading-relaxed mb-3 ${currentTheme.cardDesc}`}>{item.description}</p>
                        </div>

                        {item.deliverables && (
                          <div className={`border-t ${currentTheme.topBarBorder} pt-2 space-y-1`}>
                            <span className={`text-[9px] uppercase tracking-wider font-semibold block ${currentTheme.statLabelColor}`}>
                              Key Deliverables:
                            </span>
                            {item.deliverables.map((del, i) => (
                              <div key={i} className={`text-[11px] flex items-center gap-1.5 ${currentTheme.cardDesc}`}>
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                                <span className="truncate">{del}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Layout 7: Budget Matrix */}
          {slide.layout === 'budget-matrix' && (
            <div className="max-w-5xl mx-auto w-full">
              <div className="mb-3">
                <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${currentTheme.titleFont} ${currentTheme.titleColor}`}>{slide.title}</h2>
                <p className={`text-xs sm:text-sm mt-1 ${currentTheme.subtitleColor}`}>{slide.subtitle}</p>
              </div>

              {slide.budget && <InteractiveBudgetWidget items={slide.budget} isLight={true} />}
            </div>
          )}

          {/* Layout: SOP Document */}
          {slide.layout === 'sop-document' && (
            <SopSlideContent sopData={slide.sopData} />
          )}

          {/* Layout 8: Closing Slide */}
          {slide.layout === 'closing' && (
            <div className="text-center max-w-3xl mx-auto py-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white mb-4 shadow-lg shadow-blue-500/20">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 ${currentTheme.titleFont} ${currentTheme.titleColor}`}>
                {slide.title}
              </h1>

              <p className={`text-base sm:text-lg font-medium mb-1 ${currentTheme.subtitleColor}`}>{slide.subtitle}</p>
              {slide.tagline && (
                <p className={`text-xs sm:text-sm mb-6 ${currentTheme.taglineColor}`}>{slide.tagline}</p>
              )}

              {slide.cards && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left my-6">
                  {slide.cards.map((c) => (
                    <div key={c.id} className={`p-4 rounded-xl ${currentTheme.cardBg} border ${currentTheme.cardBorder} shadow-xs`}>
                      <div className="flex items-center gap-2 mb-2 text-blue-600">
                        <IconRenderer name={c.iconName} className="w-4 h-4" />
                        <h4 className={`text-xs font-bold ${currentTheme.cardTitle}`}>{c.title}</h4>
                      </div>
                      <p className={`text-xs leading-relaxed ${currentTheme.cardDesc}`}>{c.description}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={triggerConfetti}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Mulai Sesi Tanya Jawab & Diskusi RAKER 🎉</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Slide Bottom Bar */}
      <div className={`relative z-10 flex items-center justify-between pt-2.5 mt-2 border-t ${currentTheme.footerBorder} text-[10px] ${currentTheme.watermarkColor}`}>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
          <span className="font-semibold tracking-wider uppercase">
            RAKER DEPARTEMEN HRGA-IT • <span className="font-medium">2026 STRATEGIC PLAN</span>
          </span>
        </div>
        <div className="hidden sm:inline font-mono opacity-80">
          CONFIDENTIAL & PROPRIETARY
        </div>
        <div className="font-mono opacity-80 flex items-center gap-1.5">
          <span>Slide ID: {slide.id}</span>
        </div>
      </div>
    </div>
  );
};

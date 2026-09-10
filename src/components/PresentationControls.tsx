import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  EyeOff,
  Radio,
  SlidersHorizontal,
} from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

interface PresentationControlsProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpTo: (index: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  isLaserActive: boolean;
  onToggleLaser: () => void;
  showNotes: boolean;
  onToggleNotes: () => void;
  isBlackout: boolean;
  onToggleBlackout: () => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  allSlides: { id: string; title: string; department: string }[];
  onToggleDrawer?: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onJumpTo,
  isFullscreen,
  onToggleFullscreen,
  isLaserActive,
  onToggleLaser,
  showNotes,
  onToggleNotes,
  isBlackout,
  onToggleBlackout,
  timerSeconds,
  isTimerRunning,
  onResetTimer,
  onToggleTimer,
  allSlides,
  onToggleDrawer,
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainderSecs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="no-print fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-2xl w-[94%] sm:w-auto">
      <div className="flex items-center justify-between gap-1.5 sm:gap-2 px-3 py-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-xl text-slate-800">
        {/* Navigation buttons */}
        <div className="flex items-center gap-1">
          <button
            id="btn-prev-slide"
            onClick={onPrev}
            disabled={currentIndex === 0}
            title="Slide Sebelumnya (Panah Kiri)"
            className="p-1.5 rounded-xl hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent text-slate-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Quick jump dropdown */}
          <select
            id="select-jump-slide"
            value={currentIndex}
            onChange={(e) => onJumpTo(Number(e.target.value))}
            className="bg-slate-50 text-slate-800 border border-slate-200 text-xs rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500 max-w-[130px] sm:max-w-[200px] truncate font-medium"
          >
            {allSlides.map((s, idx) => (
              <option key={s.id} value={idx}>
                {idx + 1}. [{s.department}] {s.title}
              </option>
            ))}
          </select>

          <span className="text-xs font-mono text-slate-500 px-1 whitespace-nowrap font-semibold">
            {currentIndex + 1} / {totalSlides}
          </span>

          <button
            id="btn-next-slide"
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            title="Slide Berikutnya (Panah Kanan / Space)"
            className="p-1.5 rounded-xl hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent text-slate-700 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="h-5 w-px bg-slate-200 mx-0.5" />

        {/* Presentation Timer for RAKER */}
        <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200 text-xs">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span className="font-mono text-xs font-bold text-slate-800 w-10 text-center">
            {formatTime(timerSeconds)}
          </span>
          <button
            id="btn-timer-toggle"
            onClick={onToggleTimer}
            title={isTimerRunning ? 'Pause Timer' : 'Jalankan Timer'}
            className="p-1 hover:text-slate-900 text-slate-500 transition-colors"
          >
            {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            id="btn-timer-reset"
            onClick={onResetTimer}
            title="Reset Timer"
            className="p-1 hover:text-slate-900 text-slate-500 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        <div className="h-5 w-px bg-slate-200 mx-0.5 hidden sm:block" />

        {/* Laser pointer */}
        <button
          id="btn-toggle-laser"
          onClick={onToggleLaser}
          title="Laser Pointer (Shortcut: L)"
          className={`p-2 rounded-xl transition-all ${
            isLaserActive
              ? 'bg-rose-600 text-white shadow-md ring-2 ring-rose-300'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <Radio className="w-4 h-4" />
        </button>

        {/* Speaker notes */}
        <button
          id="btn-toggle-notes-dock"
          onClick={onToggleNotes}
          title="Catatan Pembicara (Shortcut: N)"
          className={`p-2 rounded-xl transition-all ${
            showNotes
              ? 'bg-amber-100 text-amber-900 border border-amber-300'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <FileText className="w-4 h-4" />
        </button>

        {/* Blackout blank screen */}
        <button
          id="btn-toggle-blackout"
          onClick={onToggleBlackout}
          title="Layar Hitam Fokus Pembicara (Shortcut: B)"
          className={`p-2 rounded-xl transition-all ${
            isBlackout
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
          }`}
        >
          <EyeOff className="w-4 h-4" />
        </button>

        {/* Celebration Confetti */}
        <button
          id="btn-trigger-confetti"
          onClick={triggerConfetti}
          title="Efek Confetti (Perayaan Milestone)"
          className="p-2 rounded-xl text-amber-500 hover:bg-slate-100 transition-colors hidden sm:block"
        >
          <Sparkles className="w-4 h-4" />
        </button>

        {/* Menu Pengatur Slide */}
        {onToggleDrawer && (
          <button
            id="btn-bottom-slide-organizer"
            onClick={onToggleDrawer}
            title="Menu Pengatur Slide & Navigasi Materi (Shortcut: M)"
            className="p-2 rounded-xl text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors flex items-center gap-1"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        )}

        {/* Fullscreen toggle */}
        <button
          id="btn-toggle-fullscreen"
          onClick={onToggleFullscreen}
          title="Layar Penuh (Shortcut: F)"
          className="p-2 rounded-xl text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

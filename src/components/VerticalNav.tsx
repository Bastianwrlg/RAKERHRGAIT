import React, { useState, useMemo } from 'react';
import { Department, Slide } from '../types';
import {
  Play,
  Edit3,
  Printer,
  Download,
  Upload,
  RotateCcw,
  Plus,
  Users,
  Building2,
  Cpu,
  Layers,
  FileText,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Search,
  Timer,
  PlayCircle,
  PauseCircle,
  Clock,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';

interface VerticalNavProps {
  selectedDepartment: Department;
  onSelectDepartment: (dept: Department) => void;
  slideCounts: {
    ALL: number;
    HR: number;
    GA: number;
    IT: number;
  };
  slides: Slide[];
  currentIndex: number;
  onJumpToSlide: (index: number) => void;
  onStartPresentation: () => void;
  onToggleEditor: () => void;
  onAddNewSlide: () => void;
  onToggleDrawer: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
  onExportJSON: () => void;
  onImportJSON: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrintSlides: () => void;
  onResetDefault: () => void;
  timerSeconds: number;
  isTimerRunning: boolean;
  onToggleTimer: () => void;
  onResetTimer: () => void;
}

export const VerticalNav: React.FC<VerticalNavProps> = ({
  selectedDepartment,
  onSelectDepartment,
  slideCounts,
  slides,
  currentIndex,
  onJumpToSlide,
  onStartPresentation,
  onToggleEditor,
  onAddNewSlide,
  onToggleDrawer,
  onToggleNotes,
  showNotes,
  onExportJSON,
  onImportJSON,
  onPrintSlides,
  onResetDefault,
  timerSeconds,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const deptList: { id: Department; label: string; icon: React.ReactNode; color: string; count: number }[] = [
    {
      id: 'ALL',
      label: 'Semua RAKER',
      icon: <Layers className="w-4 h-4" />,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      count: slideCounts.ALL,
    },
    {
      id: 'HR',
      label: 'Human Resources',
      icon: <Users className="w-4 h-4" />,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      count: slideCounts.HR,
    },
    {
      id: 'GA',
      label: 'General Affairs',
      icon: <Building2 className="w-4 h-4" />,
      color: 'text-amber-700 bg-amber-50 border-amber-200',
      count: slideCounts.GA,
    },
    {
      id: 'IT',
      label: 'Information Tech',
      icon: <Cpu className="w-4 h-4" />,
      color: 'text-sky-700 bg-sky-50 border-sky-200',
      count: slideCounts.IT,
    },
  ];

  // Filtered slide items for vertical list
  const filteredSlideItems = useMemo(() => {
    return slides
      .map((slide, originalIndex) => ({ slide, originalIndex }))
      .filter(({ slide }) => {
        const matchesDept = selectedDepartment === 'ALL' || slide.department === selectedDepartment || slide.department === 'ALL';
        if (!matchesDept) return false;
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          slide.title.toLowerCase().includes(q) ||
          slide.subtitle.toLowerCase().includes(q) ||
          (slide.sopData?.sopName && slide.sopData.sopName.toLowerCase().includes(q))
        );
      });
  }, [slides, selectedDepartment, searchQuery]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Mobile Trigger Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-3 left-3 z-40 p-2.5 bg-white text-slate-800 rounded-xl shadow-md border border-slate-200 flex items-center gap-2 font-semibold text-xs"
        aria-label="Buka Menu Vertikal"
      >
        <Menu className="w-4 h-4 text-blue-600" />
        <span>Menu RAKER</span>
      </button>

      {/* Backdrop on mobile */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
        />
      )}

      {/* Vertical Navigation Sidebar */}
      <aside
        className={`no-print fixed md:static inset-y-0 left-0 z-50 bg-white border-r border-slate-200 flex flex-col justify-between transition-all duration-300 shadow-sm ${
          isCollapsed ? 'w-16' : 'w-72 sm:w-80'
        } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        {/* Top Header & Brand */}
        <div className="p-3.5 border-b border-slate-200 flex items-center justify-between">
          {!isCollapsed ? (
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white font-black text-xs shadow-xs shrink-0">
                RAKER
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h1 className="text-xs font-bold text-slate-900 truncate">HRGA-IT 2026</h1>
                  <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">
                    DECK
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 truncate">Evaluasi &amp; Rencana Strategis</p>
              </div>
            </div>
          ) : (
            <div className="w-9 h-9 mx-auto rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              R
            </div>
          )}

          {/* Desktop Collapse Toggle / Mobile Close */}
          <div className="flex items-center">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              title={isCollapsed ? 'Perluas Menu' : 'Ciutkan Menu'}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Vertical Section 1: Department Filters */}
        <div className="p-2 border-b border-slate-100">
          {!isCollapsed && (
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
              Divisi &amp; Materi
            </div>
          )}
          <div className="flex flex-col gap-1">
            {deptList.map((dept) => {
              const isSelected = selectedDepartment === dept.id;
              return (
                <button
                  key={dept.id}
                  onClick={() => onSelectDepartment(dept.id)}
                  title={dept.label}
                  className={`flex items-center justify-between p-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className={isSelected ? 'text-white' : 'text-slate-500'}>
                      {dept.icon}
                    </span>
                    {!isCollapsed && <span className="truncate">{dept.label}</span>}
                  </div>
                  {!isCollapsed && (
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {dept.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vertical Section 2: Slide Navigation List */}
        {!isCollapsed ? (
          <div className="flex-1 flex flex-col min-h-0 p-2 overflow-hidden">
            {/* Search Box */}
            <div className="relative mb-2">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari slide / SOP / materi..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-1 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            {/* Scrollable Slide List */}
            <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
              {filteredSlideItems.map(({ slide, originalIndex }) => {
                const isActive = currentIndex === originalIndex;
                const isSop = slide.layout === 'sop-document';

                return (
                  <button
                    key={slide.id}
                    onClick={() => {
                      onJumpToSlide(originalIndex);
                      setIsMobileOpen(false);
                    }}
                    className={`w-full text-left p-2 rounded-xl transition-all flex items-start gap-2 border text-xs ${
                      isActive
                        ? 'bg-blue-50/90 border-blue-300 ring-1 ring-blue-300 shadow-xs'
                        : 'bg-white hover:bg-slate-50 border-slate-100 text-slate-700'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-md font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : isSop
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {originalIndex + 1}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span
                          className={`text-[9px] font-bold px-1 py-0.2 rounded uppercase ${
                            slide.department === 'HR'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : slide.department === 'GA'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : slide.department === 'IT'
                              ? 'bg-sky-50 text-sky-700 border border-sky-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}
                        >
                          {slide.department}
                        </span>

                        {isSop && (
                          <span className="text-[9px] font-extrabold bg-emerald-600 text-white px-1 py-0.2 rounded">
                            SOP DOKUMEN
                          </span>
                        )}
                      </div>

                      <p
                        className={`text-[11px] leading-tight font-bold truncate ${
                          isActive ? 'text-blue-950' : 'text-slate-800'
                        }`}
                      >
                        {slide.title}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">
                        {slide.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-1 space-y-2 text-center">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => onJumpToSlide(idx)}
                className={`w-9 h-9 mx-auto rounded-lg font-mono text-xs font-bold flex items-center justify-center transition-all ${
                  currentIndex === idx
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                title={s.title}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}

        {/* Vertical Section 3: Action Buttons & Presenter Controls */}
        <div className="p-2.5 border-t border-slate-200 space-y-1.5 bg-slate-50/50">
          {/* Main Fullscreen Presentation Button */}
          <button
            onClick={onStartPresentation}
            className={`w-full py-2 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white text-xs font-bold shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 ${
              isCollapsed ? 'px-0' : ''
            }`}
            title="Mulai Presentasi Layar Penuh (Shortcut: F)"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            {!isCollapsed && <span>Mulai Presentasi (F)</span>}
          </button>

          {/* Secondary Action Grid */}
          {!isCollapsed ? (
            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <button
                onClick={onToggleNotes}
                className={`p-2 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 transition-colors ${
                  showNotes
                    ? 'bg-blue-50 border-blue-300 text-blue-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
                title="Buka Catatan Pembicara (Shortcut: N)"
              >
                <FileText className="w-3.5 h-3.5 text-blue-600" />
                <span>Notes (N)</span>
              </button>

              <button
                onClick={onToggleEditor}
                className="p-2 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                title="Edit Konten Slide Aktif (Shortcut: E)"
              >
                <Edit3 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Edit Slide</span>
              </button>

              <button
                onClick={onAddNewSlide}
                className="p-2 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                title="Tambah Slide Baru"
              >
                <Plus className="w-3.5 h-3.5 text-emerald-600" />
                <span>Tambah</span>
              </button>

              <button
                onClick={onToggleDrawer}
                className="p-2 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                title="Buka Pengatur Urutan Slide (Shortcut: M / O)"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
                <span>Urutan</span>
              </button>

              <button
                onClick={onPrintSlides}
                className="p-2 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                title="Cetak Seluruh Slide ke PDF"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Cetak PDF</span>
              </button>

              <button
                onClick={onExportJSON}
                className="p-2 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors"
                title="Ekspor Seluruh Slide ke File JSON"
              >
                <Download className="w-3.5 h-3.5 text-slate-600" />
                <span>Ekspor</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-1 items-center">
              <button
                onClick={onToggleNotes}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                title="Notes (N)"
              >
                <FileText className="w-4 h-4 text-blue-600" />
              </button>
              <button
                onClick={onToggleEditor}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                title="Edit Slide"
              >
                <Edit3 className="w-4 h-4 text-indigo-600" />
              </button>
              <button
                onClick={onPrintSlides}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
                title="Cetak PDF"
              >
                <Printer className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          )}

          {/* Import JSON hidden input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={onImportJSON}
            accept=".json"
            className="hidden"
          />

          {/* Integrated Presenter Stopwatch */}
          {!isCollapsed && (
            <div className="mt-2 p-2 bg-white border border-slate-200 rounded-xl flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block font-semibold">
                    Timer RAKER:
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-800">
                    {formatTimer(timerSeconds)}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={onToggleTimer}
                  className={`p-1.5 rounded-lg text-xs font-bold ${
                    isTimerRunning
                      ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                      : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                  }`}
                  title={isTimerRunning ? 'Jeda Timer' : 'Mulai Timer'}
                >
                  {isTimerRunning ? (
                    <PauseCircle className="w-4 h-4" />
                  ) : (
                    <PlayCircle className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={onResetTimer}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Reset Template Default Button */}
          {!isCollapsed && (
            <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="hover:text-blue-600 flex items-center gap-1 font-medium"
              >
                <Upload className="w-3 h-3" /> Impor JSON
              </button>
              <button
                onClick={onResetDefault}
                className="hover:text-red-600 flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" /> Reset Default
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

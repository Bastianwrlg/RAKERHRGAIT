import React, { useState, useMemo } from 'react';
import { Slide, Department } from '../types';
import {
  X,
  Search,
  Layers,
  Users,
  Building2,
  Cpu,
  ChevronUp,
  ChevronDown,
  Copy,
  Trash2,
  Plus,
  ArrowRight,
  CheckCircle2,
  SlidersHorizontal,
  Bookmark,
  Compass,
} from 'lucide-react';

interface SlideOrganizerMenuProps {
  slides: Slide[];
  currentIndex: number;
  currentSlideId: string;
  onSelectSlide: (index: number) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onDuplicate: (index: number) => void;
  onDelete: (index: number) => void;
  onAddNew: () => void;
  onClose: () => void;
  selectedDepartment: Department;
  onFilterDepartment: (dept: Department) => void;
  onJumpToDepartmentMateri: (dept: 'HR' | 'GA' | 'IT' | 'ALL') => void;
}

type MenuTab = 'materi' | 'organizer';

export const SlideOrganizerMenu: React.FC<SlideOrganizerMenuProps> = ({
  slides,
  currentIndex,
  currentSlideId,
  onSelectSlide,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  onAddNew,
  onClose,
  selectedDepartment,
  onFilterDepartment,
  onJumpToDepartmentMateri,
}) => {
  const [activeTab, setActiveTab] = useState<MenuTab>('materi');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDept, setFilterDept] = useState<Department>('ALL');

  const getDeptMeta = (dept: Department) => {
    switch (dept) {
      case 'HR':
        return {
          label: 'Human Resources',
          badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold',
          icon: <Users className="w-3.5 h-3.5 text-emerald-700" />,
        };
      case 'GA':
        return {
          label: 'General Affairs',
          badgeClass: 'bg-amber-50 text-amber-800 border-amber-300 font-semibold',
          icon: <Building2 className="w-3.5 h-3.5 text-amber-700" />,
        };
      case 'IT':
        return {
          label: 'Information Technology',
          badgeClass: 'bg-sky-50 text-sky-800 border-sky-300 font-semibold',
          icon: <Cpu className="w-3.5 h-3.5 text-sky-700" />,
        };
      default:
        return {
          label: 'Semua / Gabungan',
          badgeClass: 'bg-blue-50 text-blue-800 border-blue-300 font-semibold',
          icon: <Layers className="w-3.5 h-3.5 text-blue-700" />,
        };
    }
  };

  // Grouping slides into clear Materi Sections for RAKER presentation
  const categorizedSections = useMemo(() => {
    const sections: {
      id: string;
      title: string;
      subtitle: string;
      department: Department;
      slides: { slide: Slide; originalIndex: number }[];
    }[] = [
      {
        id: 'sec-opening',
        title: '1. Pembukaan & Executive Summary',
        subtitle: 'Cover Deck, Visi Strategis Bersama & Sorotan Capaian 2024',
        department: 'ALL',
        slides: [],
      },
      {
        id: 'sec-hr',
        title: '2. Materi Human Resources (HR)',
        subtitle: 'KPI Karyawan, Training, Employee Engagement & Program 2025',
        department: 'HR',
        slides: [],
      },
      {
        id: 'sec-ga',
        title: '3. Materi General Affairs (GA)',
        subtitle: 'Efisiensi Operasional, Fasilitas Kantor, Vendor & Keselamatan Kerja',
        department: 'GA',
        slides: [],
      },
      {
        id: 'sec-it',
        title: '4. Materi Information Technology (IT)',
        subtitle: 'Infrastruktur Sistem, SLA Helpdesk, Cloud ERP & Keamanan Cyber',
        department: 'IT',
        slides: [],
      },
      {
        id: 'sec-closing',
        title: '5. Anggaran & Roadmap Terpadu',
        subtitle: 'Matriks Realisasi Budget 2024-2025, Timeline Sinergi & Penutup',
        department: 'ALL',
        slides: [],
      },
    ];

    slides.forEach((slide, idx) => {
      // Filter by search query if present
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = slide.title.toLowerCase().includes(query);
        const matchSubtitle = slide.subtitle.toLowerCase().includes(query);
        const matchDept = slide.department.toLowerCase().includes(query);
        const matchNotes = slide.speakerNotes?.toLowerCase().includes(query);
        if (!matchTitle && !matchSubtitle && !matchDept && !matchNotes) {
          return;
        }
      }

      // Filter by department tab if not ALL
      if (filterDept !== 'ALL') {
        if (slide.department !== filterDept && slide.department !== 'ALL') {
          return;
        }
      }

      // Categorize into sections
      if (slide.layout === 'title' || slide.layout === 'executive-summary') {
        sections[0].slides.push({ slide, originalIndex: idx });
      } else if (slide.department === 'HR') {
        sections[1].slides.push({ slide, originalIndex: idx });
      } else if (slide.department === 'GA') {
        sections[2].slides.push({ slide, originalIndex: idx });
      } else if (slide.department === 'IT') {
        sections[3].slides.push({ slide, originalIndex: idx });
      } else {
        sections[4].slides.push({ slide, originalIndex: idx });
      }
    });

    return sections.filter((sec) => sec.slides.length > 0);
  }, [slides, searchQuery, filterDept]);

  return (
    <div className="no-print fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Main Drawer Panel */}
      <div className="w-full max-w-xl bg-white border-l border-slate-200 shadow-2xl flex flex-col h-full overflow-hidden animate-in slide-in-from-right duration-200">
        {/* Header Drawer */}
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-blue-100 border border-blue-200 text-blue-700">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <span>Menu Pengatur Slide</span>
                  <span className="text-xs bg-slate-200 border border-slate-300 text-slate-700 px-2 py-0.5 rounded-full font-mono font-bold">
                    {slides.length} Slide
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  Navigasi langsung materi presentasi atau atur susunan slide
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200 rounded-xl transition-colors"
              title="Tutup Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Jump Buttons by Department */}
          <div className="pt-2 border-t border-slate-200">
            <p className="text-[11px] font-semibold text-slate-600 mb-1.5 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>Lompat Cepat ke Materi:</span>
            </p>
            <div className="grid grid-cols-4 gap-1.5">
              <button
                onClick={() => onJumpToDepartmentMateri('ALL')}
                className="flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-all hover:scale-[1.02]"
              >
                <Layers className="w-3 h-3 text-blue-600" />
                <span className="truncate">Ringkasan</span>
              </button>

              <button
                onClick={() => onJumpToDepartmentMateri('HR')}
                className="flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-all hover:scale-[1.02]"
              >
                <Users className="w-3 h-3 text-emerald-600" />
                <span className="truncate">Materi HR</span>
              </button>

              <button
                onClick={() => onJumpToDepartmentMateri('GA')}
                className="flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition-all hover:scale-[1.02]"
              >
                <Building2 className="w-3 h-3 text-amber-600" />
                <span className="truncate">Materi GA</span>
              </button>

              <button
                onClick={() => onJumpToDepartmentMateri('IT')}
                className="flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition-all hover:scale-[1.02]"
              >
                <Cpu className="w-3 h-3 text-sky-600" />
                <span className="truncate">Materi IT</span>
              </button>
            </div>
          </div>

          {/* Mode Switch Tabs: Materi vs Organizer */}
          <div className="flex items-center p-1 bg-slate-200/80 rounded-xl border border-slate-300 mt-3">
            <button
              onClick={() => setActiveTab('materi')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'materi'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Daftar Materi Presentasi</span>
            </button>

            <button
              onClick={() => setActiveTab('organizer')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'organizer'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Pengatur Urutan & Kelola</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-3 border-b border-slate-200 bg-slate-50/70 flex flex-col gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari materi presentasi, topik KPI, atau program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 shadow-xs transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Department Filter Chips */}
          <div className="flex items-center gap-1 overflow-x-auto text-xs pb-0.5">
            <span className="text-[11px] text-slate-500 pr-1 shrink-0 font-medium">Filter:</span>
            {(['ALL', 'HR', 'GA', 'IT'] as Department[]).map((dept) => {
              const isActive = filterDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setFilterDept(dept)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {dept === 'ALL' ? 'Semua Divisi' : dept}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area: Tab 1 - Materi Presentasi */}
        {activeTab === 'materi' && (
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {categorizedSections.length === 0 ? (
              <div className="p-8 text-center text-slate-400">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p className="text-xs">Tidak ada materi yang cocok dengan pencarian "{searchQuery}"</p>
              </div>
            ) : (
              categorizedSections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <div className="flex items-center justify-between px-1">
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 tracking-wide">
                        {section.title}
                      </h4>
                      <p className="text-[11px] text-slate-500">{section.subtitle}</p>
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded-full border border-slate-200">
                      {section.slides.length} Slide
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {section.slides.map(({ slide, originalIndex }) => {
                      const isActive = slide.id === currentSlideId;
                      const deptMeta = getDeptMeta(slide.department);

                      return (
                        <div
                          key={slide.id}
                          onClick={() => {
                            onSelectSlide(originalIndex);
                            onClose();
                          }}
                          className={`p-3 rounded-xl border transition-all cursor-pointer group flex items-start justify-between gap-3 ${
                            isActive
                              ? 'bg-blue-50/80 border-blue-400 shadow-xs ring-1 ring-blue-300'
                              : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                          }`}
                        >
                          <div className="flex items-start gap-3 flex-1 min-w-0">
                            <div className="flex flex-col items-center justify-center shrink-0 w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-700 group-hover:border-blue-400 group-hover:text-blue-600 transition-colors">
                              {originalIndex + 1}
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className={`text-[10px] font-semibold px-2 py-0.2 rounded border ${deptMeta.badgeClass}`}
                                >
                                  {slide.department}
                                </span>
                                <span className="text-[10px] text-slate-500 capitalize">
                                  {slide.layout.replace('-', ' ')}
                                </span>
                                {isActive && (
                                  <span className="text-[10px] font-bold text-blue-700 bg-blue-100 border border-blue-200 px-1.5 py-0.2 rounded flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" /> Sedang Aktif
                                  </span>
                                )}
                              </div>

                              <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                {slide.title}
                              </h5>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {slide.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="shrink-0 flex items-center text-slate-400 group-hover:text-blue-600 transition-colors pt-2">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Content Area: Tab 2 - Pengatur Slide (Urutan & Kelola) */}
        {activeTab === 'organizer' && (
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs flex items-center justify-between mb-2">
              <span>Gunakan panah untuk memindahkan urutan slide presentasi.</span>
              <button
                onClick={onAddNew}
                className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Tambah Slide</span>
              </button>
            </div>

            {slides.map((s, idx) => {
              const isActive = s.id === currentSlideId;
              const deptMeta = getDeptMeta(s.department);

              return (
                <div
                  key={s.id}
                  className={`p-3 rounded-xl border transition-all ${
                    isActive
                      ? 'bg-blue-50/70 border-blue-400 shadow-xs ring-1 ring-blue-300'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-500">#{idx + 1}</span>
                      <span
                        className={`text-[10px] px-2 py-0.2 rounded font-semibold border ${deptMeta.badgeClass}`}
                      >
                        {s.department}
                      </span>
                      {isActive && (
                        <span className="text-[10px] text-blue-700 font-bold">Aktif</span>
                      )}
                    </div>

                    {/* Action Controls for Reordering */}
                    <div className="flex items-center gap-0.5">
                      <button
                        onClick={() => onMoveUp(idx)}
                        disabled={idx === 0}
                        title="Pindah ke Atas"
                        className="p-1 rounded hover:bg-slate-100 hover:text-slate-900 disabled:opacity-20 text-slate-500 transition-colors"
                      >
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onMoveDown(idx)}
                        disabled={idx === slides.length - 1}
                        title="Pindah ke Bawah"
                        className="p-1 rounded hover:bg-slate-100 hover:text-slate-900 disabled:opacity-20 text-slate-500 transition-colors"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onDuplicate(idx)}
                        title="Duplikasi Slide Ini"
                        className="p-1 rounded hover:bg-slate-100 hover:text-blue-600 text-slate-500 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                      {slides.length > 1 && (
                        <button
                          onClick={() => onDelete(idx)}
                          title="Hapus Slide Ini"
                          className="p-1 rounded hover:bg-rose-50 hover:text-rose-600 text-slate-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      onSelectSlide(idx);
                      onClose();
                    }}
                    className="cursor-pointer group pt-1"
                  >
                    <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                      {s.title}
                    </h5>
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">{s.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer Actions */}
        <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-2">
          <button
            onClick={onAddNew}
            className="flex-1 py-2 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-slate-300 shadow-xs transition-colors"
          >
            <Plus className="w-4 h-4 text-blue-600" />
            <span>Tambah Slide Baru</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Slide, Department } from '../types';
import { X, ChevronUp, ChevronDown, Copy, Trash2, Plus, Layers, Users, Building2, Cpu } from 'lucide-react';

interface SlideDrawerProps {
  slides: Slide[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onDuplicate: (index: number) => void;
  onDelete: (index: number) => void;
  onAddNew: () => void;
  onClose: () => void;
  selectedDepartment: Department;
  onFilterDepartment: (dept: Department) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  slides,
  currentIndex,
  onSelectSlide,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete,
  onAddNew,
  onClose,
  selectedDepartment,
  onFilterDepartment,
}) => {
  const getDeptColor = (dept: Department) => {
    switch (dept) {
      case 'HR':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'GA':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'IT':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      default:
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30';
    }
  };

  return (
    <div className="no-print fixed inset-y-0 left-0 z-50 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 shadow-2xl flex flex-col animate-in slide-in-from-left duration-200">
      {/* Drawer Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <span>Daftar Slide Presentasi</span>
            <span className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full font-mono">
              {slides.length}
            </span>
          </h3>
          <p className="text-[11px] text-slate-400 mt-0.5">Pilih, atur urutan, atau duplikasi slide</p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="p-3 border-b border-slate-800/80 flex items-center gap-1 overflow-x-auto bg-slate-950/40">
        {(['ALL', 'HR', 'GA', 'IT'] as Department[]).map((dept) => (
          <button
            key={dept}
            onClick={() => onFilterDepartment(dept)}
            className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
              selectedDepartment === dept
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Slides List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {slides.map((s, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={s.id}
              className={`p-3 rounded-xl border transition-all ${
                isActive
                  ? 'bg-blue-950/40 border-blue-500/80 shadow-md ring-1 ring-blue-500/50'
                  : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/30'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">#{idx + 1}</span>
                  <span className={`text-[10px] px-2 py-0.2 rounded font-semibold border ${getDeptColor(s.department)}`}>
                    {s.department}
                  </span>
                </div>

                {/* Card controls */}
                <div className="flex items-center gap-0.5">
                  <button
                    onClick={() => onMoveUp(idx)}
                    disabled={idx === 0}
                    title="Pindah ke Atas"
                    className="p-1 hover:text-white disabled:opacity-20 text-slate-400"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onMoveDown(idx)}
                    disabled={idx === slides.length - 1}
                    title="Pindah ke Bawah"
                    className="p-1 hover:text-white disabled:opacity-20 text-slate-400"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onDuplicate(idx)}
                    title="Duplikasi Slide"
                    className="p-1 hover:text-blue-400 text-slate-400"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  {slides.length > 1 && (
                    <button
                      onClick={() => onDelete(idx)}
                      title="Hapus Slide"
                      className="p-1 hover:text-rose-400 text-slate-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              <div
                onClick={() => onSelectSlide(idx)}
                className="cursor-pointer group"
              >
                <h4 className="text-xs font-bold text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-1">
                  {s.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{s.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add New Slide Footer */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/60">
        <button
          onClick={onAddNew}
          className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
        >
          <Plus className="w-4 h-4 text-blue-400" />
          <span>Tambah Slide Baru</span>
        </button>
      </div>
    </div>
  );
};

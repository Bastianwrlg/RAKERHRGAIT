import React from 'react';
import { Department } from '../types';
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
} from 'lucide-react';

interface HeaderNavbarProps {
  selectedDepartment: Department;
  onSelectDepartment: (dept: Department) => void;
  slideCounts: {
    ALL: number;
    HR: number;
    GA: number;
    IT: number;
  };
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
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  selectedDepartment,
  onSelectDepartment,
  slideCounts,
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
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const deptTabs: { id: Department; label: string; icon: React.ReactNode; color: string; count: number }[] = [
    {
      id: 'ALL',
      label: 'Semua (HRGA-IT)',
      icon: <Layers className="w-3.5 h-3.5" />,
      color: 'text-blue-600',
      count: slideCounts.ALL,
    },
    {
      id: 'HR',
      label: 'Human Resources',
      icon: <Users className="w-3.5 h-3.5" />,
      color: 'text-emerald-600',
      count: slideCounts.HR,
    },
    {
      id: 'GA',
      label: 'General Affairs',
      icon: <Building2 className="w-3.5 h-3.5" />,
      color: 'text-amber-600',
      count: slideCounts.GA,
    },
    {
      id: 'IT',
      label: 'Information Tech',
      icon: <Cpu className="w-3.5 h-3.5" />,
      color: 'text-sky-600',
      count: slideCounts.IT,
    },
  ];

  return (
    <header className="no-print bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-4 py-2.5 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Department Selector */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold shadow-sm">
              <span className="text-xs font-black tracking-wider">RAKER</span>
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-tight flex items-center gap-1.5">
                Departemen HRGA-IT
                <span className="text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded">
                  2026
                </span>
              </h1>
              <p className="text-[11px] text-slate-500">Slide Presentasi & Rencana Strategis</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 md:hidden">
            <button
              id="mobile-start-present"
              onClick={onStartPresentation}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Present</span>
            </button>
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 overflow-x-auto w-full md:w-auto">
          {deptTabs.map((tab) => {
            const isActive = selectedDepartment === tab.id;
            return (
              <button
                key={tab.id}
                id={`dept-tab-${tab.id.toLowerCase()}`}
                onClick={() => onSelectDepartment(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span className={isActive ? tab.color : 'text-slate-400'}>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-slate-100 text-slate-800' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 w-full md:w-auto justify-end overflow-x-auto">
          {/* Menu Pengatur Slide */}
          <button
            id="btn-slide-drawer"
            onClick={onToggleDrawer}
            title="Buka Menu Pengatur Slide & Navigasi Materi Presentasi"
            className="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg transition-all text-xs font-semibold flex items-center gap-1.5 shadow-xs"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs">Pengatur Slide</span>
            <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.2 rounded-full border border-blue-200 hidden sm:inline">
              Materi
            </span>
          </button>

          {/* Speaker notes toggle */}
          <button
            id="btn-speaker-notes"
            onClick={onToggleNotes}
            title="Lihat Catatan Pembicara"
            className={`p-2 rounded-lg transition-colors text-xs flex items-center gap-1.5 ${
              showNotes
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span className="hidden lg:inline text-xs font-medium">Catatan</span>
          </button>

          {/* Edit current slide */}
          <button
            id="btn-edit-slide"
            onClick={onToggleEditor}
            title="Kustomisasi & Edit Slide Ini"
            className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Edit3 className="w-3.5 h-3.5 text-blue-600" />
            <span>Kustomisasi</span>
          </button>

          {/* Add slide */}
          <button
            id="btn-add-slide"
            onClick={onAddNewSlide}
            title="Tambah Slide Baru"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>

          {/* Hidden JSON file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={onImportJSON}
            accept=".json"
            className="hidden"
          />

          {/* Import JSON */}
          <button
            id="btn-import-json"
            onClick={() => fileInputRef.current?.click()}
            title="Impor Template JSON"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Upload className="w-4 h-4" />
          </button>

          {/* Export JSON */}
          <button
            id="btn-export-json"
            onClick={onExportJSON}
            title="Simpan / Ekspor Slide ke File JSON"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
          </button>

          {/* Print / PDF */}
          <button
            id="btn-print-pdf"
            onClick={onPrintSlides}
            title="Cetak atau Simpan sebagai PDF"
            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Reset default */}
          <button
            id="btn-reset-default"
            onClick={onResetDefault}
            title="Kembalikan ke Template Awal RAKER"
            className="p-2 text-slate-600 hover:text-rose-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Main Present Button */}
          <button
            id="btn-start-presentation"
            onClick={onStartPresentation}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Mode Presentasi (F)</span>
          </button>
        </div>
      </div>
    </header>
  );
};

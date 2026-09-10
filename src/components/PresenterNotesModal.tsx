import React, { useState } from 'react';
import { Slide } from '../types';
import { FileText, X, Check, ArrowRight, Keyboard } from 'lucide-react';

interface PresenterNotesModalProps {
  currentSlide: Slide;
  nextSlide?: Slide;
  onUpdateNotes: (notes: string) => void;
  onClose: () => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  currentSlide,
  nextSlide,
  onUpdateNotes,
  onClose,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [notesText, setNotesText] = useState(currentSlide.speakerNotes || '');

  // Keep in sync when slide changes
  React.useEffect(() => {
    setNotesText(currentSlide.speakerNotes || '');
    setIsEditing(false);
  }, [currentSlide.id, currentSlide.speakerNotes]);

  const handleSave = () => {
    onUpdateNotes(notesText);
    setIsEditing(false);
  };

  return (
    <div className="no-print fixed top-16 right-4 z-50 w-96 max-w-[90vw] bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl p-4 text-slate-800 animate-in fade-in slide-in-from-right-4 duration-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-600" />
          <h3 className="text-sm font-bold text-slate-900">Presenter Notes & Talking Points</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Current Slide Info */}
      <div className="my-3">
        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
          Slide {currentSlide.slideNumber} • [{currentSlide.department}]
        </span>
        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{currentSlide.title}</h4>
      </div>

      {/* Notes Body / Editor */}
      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 mb-3">
        {isEditing ? (
          <div>
            <textarea
              value={notesText}
              onChange={(e) => setNotesText(e.target.value)}
              rows={6}
              className="w-full bg-white p-2 rounded-lg border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-blue-500 resize-none leading-relaxed"
              placeholder="Tulis poin pembicaraan atau arahan presentasi di sini..."
            />
            <div className="flex justify-end gap-2 mt-2 pt-2 border-t border-slate-200">
              <button
                onClick={() => setIsEditing(false)}
                className="px-2.5 py-1 text-xs text-slate-600 hover:text-slate-900"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 shadow-xs"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Simpan</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap min-h-[70px]">
              {notesText || (
                <span className="text-slate-400 italic">Belum ada catatan pembicara untuk slide ini.</span>
              )}
            </p>
            <div className="flex justify-end mt-2 pt-2 border-t border-slate-200">
              <button
                onClick={() => setIsEditing(true)}
                className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold"
              >
                Edit Catatan
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Next Slide Sneak Peek */}
      {nextSlide && (
        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 mb-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 text-[11px] mb-1 font-medium">
            <span>Slide Selanjutnya</span>
            <ArrowRight className="w-3 h-3" />
          </div>
          <p className="font-bold text-slate-800 line-clamp-1">
            [{nextSlide.department}] {nextSlide.title}
          </p>
        </div>
      )}

      {/* Keyboard Shortcuts Hint */}
      <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
        <span className="flex items-center gap-1">
          <Keyboard className="w-3 h-3 text-slate-400" />
          <kbd className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded text-slate-700 font-bold">Space / →</kbd> Next
        </span>
        <span>
          <kbd className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded text-slate-700 font-bold">L</kbd> Laser • <kbd className="bg-slate-100 border border-slate-200 px-1 py-0.5 rounded text-slate-700 font-bold">F</kbd> Layar Penuh
        </span>
      </div>
    </div>
  );
};

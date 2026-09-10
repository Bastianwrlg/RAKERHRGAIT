import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Slide, Department, PresentationState } from './types';
import { initialSlides } from './data/initialSlides';
import { HeaderNavbar } from './components/HeaderNavbar';
import { SlideViewer } from './components/SlideViewer';
import { PresentationControls } from './components/PresentationControls';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { SlideEditorModal } from './components/SlideEditorModal';
import { SlideOrganizerMenu } from './components/SlideOrganizerMenu';
import { LaserPointer } from './components/LaserPointer';
import { PrintSlidesView } from './components/PrintSlidesView';
import { triggerConfetti } from './utils/confetti';
import { Eye } from 'lucide-react';

const STORAGE_KEY = 'raker_hrga_it_slides_v1';

export default function App() {
  // Load slides from localStorage or fallback to default
  const [slides, setSlides] = useState<Slide[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved slides', e);
    }
    return initialSlides;
  });

  const [state, setState] = useState<PresentationState>({
    currentSlideIndex: 0,
    selectedDepartment: 'ALL',
    isFullscreen: false,
    isLaserActive: false,
    showNotes: false,
    showDrawer: false,
    isEditing: false,
    isBlackout: false,
    timerSeconds: 0,
    isTimerRunning: false,
  });

  // Persist slides changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
    } catch (e) {
      console.warn('Failed to persist slides', e);
    }
  }, [slides]);

  // Presentation Timer ticker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (state.isTimerRunning) {
      interval = setInterval(() => {
        setState((prev) => ({ ...prev, timerSeconds: prev.timerSeconds + 1 }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.isTimerRunning]);

  // Department Slide Counts
  const slideCounts = useMemo(() => {
    const counts = { ALL: slides.length, HR: 0, GA: 0, IT: 0 };
    slides.forEach((s) => {
      if (s.department === 'HR') counts.HR++;
      if (s.department === 'GA') counts.GA++;
      if (s.department === 'IT') counts.IT++;
    });
    return counts;
  }, [slides]);

  // Filtered Slides based on Department
  const filteredSlides = useMemo(() => {
    if (state.selectedDepartment === 'ALL') {
      return slides;
    }
    return slides.filter(
      (s) => s.department === state.selectedDepartment || s.department === 'ALL'
    );
  }, [slides, state.selectedDepartment]);

  // Ensure current index is within bounds
  const currentSlide = useMemo(() => {
    if (filteredSlides.length === 0) return initialSlides[0];
    const index = Math.min(Math.max(0, state.currentSlideIndex), filteredSlides.length - 1);
    return filteredSlides[index];
  }, [filteredSlides, state.currentSlideIndex]);

  const nextSlide = useMemo(() => {
    const nextIdx = state.currentSlideIndex + 1;
    if (nextIdx < filteredSlides.length) {
      return filteredSlides[nextIdx];
    }
    return undefined;
  }, [filteredSlides, state.currentSlideIndex]);

  // Navigation handlers
  const handlePrevSlide = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentSlideIndex: Math.max(0, prev.currentSlideIndex - 1),
      isBlackout: false,
    }));
  }, []);

  const handleNextSlide = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentSlideIndex: Math.min(filteredSlides.length - 1, prev.currentSlideIndex + 1),
      isBlackout: false,
    }));
  }, [filteredSlides.length]);

  const handleJumpTo = useCallback((index: number) => {
    setState((prev) => ({
      ...prev,
      currentSlideIndex: Math.min(Math.max(0, index), filteredSlides.length - 1),
      isBlackout: false,
    }));
  }, [filteredSlides.length]);

  const handleSelectDepartment = useCallback((dept: Department) => {
    setState((prev) => ({
      ...prev,
      selectedDepartment: dept,
      currentSlideIndex: 0, // Reset to first slide in that section
      isBlackout: false,
    }));
  }, []);

  const handleJumpToDepartmentMateri = useCallback(
    (category: 'HR' | 'GA' | 'IT' | 'ALL' | string) => {
      // Find the first slide matching this department
      const targetIndex = slides.findIndex((s) => {
        if (category === 'ALL') return s.layout === 'executive-summary';
        return s.department === category;
      });

      if (targetIndex !== -1) {
        setState((prev) => ({
          ...prev,
          selectedDepartment: 'ALL', // View within full deck context
          currentSlideIndex: targetIndex,
          showDrawer: false,
        }));
        triggerConfetti();
      }
    },
    [slides]
  );

  // Fullscreen toggle
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.warn('Fullscreen request failed:', err);
      });
      setState((prev) => ({ ...prev, isFullscreen: true }));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setState((prev) => ({ ...prev, isFullscreen: false }));
    }
  }, []);

  // Listen for fullscreen change events (e.g. Esc pressed)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setState((prev) => ({
        ...prev,
        isFullscreen: !!document.fullscreenElement,
      }));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard Shortcuts (Standard Presentation Controls)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when typing inside input / textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA' ||
        document.activeElement?.tagName === 'SELECT'
      ) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          e.preventDefault();
          handleNextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrevSlide();
          break;
        case 'Home':
          e.preventDefault();
          handleJumpTo(0);
          break;
        case 'End':
          e.preventDefault();
          handleJumpTo(filteredSlides.length - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'b':
        case 'B':
        case '.':
          e.preventDefault();
          setState((prev) => ({ ...prev, isBlackout: !prev.isBlackout }));
          break;
        case 'l':
        case 'L':
          e.preventDefault();
          setState((prev) => ({ ...prev, isLaserActive: !prev.isLaserActive }));
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setState((prev) => ({ ...prev, showNotes: !prev.showNotes }));
          break;
        case 'o':
        case 'O':
        case 'm':
        case 'M':
          e.preventDefault();
          setState((prev) => ({ ...prev, showDrawer: !prev.showDrawer }));
          break;
        case 'e':
        case 'E':
          e.preventDefault();
          setState((prev) => ({ ...prev, isEditing: true }));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredSlides.length, handleJumpTo, handleNextSlide, handlePrevSlide, handleToggleFullscreen]);

  // Slide CRUD actions
  const handleSaveSlide = (updatedSlide: Slide) => {
    setSlides((prev) => prev.map((s) => (s.id === updatedSlide.id ? updatedSlide : s)));
    setState((prev) => ({ ...prev, isEditing: false }));
  };

  const handleAddNewSlide = () => {
    const newSlide: Slide = {
      id: `slide-custom-${Date.now()}`,
      slideNumber: slides.length + 1,
      department: state.selectedDepartment === 'ALL' ? 'HR' : state.selectedDepartment,
      title: 'Judul Slide Presentasi RAKER Baru',
      subtitle: 'Tambahkan rincian evaluasi kinerja atau strategi program kerja baru di sini',
      layout: 'initiatives-grid',
      cards: [
        {
          id: `c-${Date.now()}-1`,
          title: 'Inisiatif Utama 1',
          description: 'Penjelasan program kerja strategis yang akan dijalankan...',
          iconName: 'Target',
          badge: 'Program Baru',
        },
        {
          id: `c-${Date.now()}-2`,
          title: 'Inisiatif Utama 2',
          description: 'Sinergi antar departemen HRGA-IT untuk efisiensi...',
          iconName: 'ShieldCheck',
          badge: 'Prioritas',
        },
      ],
      speakerNotes: 'Poin presentasi untuk slide baru ini.',
    };

    const insertIdx = state.currentSlideIndex + 1;
    const newSlides = [...slides];
    newSlides.splice(insertIdx, 0, newSlide);

    // Re-number slides
    const renumbered = newSlides.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setSlides(renumbered);
    setState((prev) => ({ ...prev, currentSlideIndex: insertIdx, isEditing: true }));
  };

  const handleDuplicateSlide = (index: number) => {
    const original = slides[index];
    if (!original) return;

    const duplicated: Slide = {
      ...JSON.parse(JSON.stringify(original)),
      id: `slide-copy-${Date.now()}`,
      title: `${original.title} (Salinan)`,
    };

    const newSlides = [...slides];
    newSlides.splice(index + 1, 0, duplicated);
    const renumbered = newSlides.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setSlides(renumbered);
    setState((prev) => ({ ...prev, currentSlideIndex: index + 1 }));
    triggerConfetti();
  };

  const handleDeleteSlide = (index: number) => {
    if (slides.length <= 1) {
      alert('Slide tidak dapat dihapus jika hanya tersisa 1 slide.');
      return;
    }
    if (confirm(`Apakah Anda yakin ingin menghapus slide "${slides[index].title}"?`)) {
      const newSlides = slides.filter((_, idx) => idx !== index);
      const renumbered = newSlides.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
      setSlides(renumbered);
      setState((prev) => ({
        ...prev,
        currentSlideIndex: Math.max(0, Math.min(prev.currentSlideIndex, renumbered.length - 1)),
      }));
    }
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newSlides = [...slides];
    const temp = newSlides[index - 1];
    newSlides[index - 1] = newSlides[index];
    newSlides[index] = temp;
    const renumbered = newSlides.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setSlides(renumbered);
    setState((prev) => ({ ...prev, currentSlideIndex: index - 1 }));
  };

  const handleMoveDown = (index: number) => {
    if (index === slides.length - 1) return;
    const newSlides = [...slides];
    const temp = newSlides[index + 1];
    newSlides[index + 1] = newSlides[index];
    newSlides[index] = temp;
    const renumbered = newSlides.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setSlides(renumbered);
    setState((prev) => ({ ...prev, currentSlideIndex: index + 1 }));
  };

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(slides, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `RAKER_HRGA_IT_Slides_2026_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        const parsed = JSON.parse(content);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSlides(parsed);
          setState((prev) => ({ ...prev, currentSlideIndex: 0 }));
          triggerConfetti();
        } else {
          alert('Format JSON tidak sesuai format slide RAKER.');
        }
      } catch (err) {
        alert('Gagal membaca file JSON. Pastikan file valid.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Reset to default initial slides
  const handleResetDefault = () => {
    if (confirm('Kembalikan ke template default RAKER HRGA-IT? Seluruh perubahan kustomisasi lokal akan diganti.')) {
      setSlides(initialSlides);
      localStorage.removeItem(STORAGE_KEY);
      setState((prev) => ({ ...prev, currentSlideIndex: 0 }));
      triggerConfetti();
    }
  };

  // Print slides to PDF
  const handlePrintSlides = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col justify-between selection:bg-blue-600 selection:text-white font-sans">
      {/* Laser pointer overlay */}
      <LaserPointer active={state.isLaserActive} />

      {/* Top Navbar Header (hidden when fullscreen or printing) */}
      {!state.isFullscreen && (
        <HeaderNavbar
          selectedDepartment={state.selectedDepartment}
          onSelectDepartment={handleSelectDepartment}
          slideCounts={slideCounts}
          onStartPresentation={handleToggleFullscreen}
          onToggleEditor={() => setState((prev) => ({ ...prev, isEditing: true }))}
          onAddNewSlide={handleAddNewSlide}
          onToggleDrawer={() => setState((prev) => ({ ...prev, showDrawer: !prev.showDrawer }))}
          onToggleNotes={() => setState((prev) => ({ ...prev, showNotes: !prev.showNotes }))}
          showNotes={state.showNotes}
          onExportJSON={handleExportJSON}
          onImportJSON={handleImportJSON}
          onPrintSlides={handlePrintSlides}
          onResetDefault={handleResetDefault}
        />
      )}

      {/* Main Slide Presentation Stage */}
      <main className={`flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 transition-all ${
        state.isFullscreen ? 'p-0 h-screen w-screen fixed inset-0 z-50 bg-black' : 'max-w-6xl mx-auto w-full'
      }`}>
        {/* Blackout Blank Screen */}
        {state.isBlackout ? (
          <div
            onClick={() => setState((prev) => ({ ...prev, isBlackout: false }))}
            className="w-full h-full flex flex-col items-center justify-center bg-black cursor-pointer text-slate-400 hover:text-slate-200 transition-colors p-8 text-center"
          >
            <Eye className="w-12 h-12 mb-3 opacity-30 animate-pulse" />
            <p className="text-sm font-medium">Layar Hitam Aktif (Fokus Pembicara RAKER)</p>
            <span className="text-xs text-slate-500 mt-1">Tekan tombol [B] atau klik di mana saja untuk melanjutkan slide</span>
          </div>
        ) : (
          <SlideViewer
            slide={currentSlide}
            totalSlides={filteredSlides.length}
            currentNumber={state.currentSlideIndex + 1}
            onEditSlide={() => setState((prev) => ({ ...prev, isEditing: true }))}
            isFullscreen={state.isFullscreen}
            onNavigateToMateri={handleJumpToDepartmentMateri}
            onOpenSlideMenu={() => setState((prev) => ({ ...prev, showDrawer: true }))}
            themeId="light-corporate"
          />
        )}
      </main>

      {/* Floating Presentation Controls */}
      <PresentationControls
        currentIndex={state.currentSlideIndex}
        totalSlides={filteredSlides.length}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
        onJumpTo={handleJumpTo}
        isFullscreen={state.isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        isLaserActive={state.isLaserActive}
        onToggleLaser={() => setState((prev) => ({ ...prev, isLaserActive: !prev.isLaserActive }))}
        showNotes={state.showNotes}
        onToggleNotes={() => setState((prev) => ({ ...prev, showNotes: !prev.showNotes }))}
        isBlackout={state.isBlackout}
        onToggleBlackout={() => setState((prev) => ({ ...prev, isBlackout: !prev.isBlackout }))}
        timerSeconds={state.timerSeconds}
        isTimerRunning={state.isTimerRunning}
        onToggleTimer={() => setState((prev) => ({ ...prev, isTimerRunning: !prev.isTimerRunning }))}
        onResetTimer={() => setState((prev) => ({ ...prev, timerSeconds: 0, isTimerRunning: false }))}
        allSlides={filteredSlides.map((s) => ({ id: s.id, title: s.title, department: s.department }))}
        onToggleDrawer={() => setState((prev) => ({ ...prev, showDrawer: !prev.showDrawer }))}
      />

      {/* Speaker Notes Console Modal */}
      {state.showNotes && (
        <PresenterNotesModal
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          onUpdateNotes={(newNotes) => {
            setSlides((prev) =>
              prev.map((s) => (s.id === currentSlide.id ? { ...s, speakerNotes: newNotes } : s))
            );
          }}
          onClose={() => setState((prev) => ({ ...prev, showNotes: false }))}
        />
      )}

      {/* Slide Customizer Editor Modal */}
      {state.isEditing && (
        <SlideEditorModal
          slide={currentSlide}
          onSave={handleSaveSlide}
          onClose={() => setState((prev) => ({ ...prev, isEditing: false }))}
        />
      )}

      {/* Slide Organizer & Materi Menu Drawer */}
      {state.showDrawer && (
        <SlideOrganizerMenu
          slides={slides}
          currentIndex={state.currentSlideIndex}
          currentSlideId={currentSlide.id}
          onSelectSlide={(idx) => {
            setState((prev) => ({ ...prev, selectedDepartment: 'ALL', currentSlideIndex: idx, showDrawer: false }));
          }}
          onMoveUp={handleMoveUp}
          onMoveDown={handleMoveDown}
          onDuplicate={handleDuplicateSlide}
          onDelete={handleDeleteSlide}
          onAddNew={handleAddNewSlide}
          onClose={() => setState((prev) => ({ ...prev, showDrawer: false }))}
          selectedDepartment={state.selectedDepartment}
          onFilterDepartment={handleSelectDepartment}
          onJumpToDepartmentMateri={handleJumpToDepartmentMateri}
        />
      )}

      {/* Dedicated Print View for PDF generation */}
      <PrintSlidesView slides={filteredSlides} />
    </div>
  );
}

import React from 'react';
import { Slide } from '../types';
import { SlideViewer } from './SlideViewer';

interface PrintSlidesViewProps {
  slides: Slide[];
}

export const PrintSlidesView: React.FC<PrintSlidesViewProps> = ({ slides }) => {
  return (
    <div className="hidden print:block w-full bg-slate-950 text-white">
      {slides.map((s, idx) => (
        <div key={s.id} className="print-slide">
          <div className="w-full max-w-5xl mx-auto">
            <SlideViewer
              slide={s}
              totalSlides={slides.length}
              currentNumber={idx + 1}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

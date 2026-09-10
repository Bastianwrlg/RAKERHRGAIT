import { Department, SlideTheme } from '../types';

export interface ThemeDefinition {
  id: SlideTheme;
  name: string;
  tagline: string;
  isLight: boolean;
  swatchPrimary: string;
  swatchSecondary: string;
  // Slide outer container
  containerBg: string;
  containerBorder: string;
  ambientLight1: string;
  ambientLight2: string;
  cornerAccent: string;
  // Typography
  titleFont: string;
  titleColor: string;
  subtitleColor: string;
  taglineColor: string;
  metaTextColor: string;
  topBarBorder: string;
  footerBorder: string;
  watermarkColor: string;
  // Cards & Widgets
  cardBg: string;
  cardBorder: string;
  cardHover: string;
  cardTitle: string;
  cardDesc: string;
  cardHighlight: string;
  // Metric blocks
  statNumberColor: string;
  statLabelColor: string;
  progressTrack: string;
  progressBar: string;
  // Pill badges
  deptBadge: (dept: Department) => string;
}

export const THEMES: Record<SlideTheme, ThemeDefinition> = {
  'light-corporate': {
    id: 'light-corporate',
    name: 'Corporate Light & Royal Blue',
    tagline: 'Tema Terang, Bersih, Modern & Profesional untuk RAKER',
    isLight: true,
    swatchPrimary: '#2563eb',
    swatchSecondary: '#ffffff',
    containerBg: 'bg-[#f8fafc] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.06),rgba(255,255,255,0))] text-slate-900',
    containerBorder: 'border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),0_0_20px_rgba(37,99,235,0.04)]',
    ambientLight1: 'bg-blue-500/[0.04]',
    ambientLight2: 'bg-indigo-500/[0.03]',
    cornerAccent: 'border-blue-500/40',
    titleFont: 'font-sans font-bold',
    titleColor: 'text-slate-900',
    subtitleColor: 'text-slate-600',
    taglineColor: 'text-blue-700 font-medium',
    metaTextColor: 'text-slate-500',
    topBarBorder: 'border-slate-200',
    footerBorder: 'border-slate-200',
    watermarkColor: 'text-slate-300',
    cardBg: 'bg-white shadow-xs',
    cardBorder: 'border-slate-200/90',
    cardHover: 'hover:border-blue-400/80 hover:bg-blue-50/30 hover:shadow-md hover:-translate-y-0.5',
    cardTitle: 'text-slate-900 font-bold',
    cardDesc: 'text-slate-600',
    cardHighlight: 'border-blue-500/60 bg-blue-50/50',
    statNumberColor: 'text-blue-700 font-bold',
    statLabelColor: 'text-slate-600 font-medium',
    progressTrack: 'bg-slate-200/90',
    progressBar: 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xs',
    deptBadge: (dept: Department) => {
      switch (dept) {
        case 'HR':
          return 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs font-semibold';
        case 'GA':
          return 'bg-amber-50 text-amber-800 border-amber-300 shadow-xs font-semibold';
        case 'IT':
          return 'bg-sky-50 text-sky-800 border-sky-300 shadow-xs font-semibold';
        default:
          return 'bg-blue-50 text-blue-800 border-blue-300 shadow-xs font-semibold';
      }
    },
  },

  'editorial-ivory': {
    id: 'editorial-ivory',
    name: 'Editorial Ivory & Warm Gold',
    tagline: 'Kemewahan Terang Alabaster dengan Sentuhan Emas Elegan',
    isLight: true,
    swatchPrimary: '#d97706',
    swatchSecondary: '#faf8f5',
    containerBg: 'bg-[#faf8f5] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.06),rgba(0,0,0,0))] text-stone-900',
    containerBorder: 'border-stone-300/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),0_0_20px_rgba(217,119,6,0.05)]',
    ambientLight1: 'bg-amber-400/[0.04]',
    ambientLight2: 'bg-orange-300/[0.03]',
    cornerAccent: 'border-amber-600/40',
    titleFont: 'font-sans font-bold',
    titleColor: 'text-stone-900',
    subtitleColor: 'text-stone-600',
    taglineColor: 'text-amber-800 font-medium',
    metaTextColor: 'text-stone-500',
    topBarBorder: 'border-stone-200',
    footerBorder: 'border-stone-200',
    watermarkColor: 'text-stone-300',
    cardBg: 'bg-white shadow-xs',
    cardBorder: 'border-stone-200',
    cardHover: 'hover:border-amber-500/70 hover:bg-stone-50 hover:shadow-md hover:-translate-y-0.5',
    cardTitle: 'text-stone-900 font-bold',
    cardDesc: 'text-stone-600',
    cardHighlight: 'border-amber-600/50 bg-amber-50/70',
    statNumberColor: 'text-amber-700 font-bold',
    statLabelColor: 'text-stone-600 font-medium',
    progressTrack: 'bg-stone-200',
    progressBar: 'bg-gradient-to-r from-amber-600 to-amber-500 shadow-xs',
    deptBadge: (dept: Department) => {
      switch (dept) {
        case 'HR':
          return 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs font-semibold';
        case 'GA':
          return 'bg-amber-50 text-amber-800 border-amber-300 shadow-xs font-semibold';
        case 'IT':
          return 'bg-sky-50 text-sky-800 border-sky-300 shadow-xs font-semibold';
        default:
          return 'bg-stone-100 text-stone-800 border-stone-300 shadow-xs font-semibold';
      }
    },
  },

  'light-emerald': {
    id: 'light-emerald',
    name: 'Mint & Emerald Executive',
    tagline: 'Nuansa Terang Hijau Segar untuk Pertumbuhan & Kinerja',
    isLight: true,
    swatchPrimary: '#059669',
    swatchSecondary: '#f2fbf7',
    containerBg: 'bg-[#f2fbf7] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.06),rgba(0,0,0,0))] text-slate-900',
    containerBorder: 'border-emerald-200/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),0_0_20px_rgba(16,185,129,0.05)]',
    ambientLight1: 'bg-emerald-500/[0.04]',
    ambientLight2: 'bg-teal-400/[0.03]',
    cornerAccent: 'border-emerald-500/40',
    titleFont: 'font-sans font-bold',
    titleColor: 'text-slate-900',
    subtitleColor: 'text-slate-600',
    taglineColor: 'text-emerald-700 font-medium',
    metaTextColor: 'text-emerald-700/70',
    topBarBorder: 'border-emerald-200/80',
    footerBorder: 'border-emerald-200/80',
    watermarkColor: 'text-emerald-300',
    cardBg: 'bg-white shadow-xs',
    cardBorder: 'border-emerald-200/80',
    cardHover: 'hover:border-emerald-500/70 hover:bg-emerald-50/30 hover:shadow-md hover:-translate-y-0.5',
    cardTitle: 'text-slate-900 font-bold',
    cardDesc: 'text-slate-600',
    cardHighlight: 'border-emerald-500/50 bg-emerald-50/50',
    statNumberColor: 'text-emerald-700 font-bold',
    statLabelColor: 'text-slate-600 font-medium',
    progressTrack: 'bg-emerald-100',
    progressBar: 'bg-gradient-to-r from-emerald-600 to-teal-500 shadow-xs',
    deptBadge: (dept: Department) => {
      switch (dept) {
        case 'HR':
          return 'bg-emerald-100 text-emerald-900 border-emerald-400 shadow-xs font-semibold';
        case 'GA':
          return 'bg-amber-50 text-amber-800 border-amber-300 shadow-xs font-semibold';
        case 'IT':
          return 'bg-sky-50 text-sky-800 border-sky-300 shadow-xs font-semibold';
        default:
          return 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs font-semibold';
      }
    },
  },

  'light-amber': {
    id: 'light-amber',
    name: 'Platinum Light & Warm Amber',
    tagline: 'Kecerahan Bersih dengan Aksen Emas Hangat & Berwibawa',
    isLight: true,
    swatchPrimary: '#f59e0b',
    swatchSecondary: '#fffdfa',
    containerBg: 'bg-[#fffdfa] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.06),rgba(0,0,0,0))] text-slate-900',
    containerBorder: 'border-amber-200/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08),0_0_20px_rgba(245,158,11,0.05)]',
    ambientLight1: 'bg-amber-400/[0.04]',
    ambientLight2: 'bg-yellow-400/[0.03]',
    cornerAccent: 'border-amber-400/50',
    titleFont: 'font-sans font-bold',
    titleColor: 'text-slate-900',
    subtitleColor: 'text-slate-600',
    taglineColor: 'text-amber-700 font-medium',
    metaTextColor: 'text-amber-700/70',
    topBarBorder: 'border-amber-200/80',
    footerBorder: 'border-amber-200/80',
    watermarkColor: 'text-amber-200',
    cardBg: 'bg-white shadow-xs',
    cardBorder: 'border-amber-200/80',
    cardHover: 'hover:border-amber-400/80 hover:bg-amber-50/30 hover:shadow-md hover:-translate-y-0.5',
    cardTitle: 'text-slate-900 font-bold',
    cardDesc: 'text-slate-600',
    cardHighlight: 'border-amber-400/60 bg-amber-50/50',
    statNumberColor: 'text-amber-700 font-bold',
    statLabelColor: 'text-slate-600 font-medium',
    progressTrack: 'bg-amber-100',
    progressBar: 'bg-gradient-to-r from-amber-500 to-yellow-500 shadow-xs',
    deptBadge: (dept: Department) => {
      switch (dept) {
        case 'HR':
          return 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs font-semibold';
        case 'GA':
          return 'bg-amber-100 text-amber-900 border-amber-400 shadow-xs font-semibold';
        case 'IT':
          return 'bg-sky-50 text-sky-800 border-sky-300 shadow-xs font-semibold';
        default:
          return 'bg-amber-50 text-amber-800 border-amber-300 shadow-xs font-semibold';
      }
    },
  },

  'obsidian-gold': {
    id: 'obsidian-gold',
    name: 'Executive Obsidian Gold (Dark)',
    tagline: 'Opsi Mode Gelap: Kemewahan Direksi & Boardroom',
    isLight: false,
    swatchPrimary: '#f59e0b',
    swatchSecondary: '#090a0f',
    containerBg: 'bg-[#090a0f] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.07),rgba(255,255,255,0))] text-slate-100',
    containerBorder: 'border-amber-500/25 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(245,158,11,0.06)]',
    ambientLight1: 'bg-amber-500/[0.06]',
    ambientLight2: 'bg-yellow-600/[0.04]',
    cornerAccent: 'border-amber-400/40',
    titleFont: 'font-sans font-bold',
    titleColor: 'text-amber-200',
    subtitleColor: 'text-amber-100/80',
    taglineColor: 'text-amber-300/90 font-medium',
    metaTextColor: 'text-amber-200/60',
    topBarBorder: 'border-amber-500/20',
    footerBorder: 'border-amber-500/15',
    watermarkColor: 'text-amber-400/40',
    cardBg: 'bg-[#12131a]/90 backdrop-blur-sm',
    cardBorder: 'border-amber-500/20',
    cardHover: 'hover:border-amber-400/50 hover:bg-[#161722] hover:shadow-[0_10px_30px_-10px_rgba(245,158,11,0.15)]',
    cardTitle: 'text-amber-100 font-bold',
    cardDesc: 'text-amber-100/70',
    cardHighlight: 'border-amber-400/60 bg-amber-950/20',
    statNumberColor: 'text-amber-200 font-bold',
    statLabelColor: 'text-amber-200/70',
    progressTrack: 'bg-amber-950/40 border border-amber-500/20',
    progressBar: 'bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_0_12px_rgba(245,158,11,0.4)]',
    deptBadge: (dept: Department) => {
      switch (dept) {
        case 'HR':
          return 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40 shadow-xs';
        case 'GA':
          return 'bg-amber-950/60 text-amber-300 border-amber-500/40 shadow-xs';
        case 'IT':
          return 'bg-sky-950/60 text-sky-300 border-sky-500/40 shadow-xs';
        default:
          return 'bg-amber-950/60 text-amber-200 border-amber-400/40 shadow-xs';
      }
    },
  },

  'midnight-navy': {
    id: 'midnight-navy',
    name: 'Royal Midnight Sapphire (Dark)',
    tagline: 'Opsi Mode Gelap: Modern Corporate & Strategic Tech',
    isLight: false,
    swatchPrimary: '#38bdf8',
    swatchSecondary: '#050b18',
    containerBg: 'bg-[#050b18] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.08),rgba(255,255,255,0))] text-slate-100',
    containerBorder: 'border-sky-500/25 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(56,189,248,0.08)]',
    ambientLight1: 'bg-sky-500/[0.07]',
    ambientLight2: 'bg-indigo-600/[0.05]',
    cornerAccent: 'border-sky-400/40',
    titleFont: 'font-sans font-bold',
    titleColor: 'text-white',
    subtitleColor: 'text-slate-300',
    taglineColor: 'text-sky-300/90 font-medium',
    metaTextColor: 'text-sky-300/60',
    topBarBorder: 'border-sky-500/20',
    footerBorder: 'border-sky-500/15',
    watermarkColor: 'text-sky-400/40',
    cardBg: 'bg-[#0a1329]/80 backdrop-blur-sm',
    cardBorder: 'border-sky-500/20',
    cardHover: 'hover:border-sky-400/50 hover:bg-[#0e1935] hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.15)]',
    cardTitle: 'text-white font-bold',
    cardDesc: 'text-slate-300',
    cardHighlight: 'border-sky-400/60 bg-sky-950/25',
    statNumberColor: 'text-sky-200 font-bold',
    statLabelColor: 'text-slate-400',
    progressTrack: 'bg-sky-950/40 border border-sky-500/20',
    progressBar: 'bg-gradient-to-r from-sky-500 to-blue-500 shadow-[0_0_12px_rgba(56,189,248,0.4)]',
    deptBadge: (dept: Department) => {
      switch (dept) {
        case 'HR':
          return 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40';
        case 'GA':
          return 'bg-amber-950/60 text-amber-300 border-amber-500/40';
        case 'IT':
          return 'bg-sky-500/20 text-sky-200 border-sky-400/50';
        default:
          return 'bg-sky-900/40 text-sky-100 border-sky-500/40';
      }
    },
  },
};

export const THEME_LIST = Object.values(THEMES);

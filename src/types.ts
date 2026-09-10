export type Department = 'ALL' | 'HR' | 'GA' | 'IT';

export type SlideLayout = 
  | 'title' 
  | 'executive-summary' 
  | 'kpi-dashboard' 
  | 'split-details' 
  | 'timeline-roadmap' 
  | 'budget-matrix' 
  | 'initiatives-grid' 
  | 'sop-document'
  | 'closing';

export interface SopStep {
  step: number;
  actor: string;
  title: string;
  description: string;
  document?: string;
}

export interface SopFormItem {
  neededCount: number;
  position: string;
  qualification: string;
  targetDate: string;
  department?: string;
  recruitmentStart?: string;
}

export interface SopDocumentData {
  sopName: string;
  purpose: string;
  policies: {
    title: string;
    description: string;
    ruleHighlight?: string;
    ratioFormula?: string;
  }[];
  procedures: SopStep[];
  requiredForms: {
    name: string;
    description: string;
  }[];
  sampleProposalForm: {
    title: string;
    creator: string;
    rows: SopFormItem[];
  };
  sampleRecruitmentForm: {
    title: string;
    creator: string;
    rows: SopFormItem[];
  };
}

export interface SlideMetric {
  id: string;
  label: string;
  value: string;
  target?: string;
  unit?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendText?: string;
  status?: 'achieved' | 'on-track' | 'warning' | 'pending';
  progress?: number; // 0 - 100
}

export interface SlideCard {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  category?: Department;
  badge?: string;
  details?: string[];
  metrics?: { label: string; val: string }[];
}

export interface TimelineItem {
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  title: string;
  department: Department;
  description: string;
  status: 'Done' | 'In Progress' | 'Planned';
  deliverables: string[];
}

export interface BudgetItem {
  category: string;
  department: Department;
  budget: number; // in Millions IDR
  realization: number;
  percentage: number;
  notes: string;
}

export interface Slide {
  id: string;
  slideNumber: number;
  department: Department;
  layout: SlideLayout;
  title: string;
  subtitle: string;
  tagline?: string;
  speakerNotes: string;
  cards?: SlideCard[];
  metrics?: SlideMetric[];
  timeline?: TimelineItem[];
  budget?: BudgetItem[];
  bulletPoints?: string[];
  keyHighlight?: string;
  sopData?: SopDocumentData;
  interactiveOptions?: {
    allowMetricToggle?: boolean;
    showCalculator?: boolean;
    allowCelebration?: boolean;
  };
}

export type SlideTheme = 
  | 'light-corporate' 
  | 'editorial-ivory' 
  | 'light-emerald' 
  | 'light-amber'
  | 'obsidian-gold' 
  | 'midnight-navy';

export interface PresentationState {
  currentSlideIndex: number;
  selectedDepartment: Department; // Filter: ALL, HR, GA, IT
  isFullscreen: boolean;
  isLaserActive: boolean;
  showNotes: boolean;
  showDrawer: boolean;
  isEditing: boolean;
  isBlackout: boolean;
  timerSeconds: number;
  isTimerRunning: boolean;
  theme: SlideTheme;
}

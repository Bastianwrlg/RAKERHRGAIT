import React from 'react';
import {
  Users,
  Building2,
  Cpu,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  FileText,
  DollarSign,
  AlertTriangle,
  Clock,
  Briefcase,
  Zap,
  Server,
  Lock,
  HeartHandshake
} from 'lucide-react';

interface IconRendererProps {
  name?: string;
  className?: string;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = "w-5 h-5" }) => {
  switch (name) {
    case 'Users':
      return <Users className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Calendar':
      return <Calendar className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'DollarSign':
      return <DollarSign className={className} />;
    case 'AlertTriangle':
      return <AlertTriangle className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Server':
      return <Server className={className} />;
    case 'Lock':
      return <Lock className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};

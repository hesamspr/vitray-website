import {
  Award,
  CalendarClock,
  Clock,
  Database,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  UserMinus,
  Users,
} from 'lucide-react';

import { DashboardSolutionTemplate, type DashboardSolutionConfig } from '@/components/ui/dashboard-solution-template';

const config: DashboardSolutionConfig = {
  i18nKey: 'hr_dash',
  pageTitleKey: 'page_titles.hr_dashboard',
  currentHref: '/bi-dashboards/hr',
  capabilityIcons: [Database, ShieldCheck, Sparkles],
  viewIcons: [Users, CalendarClock, Clock, GraduationCap, Award, UserMinus],
};

export function HRDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default HRDashboardPage;

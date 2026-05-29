import {
  Activity,
  AlertTriangle,
  CalendarCheck,
  CircleDollarSign,
  Database,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from 'lucide-react';

import { DashboardSolutionTemplate, type DashboardSolutionConfig } from '@/components/ui/dashboard-solution-template';

const config: DashboardSolutionConfig = {
  i18nKey: 'maintenance_dash',
  pageTitleKey: 'page_titles.maintenance_dashboard',
  currentHref: '/bi-dashboards/maintenance',
  capabilityIcons: [Database, ShieldCheck, Sparkles],
  viewIcons: [Heart, CalendarCheck, AlertTriangle, Activity, CircleDollarSign, Target],
};

export function MaintenanceDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default MaintenanceDashboardPage;

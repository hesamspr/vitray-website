import {
  Banknote,
  Clock,
  Database,
  FileSearch,
  Receipt,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
} from 'lucide-react';

import { DashboardSolutionTemplate, type DashboardSolutionConfig } from '@/components/ui/dashboard-solution-template';

const config: DashboardSolutionConfig = {
  i18nKey: 'finance_dash',
  pageTitleKey: 'page_titles.finance_dashboard',
  currentHref: '/bi-dashboards/finance',
  capabilityIcons: [Database, ShieldCheck, Sparkles],
  viewIcons: [Banknote, TrendingUp, Receipt, FileSearch, Wallet, Clock],
};

export function FinanceDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default FinanceDashboardPage;

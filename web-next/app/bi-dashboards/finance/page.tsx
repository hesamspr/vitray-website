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
  powerbiEmbedUrl:
    'https://app.powerbi.com/view?r=eyJrIjoiYjc4ODI5ZTItMzBiYy00ZDk3LTk2M2YtMjVlMTM1ZjRiZTA5IiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9&pageName=ReportSection',
};

export function FinanceDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default FinanceDashboardPage;

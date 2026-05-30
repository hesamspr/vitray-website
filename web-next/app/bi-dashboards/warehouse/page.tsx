import {
  ArchiveX,
  CalendarDays,
  Database,
  Eye,
  PackageCheck,
  Repeat,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Wallet,
} from 'lucide-react';

import { DashboardSolutionTemplate, type DashboardSolutionConfig } from '@/components/ui/dashboard-solution-template';

const config: DashboardSolutionConfig = {
  i18nKey: 'warehouse_dash',
  pageTitleKey: 'page_titles.warehouse_dashboard',
  currentHref: '/bi-dashboards/warehouse',
  capabilityIcons: [Database, ShieldCheck, Sparkles],
  viewIcons: [Eye, CalendarDays, Repeat, ArchiveX, Wallet, ShoppingCart],
  powerbiEmbedUrl:
    'https://app.powerbi.com/view?r=eyJrIjoiNTJlMDA3NTQtOWViNy00M2MxLTg3ZGItMTAzNjQ4MTUxMjYwIiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9',
};

export function WarehouseDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default WarehouseDashboardPage;

import {
  Database,
  Eye,
  GitCompareArrows,
  LayoutGrid,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';

import { DashboardSolutionTemplate, type DashboardSolutionConfig } from '@/components/ui/dashboard-solution-template';

const config: DashboardSolutionConfig = {
  i18nKey: 'b2b_sales',
  pageTitleKey: 'page_titles.b2b_sales_dashboard',
  currentHref: '/bi-dashboards/b2b-sales',
  capabilityIcons: [Database, ShieldCheck, Sparkles],
  viewIcons: [Eye, LineChart, Users, GitCompareArrows, TrendingUp, LayoutGrid],
  powerbiEmbedUrl:
    'https://app.powerbi.com/view?r=eyJrIjoiODRhZjJjY2YtYjY0Ni00ZjM4LThiOTktMGRlNDI3M2M2NGY5IiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9&pageName=ReportSection879071a21508da2e80b1',
};

export function B2BSalesDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default B2BSalesDashboardPage;

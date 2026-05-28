'use client'

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
};

export function B2BSalesDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default B2BSalesDashboardPage;

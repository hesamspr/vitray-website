'use client'

import {
  Activity,
  AlertTriangle,
  Database,
  Eye,
  Gauge,
  HardHat,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

import { DashboardSolutionTemplate, type DashboardSolutionConfig } from '@/components/ui/dashboard-solution-template';

const config: DashboardSolutionConfig = {
  i18nKey: 'production_dash',
  pageTitleKey: 'page_titles.production_dashboard',
  currentHref: '/bi-dashboards/production',
  capabilityIcons: [Database, ShieldCheck, Sparkles],
  viewIcons: [Eye, Gauge, AlertTriangle, Layers, HardHat, TrendingUp],
};

export function ProductionDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default ProductionDashboardPage;

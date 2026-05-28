'use client'

import {
  Database,
  Eye,
  Map,
  PackageX,
  ShieldCheck,
  Sparkles,
  Store,
  Target,
  Truck,
  Users,
} from 'lucide-react';

import { DashboardSolutionTemplate, type DashboardSolutionConfig } from '@/components/ui/dashboard-solution-template';

const config: DashboardSolutionConfig = {
  i18nKey: 'dist_sales',
  pageTitleKey: 'page_titles.distribution_dashboard',
  currentHref: '/bi-dashboards/distribution-sales',
  capabilityIcons: [Database, ShieldCheck, Sparkles],
  viewIcons: [Eye, Target, Users, Store, PackageX, Map],
};

export function DistributionSalesDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default DistributionSalesDashboardPage;

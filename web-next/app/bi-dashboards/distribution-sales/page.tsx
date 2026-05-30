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
  powerbiEmbedUrl:
    'https://app.powerbi.com/view?r=eyJrIjoiYmRhOGIyM2QtMjZlYy00NGIwLWJiMTYtZDUzYjYyMTc3NTU0IiwidCI6IjA5YTdiYjhiLTVkMDgtNDhhMi05ODk5LTYzZWU2N2FhY2Q5OSIsImMiOjF9&pageName=ReportSection',
};

export function DistributionSalesDashboardPage() {
  return <DashboardSolutionTemplate config={config} />;
}

export default DistributionSalesDashboardPage;

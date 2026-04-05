'use client'

import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { RelatedDashboardsSection } from '@/components/ui/feature-section-with-card-gradient';
import { useTranslation } from '@/hooks/useTranslation';
import { getNavItems } from '@/lib/navItems';
import { usePageTitle } from '@/lib/usePageTitle';

export function DistributionSalesDashboardPage() {
  const { t } = useTranslation();
  const navItems = getNavItems(t);
  usePageTitle('page_titles.distribution_dashboard');
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />
      <div className="flex items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">{t('page_titles.distribution_dashboard')}</h1>
      </div>
      <RelatedDashboardsSection currentHref="/bi-dashboards/distribution-sales" />
      <Footer />
    </div>
  );
}

export default DistributionSalesDashboardPage

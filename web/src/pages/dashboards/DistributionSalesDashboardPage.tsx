import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { RelatedDashboardsSection } from '@/components/ui/feature-section-with-card-gradient';
import {
  BarChart3,
  Cloud,
  GraduationCap,
  Home,
  Info,
  Layers3,
  Mail,
  Package,
  Share2,
} from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';

const navItems = [
  { name: 'خانه', url: '/', icon: Home },
  {
    name: 'راهکارها',
    url: '/#products',
    icon: Package,
    subItems: [
      { name: 'هوش تجاری', url: '/bi-solution', icon: BarChart3 },
      { name: 'پیکسل', url: '/pixel', icon: Cloud },
      { name: 'پالس', url: '/pulse', icon: Share2 },
      { name: 'پلکس', url: '/plex', icon: Layers3 },
      { name: 'آکادمی', url: 'https://academy.vitrayco.com', icon: GraduationCap },
    ],
  },
  { name: 'درباره ما', url: '/about', icon: Info },
  { name: 'تماس با ما', url: '/contact', icon: Mail },
];

export function DistributionSalesDashboardPage() {
  usePageTitle('داشبورد فروش پخش');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />
      <div className="flex items-center justify-center min-h-[80vh]">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">داشبورد فروش پخش</h1>
      </div>
      <RelatedDashboardsSection currentHref="/bi-dashboards/distribution-sales" />
      <Footer />
    </div>
  );
}

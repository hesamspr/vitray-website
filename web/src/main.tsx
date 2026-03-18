import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { ScrollToTop } from './components/ScrollToTop';
import './index.css';

const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BiSolutionPage = lazy(() => import('./pages/BiSolutionPage').then(m => ({ default: m.BiSolutionPage })));
const PlexPage = lazy(() => import('./pages/PlexPage').then(m => ({ default: m.PlexPage })));
const PixelPage = lazy(() => import('./pages/PixelPage').then(m => ({ default: m.PixelPage })));
const PulsePage = lazy(() => import('./pages/PulsePage').then(m => ({ default: m.PulsePage })));
const B2BSalesDashboardPage = lazy(() => import('./pages/dashboards/B2BSalesDashboardPage').then(m => ({ default: m.B2BSalesDashboardPage })));
const DistributionSalesDashboardPage = lazy(() => import('./pages/dashboards/DistributionSalesDashboardPage').then(m => ({ default: m.DistributionSalesDashboardPage })));
const FinanceDashboardPage = lazy(() => import('./pages/dashboards/FinanceDashboardPage').then(m => ({ default: m.FinanceDashboardPage })));
const HRDashboardPage = lazy(() => import('./pages/dashboards/HRDashboardPage').then(m => ({ default: m.HRDashboardPage })));
const WarehouseDashboardPage = lazy(() => import('./pages/dashboards/WarehouseDashboardPage').then(m => ({ default: m.WarehouseDashboardPage })));
const ProductionDashboardPage = lazy(() => import('./pages/dashboards/ProductionDashboardPage').then(m => ({ default: m.ProductionDashboardPage })));
const MaintenanceDashboardPage = lazy(() => import('./pages/dashboards/MaintenanceDashboardPage').then(m => ({ default: m.MaintenanceDashboardPage })));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bi-solution" element={<BiSolutionPage />} />
          <Route path="/plex" element={<PlexPage />} />
          <Route path="/pixel" element={<PixelPage />} />
          <Route path="/pulse" element={<PulsePage />} />
          <Route path="/bi-dashboards/b2b-sales" element={<B2BSalesDashboardPage />} />
          <Route path="/bi-dashboards/distribution-sales" element={<DistributionSalesDashboardPage />} />
          <Route path="/bi-dashboards/finance" element={<FinanceDashboardPage />} />
          <Route path="/bi-dashboards/hr" element={<HRDashboardPage />} />
          <Route path="/bi-dashboards/warehouse" element={<WarehouseDashboardPage />} />
          <Route path="/bi-dashboards/production" element={<ProductionDashboardPage />} />
          <Route path="/bi-dashboards/maintenance" element={<MaintenanceDashboardPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);

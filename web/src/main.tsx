import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BiSolutionPage } from './pages/BiSolutionPage';
import { PlexPage } from './pages/PlexPage';
import { PixelPage } from './pages/PixelPage';
import { PulsePage } from './pages/PulsePage';
import { B2BSalesDashboardPage } from './pages/dashboards/B2BSalesDashboardPage';
import { DistributionSalesDashboardPage } from './pages/dashboards/DistributionSalesDashboardPage';
import { FinanceDashboardPage } from './pages/dashboards/FinanceDashboardPage';
import { HRDashboardPage } from './pages/dashboards/HRDashboardPage';
import { WarehouseDashboardPage } from './pages/dashboards/WarehouseDashboardPage';
import { ProductionDashboardPage } from './pages/dashboards/ProductionDashboardPage';
import { MaintenanceDashboardPage } from './pages/dashboards/MaintenanceDashboardPage';
import { ScrollToTop } from './components/ScrollToTop';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
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
    </BrowserRouter>
  </React.StrictMode>,
);

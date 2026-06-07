import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import OrderTracking from './pages/OrderTracking';
import ManagementDashboard from './pages/ManagementDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/track/:orderId" element={<OrderTracking />} />
        <Route path="/dashboard" element={<ManagementDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

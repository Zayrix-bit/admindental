import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import LeadsPage from "./pages/LeadsPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import ContentPage from "./pages/ContentPage";
import BlogPage from "./pages/BlogPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/" element={<Layout><DashboardPage /></Layout>} />
        <Route path="/leads" element={<Layout><LeadsPage /></Layout>} />
        <Route path="/appointments" element={<Layout><AppointmentsPage /></Layout>} />
        <Route path="/content" element={<Layout><ContentPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

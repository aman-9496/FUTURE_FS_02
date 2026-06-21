import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Public pages
import Home     from './pages/public/Home';
import About    from './pages/public/About';
import Services from './pages/public/Services';
import Contact  from './pages/public/Contact';

// Admin pages
import Login     from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';

// Route guard
import ProtectedRoute from './routes/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/services" element={<Services />} />
        <Route path="/contact"  element={<Contact />}  />

        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import HomePage from './pages/HomePage';
import CarreirasPage from './pages/CarreirasPage';

function AppContent() {
  const location = useLocation();
  const currentPage = location.pathname === '/carreiras' ? 'carreiras' : 'home';

  return (
    <>
      <Navbar currentPage={currentPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carreiras" element={<CarreirasPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import Certificates from "./pages/Certificates/Certificates";
import Contact from "./pages/Contact/Contact";

import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;

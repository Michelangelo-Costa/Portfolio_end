import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Certificates from "./pages/Certificates/Certificates";

import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="px-4 py-4 sm:px-6 sm:py-8 min-h-[100vh] space-y-3 max-w-[900px] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

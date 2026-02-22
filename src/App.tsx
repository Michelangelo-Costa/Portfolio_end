import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Certificates from "./pages/Certificates/Certificates";

import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

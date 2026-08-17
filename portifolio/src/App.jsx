import './App.css';
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;

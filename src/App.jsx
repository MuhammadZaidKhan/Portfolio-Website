import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
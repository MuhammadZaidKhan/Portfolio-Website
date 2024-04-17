import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home'
// import About from './Pages/About';
// import ArticlesListPage from './Pages/ArticlesListPage';
// import ArticlePage from './Pages/Article-Page';
import Navbar from './Components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path="/articles" element={<ArticlesListPage />} /> */}
        {/* <Route path="/articles/:articleId" element={<ArticlePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
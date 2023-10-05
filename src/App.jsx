import './App.css'
import { Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import ContactPage from "./components/pages/ContactPage.jsx";
import ArticlesRoutes from "./components/ArticlesRoutes.jsx";

function App() {

  return (
      <div className="app">
        <Navbar/>
        <div className="content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/articles/*" element={ <ArticlesRoutes/>}/>
                { /* TODO: 404 page */ }
                <Route path={'*'} element={<h1>Page not found</h1>} />
            </Routes>
        </div>
      </div>
  )
}

export default App

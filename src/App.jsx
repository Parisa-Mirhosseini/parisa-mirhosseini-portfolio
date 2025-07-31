import './App.scss';
import Header from './components/Header/Header.jsx';
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
import React from "react";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import BlogPage from "./Pages/BlogPage/BlogPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ServicesPage from './Pages/ServicesPage/ServicesPage.jsx';


function App() {
  return (
    <BrowserRouter>
   <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="Projects" element={<ProjectPage />} />
        <Route path="Services" element={<ServicesPage />} />
        <Route path="Blog" element={<BlogPage />} />
        <Route path="Contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;

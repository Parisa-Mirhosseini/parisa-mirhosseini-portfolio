import './App.scss';
import Header from './components/Header/Header.jsx';
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
import React from "react";


function App() {
  return (
    <BrowserRouter>
   <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        {/* <Route path="/About" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Contact" element={<ContactPage />} /> */}
      </Routes>
      <Footer />
     
      </BrowserRouter>
  );
}

export default App;

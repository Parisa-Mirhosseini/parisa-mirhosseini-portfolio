import './App.scss';
import Header from './components/Header/Header.jsx';
import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
import React from "react";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app__content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

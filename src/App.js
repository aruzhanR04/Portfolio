import React, { useEffect } from 'react';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeContextProvider from './context/ThemeContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log(`${entry.name}: ${entry.duration}`);
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    performance.mark('app-start');

    return () => {
      performance.clearMarks();
      performance.clearMeasures();
    };
  }, []);

  useEffect(() => {
    performance.measure('app-start');
  }, []);

  return (
    <ThemeContextProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
};

export default App;

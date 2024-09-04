import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from "./components/Contact";
function App() {
    return (
        <div className="App">
            {/* Navbar Component */}
            <Navbar />

            {/* Header Section */}
            <header className="App-header">
                <div className="overlay"></div>
                <div className="content">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Hi, I'm Matthew Smith, a software developer and aspiring data scientist.</p>
                    <a className="cta-button" href="#projects">Check out my projects.</a>
                </div>
            </header>

            {/* About Section */}
            <About />

            {/* Projects Section */}
            <Projects />

            {/* Contact Section */}
            <Contact />
        </div>
    );
}

export default App;
import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
import Testimonials from '~/components/Testimonials/Testimonials';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default App;

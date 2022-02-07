import React, { forwardRef, useEffect, useRef } from 'react';
import { HashRouter, NavLink, useLocation } from 'react-router-dom';
import './styles.css';

const Header = ({ refs }) => {
  const location = useLocation();

  useEffect(() => {
    console.log('location', location.pathname);
    switch (location.pathname) {
      case '/about':
        scrollSmoothHandler(refs.aboutRef);
        break;
      case '/contact':
        scrollSmoothHandler(refs.contactRef);
        break;
      case '/intro':
        scrollSmoothHandler(refs.introRef);
        break;

      default:
        scrollSmoothHandler(refs.homeRef);
        break;
    }
  }, [location, refs]);

  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavLink to='/intro' activeClassName='selected'>
        Intro
      </NavLink>
      <NavLink to='/about' activeClassName='selected'>
        About
      </NavLink>
      <NavLink to='/contact' activeClassName='selected'>
        Contact
      </NavLink>
    </>
  );
};

const Intro = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1>Intro Section</h1>
    </section>
  );
});

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1>About Section</h1>
    </section>
  );
});

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <h1>Contact Section</h1>
    </section>
  );
});

function App() {
  const homeRef = useRef(null);
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div ref={homeRef} className='App'>
      <HashRouter>
        <Header refs={{ aboutRef, contactRef, introRef, homeRef }} />
        <Intro ref={introRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
      </HashRouter>
    </div>
  );
}

export default App;

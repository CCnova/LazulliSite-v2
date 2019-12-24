import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import classes from './App.module.css';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Home />
        <Services />
        <About />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;

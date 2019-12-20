import React from 'react';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;

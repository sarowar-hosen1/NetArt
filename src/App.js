import React from 'react';
import Footer from './components/Footer/Footer';
import HomeMain from './components/Home/Home';
import Products from './components/Products/Products';

import './App.css'

const App = () => {
  return (
    <div className="app">
      <HomeMain></HomeMain>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default App;
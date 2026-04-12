import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from "./components//hero/hero";
import Stat from './components/stat/Stat';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stat/>
    </div>
  );
};

export default App;
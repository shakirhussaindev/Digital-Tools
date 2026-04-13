import React, { Suspense } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from "./components//hero/hero";
import Stat from './components/stat/Stat';
import Tools from './components/tools/Tools';

const productsFetch = async () => {
  const res = await fetch("/products.json")
  return res.json()
}

const App = () => {
  const fetchProduct = productsFetch()
  return (
    <div>
      <Navbar />
      <Hero />
      <Stat />
      <Suspense fallback={<p>Loading......</p>}>
        <Tools fetchProduct={fetchProduct} />
      </Suspense>
    </div>
  );
};

export default App;
import React, { Suspense, useMemo, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from "./components//hero/hero";
import Stat from './components/stat/Stat';
import Tools from './components/tools/Tools';
import GetStarted from './components/GetStarted';
import Pricing from './components/pricing/Pricing';
import Footer from './components/Footer';

const productsFetch = async () => {
  const res = await fetch("/products.json")
  return res.json()
}

const App = () => {
  // const fetchProduct = productsFetch()
  const fetchProduct = useMemo(() => productsFetch(), []);
  const [cardArr,setCardArr] = useState([])
  return (
    <div>
      <Navbar cardArr={cardArr}/>
      <Hero />
      <Stat />
      <Suspense fallback={<p>Loading......</p>}>
        <Tools fetchProduct={fetchProduct} cardArr={cardArr} setCardArr={setCardArr}/>
      </Suspense>
      <GetStarted/>
      <Pricing/>
      <Footer/>
    </div>
  );
};

export default App;
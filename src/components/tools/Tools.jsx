import React, { useState } from 'react';
import Products from './products/Products';
import Cart from './cart/Cart';

const Tools = ({ fetchProduct,cardArr, setCardArr }) => {
  const [toolBtn, setToolBtn] = useState("active");


  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-center text-[clamp(1.5rem,3vw,3rem)] font-extrabold">
        Premium Digital Tools
      </h2>
      <p className="text-center text-[#627382] py-4">
        Choose from our curated collection of premium digital products designed
        <br /> to boost your productivity and creativity.
      </p>
      <div className="text-center mb-10">
        <div className="border inline rounded-full border-gray-200 px-1 py-5">
          <button
            onClick={() => setToolBtn("active")}
            className={`${toolBtn === "active" ? "myGradient text-white" : ""} font-bold py-3.5 px-6 rounded-full`}
          >
            Products
          </button>
          <button
            onClick={() => setToolBtn("inactive")}
            className={`${toolBtn === "inactive" ? "myGradient text-white" : ""} font-bold py-3.5 px-6 rounded-full`}
          >
            Cart ({cardArr.length})
          </button>
        </div>
      </div>
      <div>
        {toolBtn === "active" && (
          <Products
            fetchProduct={fetchProduct}
            cardArr={cardArr}
            setCardArr={setCardArr}
          />
        )}
      </div>
      <div>
        {toolBtn === "inactive" && (
          <Cart cardArr={cardArr} setCardArr={setCardArr} />
        )}
      </div>
    </div>
  );
};

export default Tools;
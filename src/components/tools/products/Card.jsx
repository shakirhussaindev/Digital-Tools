import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { GiCheckMark } from 'react-icons/gi';
import { toast } from 'react-toastify';

const Card = ({ product,cardArr, setCardArr}) => {
  const [isSelected,setIsSelected] = useState(true)
  const cardBtn = (product) =>{
    setIsSelected(false);
    
    const existCard = cardArr.find(i => i.id === product.id)
    if(!existCard){
      const cardUpdate = [...cardArr, product];
      setCardArr(cardUpdate)
      toast.success("Item added to cart!")
    }
    
  }

  const badgeColor = (badge) => {
    switch(badge){
      case "Best Seller":
        return "bg-orange-100 text-orange-600";
      case "Popular":
        return "bg-purple-100 text-purple-600";
      case "New":
        return "bg-green-100 text-green-600";
    }
  }
  return (
    <div className="border border-[#e9e9e9] rounded-2xl px-6 pb-6 pt-2.5 shadow-sm relative space-y-4">
      <span
        className={`absolute right-6 py-1.5 px-3 rounded-full ${badgeColor(product.badge)}`}
      >
        {product.badge}
      </span>
      <div className="w-15 h-15 border border-[#dbdbdb] rounded-full flex justify-center items-center mt-3.5">
        <img src={product.image} alt={product.title} />
      </div>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-[#627382]">{product.description}</p>
      <p className="text-2xl font-bold">
        ${product.price}
        <span className="text-base text-[#627382] font-normal">
          /{product.billing}
        </span>
      </p>
      <ul className="flex flex-col gap-2">
        {product.features.map((feature, ind) => (
          <li className="flex items-center gap-2 text-[#627382]" key={ind}>
            <FcCheckmark className="text-xl" />
            {feature}
          </li>
        ))}
      </ul>
      <div
        onClick={() => cardBtn(product)}
        className={`${isSelected ? "myGradient" : "bg-green-500"} flex justify-center py-3.75 rounded-3xl font-bold text-white cursor-pointer`}
      >
        <button type="button">
          {isSelected === true ? (
            "Buy Now"
          ) : (
            <span className="flex items-center gap-2">
              <GiCheckMark />
              Added to Cart
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
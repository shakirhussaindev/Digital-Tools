import React from 'react';

const CardOfCart = ({ card, handleRemove }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between p-5 bg-gray-100 rounded-lg mb-4">
        <div className="flex items-center gap-4">
          <div className="w-15 h-15 bg-white rounded-full flex justify-center items-center">
            <img src={card.image} alt="" />
          </div>
          <div>
            <h3 className="text-xl font-semibold pb-2">{card.title}</h3>
            <p className="text-gray-600">${card.price}</p>
          </div>
        </div>
        <p onClick={()=>handleRemove(card.id)} className="font-bold text-pink-600 cursor-pointer">Remove</p>
      </div>
    </div>
  );
};

export default CardOfCart;
import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import CardOfCart from './CardOfCart';
import { toast } from 'react-toastify';

const Cart = ({ cardArr, setCardArr }) => {
  const totalPrice = cardArr.reduce((sum,item)=> sum + item.price,0)
  const handleRemove = (id) => {
    const remainingCards = cardArr.filter(card => card.id !== id)
    setCardArr(remainingCards);
    toast("Item removed")
  }
  return (
    <div className="border border-gray-200 rounded-2xl p-10 my-10">
      <h4 className="text-2xl font-bold pb-6">Your Cart</h4>
      {cardArr.length > 0 ? (
        <div>
          {cardArr.map((card) => {
            console.log(card)
            return (
              <div key={card.id}>
                <CardOfCart card={card} handleRemove={handleRemove}/>
              </div>
            );
          })}
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center gap-4'>
          <IoCartOutline className="text-5xl text-gray-500" />
          <p className=" text-gray-500 font-semibold">Your cart is empty</p>
        </div>
      )}
      <div className={cardArr.length === 0?"hidden":"block"}>
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-700 font-medium">Total:</p>
          <p className="text-2xl font-bold">${totalPrice}</p>
        </div>
        <button onClick={()=> setCardArr([])} className="myGradient p-3.75 text-white rounded-full w-full font-bold cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
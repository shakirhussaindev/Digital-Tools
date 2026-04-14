import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const PricingCard = ({
  plan,
  price,
  description,
  features,
  buttonText,
  isPopular,
  isGradient,
}) => {
  return (
    <div
      className={`relative h-130 p-8 rounded-3xl border flex flex-col transition-all duration-300 
      ${
        isGradient
          ? "myGradient text-white border-transparent scale-105 z-10"
          : "bg-white text-[#1a2b3c] border-gray-100 hover:shadow-xl"
      }`}
    >
      {/* Most Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fff2cc] text-[#d97706] text-[10px] font-bold py-1 px-4 rounded-full border border-[#fde68a]">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-1">{plan}</h3>
        <p
          className={`text-sm ${isGradient ? "text-purple-100" : "text-gray-400"}`}
        >
          {description}
        </p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span className="text-3xl font-bold">${price}</span>
        <span
          className={`${isGradient ? "text-purple-200" : "text-gray-400"} font-medium`}
        >
          /Month
        </span>
      </div>

      <ul className="space-y-4 mb-10 flex-grow text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm">
            <IoMdCheckmark
              className={`text-lg ${isGradient ? "text-white" : "text-green-500"}`}
            />
            <span className={isGradient ? "text-purple-50" : "text-gray-600"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded-2xl font-bold transition-colors 
        ${
          isGradient
            ? "bg-white text-[#7c3aed] hover:bg-gray-50"
            : "bg-[#7c3aed] text-white hover:bg-[#6d28d9]"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;

import React from "react";

import userIcon from "../assets/user.png";
import boxIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const GetStarted = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: userIcon, 
    },
    {
      id: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: boxIcon,
    },
    {
      id: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: rocketIcon,
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 my-20">
      <div className="max-w-7xl mx-auto text-center">

        <div className="mb-16">
          <h2 className="text-[clamp(1.5rem,3vw,3rem)] font-extrabold text-[#111827] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white py-20 px-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center hover:shadow-md transition-shadow"
            >
              {/* Badge Number */}
              <div className="absolute top-5 right-5 myGradient text-white text-xs font-bold h-8 w-8 flex items-center justify-center rounded-full">
                {step.id}
              </div>

              {/* Icon Container */}
              <div className="w-24 h-24 bg-[#f5f3ff] rounded-full flex items-center justify-center mb-8">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-12 h-12 object-bottom"
                />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed ">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

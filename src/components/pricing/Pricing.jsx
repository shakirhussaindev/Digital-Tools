import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const pricingData = [
    {
      plan: "Starter",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
    },
    {
      plan: "Pro",
      price: "29",
      description: "Best for professionals",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
      isGradient: true,
    },
    {
      plan: "Enterprise",
      price: "99",
      description: "For teams and businesses",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section className="lg:py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Content */}
        <div className="mb-16">
          <h2 className="text-[clamp(1.7rem,3vw,3rem)] font-extrabold text-[#1a2b3c] mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 md:text-lg text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 items-center">
          {pricingData.map((item, index) => (
            <PricingCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

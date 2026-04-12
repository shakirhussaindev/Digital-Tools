import React from 'react';

const Stat = () => {
  return (
    <div className="myGradient py-15 mb-20">
      <div className="myContainer grid md:grid-cols-3 grid-cols-1 text-center space-y-10 md:space-y-0 relative">
        <div className="">
          <h3 className="stath3">50K+</h3>
          <p className="statP">Active Users</p>
        </div>
        <div className="line absolute top-5 left-100 hidden lg:block"></div>
        <div className="">
          <h3 className="stath3">200+</h3>
          <p className="statP">Premium Tools</p>
        </div>
        <div className="line absolute top-5 left-210 hidden lg:block"></div>
        <div className="">
          <h3 className="stath3">4.9</h3>
          <p className="statP">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
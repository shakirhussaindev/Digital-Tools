import React from 'react';
import Circle from '../../assets/circle.png';
import { CiPlay1 } from 'react-icons/ci';
import Banner from '../../assets/banner.png';

const hero = () => {
  return (
    <div className="w-9/12 mx-auto lg:flex justify-between items-center my-10">
      <div className="">
        <div className="inline-flex items-center gap-2 bg-[#E1E7FF] py-2 px-4 rounded-4xl ">
          <img src={Circle} alt="" />
          <h2 className="bg-[linear-gradient(to_right,#6366f1,#a855f7,#7e22ce)] bg-clip-text text-transparent">
            New: AI-Powered Tools Available
          </h2>
        </div>
        <h1 className="text-[clamp(2rem,4vw,5rem)] text-[#101727] font-extrabold py-4">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p className="text-lg text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex items-center gap-5 mt-8">
          <button className="bg-[linear-gradient(to_right,#6366f1,#7e22ce)] p-2.5 md:p-3 lg:p-4 rounded-full text-white font-bold">
            Explore Products
          </button>
          <button className="flex items-center justify-center p-2.5 md:p-3 lg:p-4 rounded-full border font-medium gap-2">
            <CiPlay1 className="" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className='mt-10'>
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};

export default hero;
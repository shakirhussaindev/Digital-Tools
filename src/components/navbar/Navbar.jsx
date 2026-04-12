import React, { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { RiMenuFill } from 'react-icons/ri';
import NavLi from './NavLi';

const Navbar = () => {
  const [menu,setMenu] = useState(false)
  return (
    <nav>
      <div className="md:w-10/12 w-11/12 lg:w-9/12 mx-auto flex justify-between items-center my-5">
        <span className="flex items-center gap-3">
          <span>
            <RiMenuFill
              onClick={() => setMenu(!menu)}
              className="text-xl font-bold lg:hidden mr-5"
            />
            {menu ? (
              <ul className=" absolute bg-purple-400 text-white mt-2 py-2 pl-2 pr-4 rounded-md flex flex-col gap-2 font-semibold lg:hidden cursor-pointer">
                <NavLi />
                <button className="btn btn-sm text-base btn-soft">
                  Login
                </button>
              </ul>
            ) : (
              ""
            )}
          </span>
          <h2 className="lg:text-3xl text-2xl  font-bold bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-500 bg-clip-text text-transparent ">
            DigiTools
          </h2>
        </span>
        <ul className="lg:flex gap-10 font-semibold text-[#101727] cursor-pointer hidden">
          <NavLi />
        </ul>
        <div className="flex justify-between items-center gap-5">
          <IoCartOutline className="text-2xl cursor-pointer" />
          <button className="cursor-pointer text-xl font-semibold hidden md:block">
            Login
          </button>
          <button className="btn cursor-pointer lg:py-3 lg:px-4 rounded-4xl bg-gradient-to-r from-indigo-500  to-purple-500 text-white font-semibold">
            Get Started
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </nav>
  );
};

export default Navbar;
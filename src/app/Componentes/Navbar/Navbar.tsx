"use client"
import React, { useState } from "react";
import { FaWhatsapp, FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className=" ">
    
    <div className="absolute top-0 left-0 w-full px-4 md:px-10 py-4 flex justify-between items-center bg-white z-10">
        {/* Left logo + nav */}
        <div className="flex items-center gap-[10rem]">
          <img
            src="https://goldtravels.net/public/front/assets/images/logo.png"
            alt="Gold Travels Logo"
            className="w-28"
          />

          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-12 text-sm font-medium">
            <a href="#" className="text-green-400 flex items-center gap-1">
            Home  {/* <IoIosArrowDown className="text-xs" /> */}
            </a>
            <a href="#">About</a>
            <a href="#" className="flex items-center gap-1">
            Tours  {/*  <IoIosArrowDown className="text-xs" /> */}
            </a>
            <a href="#" className="flex items-center gap-1">
            Destination {/*  <IoIosArrowDown className="text-xs" /> */}
            </a>
            <a href="#" className="flex items-center gap-1">
            Pages  {/* <IoIosArrowDown className="text-xs" /> */}
            </a>
            <a href="#">Contact</a>
          </nav>
        </div>

        {/* Right buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <FaUserCircle className="text-xl" />
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-600 text-xl" />
            
            <div className="text-xs leading-4">
              <p className="text-gray-500">Whatsapp</p>
              <p className="text-green-400 font-semibold">+990-737 621 432</p>
            </div>
          </div>
          <button className="bg-green-400 text-white py-2 px-5 rounded-full font-semibold">
            Book A Trip
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white px-6 py-4 z-10 flex flex-col gap-4 lg:hidden text-sm font-medium">
          <a href="#" className="text-green-400 flex items-center gap-1">
            Home <IoIosArrowDown className="text-xs" />
          </a>
          <a href="#">About</a>
          <a href="#" className="flex items-center gap-1">
            Tours <IoIosArrowDown className="text-xs" />
          </a>
          <a href="#" className="flex items-center gap-1">
            Destination <IoIosArrowDown className="text-xs" />
          </a>
          <a href="#" className="flex items-center gap-1">
            Pages <IoIosArrowDown className="text-xs" />
          </a>
          <a href="#">Contact</a>

          <div className="flex items-center gap-3 mt-4">
            <FaUserCircle className="text-xl" />
            <FaWhatsapp className="text-green-600 text-xl" />
            <div className="text-xs leading-4">
              <p className="text-gray-500">Whatsapp</p>
              <p className="text-green-400 font-semibold">+990-737 621 432</p>
            </div>
          </div>

          <button className="bg-green-400 text-white py-2 px-5 rounded-full font-semibold mt-2">
            Book A Trip
          </button>
        </div>
      )}
    </div>
    </>
  );
}

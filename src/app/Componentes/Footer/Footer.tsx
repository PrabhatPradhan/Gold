"use client";
import "./Footer.css"
import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
 
export default function Footer() {
  return (
   <div className="footer">
     <footer className="bg-[url('/Images/footer-back.png')] text-white   px-6 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-4  pb-10">
        {/* Subscribe Card */}
        <div className="bg-green-100 rounded-b-2xl  w-[23rem]  p-12 lg:col-span-1 ">
          <div className="flex justify-center mb-4">
            <img src="https://goldtravels.net/public/front/assets/images/logo.png" alt="Logo" width={150} height={60} className="object-contain" />
          </div>
          <h2 className="text-center text-lg md:text-xl lg:text-2xl font-bold text-black mb-2">
            Sign up for exclusive deals and see price drops!
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Get our latest deals and updates
          </p>
          <div className="flex items-center rounded-full border border-gray-300 bg-white overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 outline-none text-black"
            />
          </div>
          <button className="mt-4 w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full">
            Subscribe
          </button>
        </div>

        {/* Quick Links */}
        <div className="ml-42 mt-19">
          <h3 className="text-lg font-bold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-gray-300">
            <li>About us</li>
            <li>Destinations</li>
            <li>Tour Package</li>
            <li>Tour Guide</li>
            <li>Article</li>
          </ul>
        </div>

        {/* Destinations */}
        <div className=" ml-26 mt-19">
          <h3 className="text-lg font-bold mb-3">Destination</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Egypt Tour</li>
            <li>New York Tour</li>
            <li>Indonesia Tour</li>
            <li>Nepal Tour</li>
            <li>Saudi Arab Tour</li>
          </ul>
        </div>

        {/* Address & Payments */}
        <div className="mt-19 ml-12">
          <h3 className="text-lg font-bold mb-3">📍 Address</h3>
          <p className="text-gray-300 mb-2">House 177, Avenue 01, Mirpur</p>
          <p className="text-gray-300 mb-4">DOHS, Dhaka Bangladesh</p>

          <h4 className="text-white font-semibold mb-2">Payment Partner</h4>
          <div className="flex flex-wrap gap-2">
            <img src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.jpg" alt="Visa"  className=" rounded-2xl h-6 w-12 " />
            <img src="https://media.designrush.com/inspirations/656399/conversions/1-preview.jpg" alt="Stripe" className=" rounded-2xl h-6 w-12 " />
            <img src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png" alt="PayPal"  className=" rounded-2xl h-6 w-12" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwtjG4CgqX-RhnJIFf8Z67XEDhgQlrs0CiA&s.png"   height={20}className=" rounded-2xl h-6 w-12 " />
         
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>
          &copy;Copyright 2025 Tourpeak | Design by <span className="text-white font-semibold">Qzency</span>
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <FaFacebookF className="hover:text-white" />
          <FaXTwitter className="hover:text-white" />
          <FaLinkedinIn className="hover:text-white" />
          <FaPinterestP className="hover:text-white" />
        </div>
      </div>
    </footer>
   </div>
  );
}
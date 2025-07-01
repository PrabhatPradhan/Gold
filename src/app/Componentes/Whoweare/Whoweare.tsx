"use client";
import { FaShieldAlt, FaUserTie, FaClock } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <section
      className="py-6 bg-cover"
      style={{
        backgroundImage: "url('/Images/who-we-area-three-bg.png')",
      }}
    >
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Content */}
          <div className="lg:w-7/12">
            <p className="text-green-600 font-semibold mb-2 text-lg">
              Who We Are
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-snug">
              Our Main Goal To Provide <br />
              Best Travel Solutions
            </h2>
            <p className="text-slate-600 mb-8">
              Odyzaa’s mission is to bring travel enthusiasts together through
              our Organized Adventure Platform, connecting them with expert
              operators who design unforgettable and sustainable multi-day
              experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl mb-2">
                  <FaShieldAlt />
                </div>
                <h4 className="font-semibold text-lg text-slate-900">
                  Safety First
                </h4>
                <p className="text-sm text-slate-500">
                  Safety First Ensuring Toward Secure Adventure
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xl mb-2">
                  <FaUserTie />
                </div>
                <h4 className="font-semibold text-lg text-slate-900">
                  Trusted Guide
                </h4>
                <p className="text-sm text-slate-500">
                  Trusted Guides Leading the Way to Safe Adventures
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xl mb-2">
                  <FaClock />
                </div>
                <h4 className="font-semibold text-lg text-slate-900">
                  Time Saving
                </h4>
                <p className="text-sm text-slate-500">
                  Time Saving Strategies for Effortless Adventures
                </p>
              </div>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md text-sm shadow">
              Discover More
            </button>
          </div>

          {/* Right Images */}
          <div className="relative lg:w-5/12">
            {/* Experience Box */}
            <div className="absolute top-16 left-4 bg-green-600 text-white rounded-full px-4 py-2 shadow-lg flex items-center gap-3 z-10 border-2 border-white">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center font-bold text-lg">
                15
              </div>
              <div className="leading-tight text-sm font-medium">
                Years Of <br />
                Experience
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative">
  {/* Main Large Image on Top Right */}
  <div className="col-span-2">
    <img
      src="https://plus.unsplash.com/premium_photo-1730045161796-212340c2ecb4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className="w-10/12 h-[18rem] ml-auto rounded-lg"
    />
  </div>

  {/* Two Smaller Images in Bottom Row */}
  <div className="w-full">
    <img
      src="https://images.unsplash.com/photo-1570472459481-fc2142c1d6ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className="w-full h-[15rem] border-4 border-white rounded-lg object-cover"
    />
  </div>
  <div className="w-full">
    <img
      src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className="w-full h-[10rem] rounded-lg object-cover"
    />
  </div>
</div>

          </div>
        </div>
      </div>


   

    </section>
  );
}

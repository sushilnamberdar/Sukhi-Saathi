import React from "react";
import heroImg from "../assets/services/homecare.png";
import NewHeroCarousel from "./NewHeroCarousel";
import { Link } from "react-router-dom";
// import curversvg from '../assets/svg/curve.svg'; // Not needed for CSS method

export default function NewBlock() {
  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
    
      <NewHeroCarousel/>

      {/* WRAPPER FOR CURVE + BOXES 
        We need 'relative' here so we can position the curve absolutely inside it.
      */}
      <div className="relative w-full">
        
        {/* THE CSS CURVE (Valley/Down)
            - z-20: Ensures it sits on top of the boxes.
            - h-[60px]: Controls the depth of the curve.
            - radial-gradient: Draws a white circle from the top-center downwards.
        */}
        <div 
          className="absolute top-0 left-0 w-full  z-20 h-[10px] md:h-[10px] lg:h-[30px] pointer-events-none"
          style={{
            background: "radial-gradient(50% 100% at 50% 0, white 99%, transparent 100%)"
          }}
        ></div>

        {/* 3 BOXES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">

          {/* BOX 1 */}
          <div className="bg-[#7DC6E4] pt-24 pb-14 px-8"> {/* Added pt-24 */}
            <h2 className="text-2xl font-bold text-black mb-3">
              COMPETITIVE PAY RATES
            </h2>
            <p className="text-black/80 mb-6">
              We don’t just tell you you're valued — we prove it.
            </p>
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full">
              LEARN MORE
            </button>
          </div>

          {/* BOX 2 */}
          <div className="bg-[#0E3253] pt-24 pb-14 px-8 text-white"> {/* Added pt-24 */}
            <h2 className="text-2xl font-bold mb-3">Jobs</h2>
            <p className="text-white/80 mb-6">
              Join our  Supports team and Carers.
            </p>
            <Link to="/jobs">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full">
              APPLY NOW
            </button>
            </Link>
          </div>

          {/* BOX 3 */}
          <div className="bg-[#7DC6E4] pt-24 pb-14 px-8"> {/* Added pt-24 */}
            <h2 className="text-2xl font-bold text-black mb-3">
              NEED STAFF?
            </h2>
            <p className="text-black/80 mb-6">WE’RE HERE FOR YOU! <br /> 24/7</p>
            <Link to="/contact">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-full">
              LEARN MORE
            </button>
            </Link>
          </div>

        </div>
      </div>
      
    </div>
  );
}
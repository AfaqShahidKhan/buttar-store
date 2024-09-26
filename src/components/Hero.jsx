import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/hero_image.png";
import handIcon from "../../public/icons/hand_icon.png";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-white grid grid-cols-1 md:grid-cols-12 w-full"> 
  <div className="col-span-1 md:col-span-6 flex flex-col items-center justify-center text-center p-4"> 
    <div>
      <span className="text-lg md:text-2xl font-semibold md:pr-20"> 
        New arrivals only
      </span>
    </div>
    <div className="flex flex-col items-center md:items-start">
      <span className="text-2xl md:text-5xl font-semibold flex items-center justify-center">
        new{" "}
        <Image
          src={handIcon}
          height={60} 
          width={40}  
          alt="hi buttar store"
        />
      </span>
      <span className="text-2xl md:text-5xl font-semibold">collections</span>
      <span className="text-2xl md:text-5xl font-semibold">for everyone</span> 
    </div>
    <button className="bg-[#FF4F3B] hover:bg-[#FF3B2A] text-white font-bold py-2 px-4 md:mr-20 rounded-full flex items-center mt-6"> 
      Latest Collection
      <span className="ml-2 text-xl md:text-3xl">→</span>
    </button>
  </div>
  <div className="col-span-1 md:col-span-6">
    <Image
      src={heroImage}
      objectFit="contain"
      alt="hero image buttar store"
    />
  </div>
</div>

  );
}

export default Hero;

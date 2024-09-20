import Image from "next/image";
import React from "react";
import heroImage from "../../public/images/hero_image.png";
import handIcon from "../../public/icons/hand_icon.png";

function Hero() {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-white grid grid-cols-12 w-full">
      <div className="col-span-6 flex flex-col items-center justify-center text-center">
        <div>
          {" "}
          <span className="text-2xl font-semibold pr-52">
            New arrivals only
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-7xl font-semibold flex items-center justify-center">
            new{" "}
            <Image
              src={handIcon}
              height={90}
              width={60}
              alt="hi buttar store"
            />
          </span>
          <span className="text-7xl font-semibold">collections </span>
          <span className="text-7xl font-semibold">for everyone</span>
        </div>
        <button className="bg-[#FF4F3B] hover:bg-[#FF3B2A] text-white font-bold py-2 px-4 rounded-full flex items-center mt-10">
          Latest Collection
          <span className="ml-2 text-3xl">→</span>
        </button>
      </div>
      <div className="col-span-6">
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

import React from "react";
import exclusiveImage from "../../public/images/exclusive_image.png";
import Image from "next/image";

function ExclusiveOffer() {
  return (
    <div className="my-20 px-4 md:px-32">
      <div className="bg-gradient-to-b from-pink-100 to-white grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-6 flex flex-col items-center justify-center text-center p-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl md:text-5xl font-semibold">
              Exclusive
            </span>
            <span className="text-2xl md:text-5xl font-semibold">
              offers for you
            </span>
            <span className="text-lg md:text-2xl font-semibold pr-0 md:pr-52">
              Only on best seller products
            </span>
            <button className="bg-[#FF4F3B] hover:bg-[#FF3B2A] text-white font-bold py-2 px-4 w-[120px] md:w-[160px] rounded-full flex items-center justify-center mt-6">
              {" "}
              Check Now
            </button>
          </div>
        </div>
        <div className="col-span-1 md:col-span-6">
          <Image
            src={exclusiveImage}
            objectFit="contain"
            alt="hero image buttar store"
          />
        </div>
      </div>
    </div>
  );
}

export default ExclusiveOffer;

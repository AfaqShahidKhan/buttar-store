import React from "react";

function NewsLetter() {
  return (
    <div className="mt-20 px-4 md:px-32">
      <div className="bg-gradient-to-b from-pink-100 to-white p-6 md:p-20 rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-2xl md:text-5xl font-semibold mb-4">
            Get Exclusive Offers In Your Email
          </span>
          <span className="text-lg md:text-2xl font-semibold mb-6">
            Subscribe to our newsletter and stay updated
          </span>
          <div className="flex flex-col md:flex-row items-center justify-center w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-full py-2 px-4 md:mr-1 text-lg md:text-2xl font-semibold mb-4 md:mb-0 w-full md:w-auto"
            />
            <button className="bg-[#FF4F3B] hover:bg-[#FF3B2A] text-white text-lg md:text-2xl font-semibold py-2 px-6 rounded-full flex items-center justify-center mt-4 md:mt-0 md:ml-1">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;

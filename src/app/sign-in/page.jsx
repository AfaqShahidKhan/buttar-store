import React from "react";

export const metadata = {
  title: "Sign In",
};

function page() {
  return (
    <div className="bg-pink-200 min-h-screen flex items-center justify-center ">
      <div className=" h-[400px] w-[420px] bg-white  ">
        <h2 className="text-center text-2xl font-bold  mt-4">Sign In</h2>
        <form>
          <div className="w-3/4 mb-4 mt-6 mx-auto">
            
            <input
              className=" w-full p-3 border border-gray-300"
              type="email"
              placeholder=" acount@gmail.com"
            />
          </div>
          <div className="w-3/4 mb-4 mt-6 mx-auto">
            
            <input
              className=" w-full p-3 border border-gray-300 "
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center">
            
            <button className="bg-red-500 py-2 px-28 text-white  hover:bg-red-600 transition">
              Continue
            </button>
          </div>

          <div className="flex flex-col ">
            <div className="ml-14 mt-4">
           
            <p className="text-black ">
            Create an Account? 
            <span className="font-bold text-red-500"> Click Here</span>
          </p>

            </div>

            <div className="flex flex-row gap-2 px-1  mt-3 mx-auto">
            
            <input type="checkbox" />
            <p>By Continuing, I agree to terms and Privicy Policy  </p>

            </div>
          
           </div>
          
        </form>
      </div>
    </div>
  );
}

export default page;

import React from "react";
import Link from "next/link";

function SignUp() {
  return (
    <div className="bg-pink-200 min-h-screen flex items-center justify-center ">
      <div className=" h-[430px] w-[420px] bg-white  ">
        <h2 className="text-center text-2xl font-bold  mt-4">Sign Up</h2>
        <form>
          <div className="w-3/4 mb-4 mt-6 mx-auto">
            <input
              className=" w-full p-3 border border-gray-300"
              type="text"
              placeholder=" Username"
            />
          </div>
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
            <button
              className="bg-red-500 py-2 px-28 text-white  hover:bg-red-600 transition"
              type="submit"
            >
              Continue
            </button>
          </div>
          <p className="text-red-500 text-center"></p>
          <div className="flex flex-col ">
            <div className="ml-14 mt-4">
              <p className="text-black ">
                Already have an Account?
                <Link href="/sign-in">
                  {" "}
                  <span className="font-bold text-red-500 cursor-pointer">
                    {" "}
                    Login{" "}
                  </span>
                </Link>
              </p>
            </div>

            <div className="flex flex-row gap-2 px-1  mt-3 mx-auto">
              <input type="checkbox" />
              <p>By Continuing, I agree to terms and Privicy Policy </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

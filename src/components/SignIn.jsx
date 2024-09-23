"use client";
import { login, logout } from "@/lib/user/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const validUsers = [
  { email: "test@example.com", password: "1234" },
  { email: "mushahid@example.com", password: "1122" },
];

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    const user = validUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      dispatch(login(user));
      setError("");
      router.push("/");
    } else {
      setError("Email or password is incorrect");
    }
  }

  return (
    <div className="bg-pink-200 min-h-screen flex items-center justify-center ">
      <div className=" h-[400px] w-[420px] bg-white  ">
        <h2 className="text-center text-2xl font-bold  mt-4">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="w-3/4 mb-4 mt-6 mx-auto">
            <input
              className=" w-full p-3 border border-gray-300"
              type="email"
              placeholder=" acount@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-3/4 mb-4 mt-6 mx-auto">
            <input
              className=" w-full p-3 border border-gray-300 "
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="flex flex-col ">
            <div className="ml-14 mt-4">
              <p className="text-black ">
                Create an Account?
                <span className="font-bold text-red-500"> Click Here</span>
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

export default SignIn;

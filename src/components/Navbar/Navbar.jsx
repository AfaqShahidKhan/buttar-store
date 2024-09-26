"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import navLogo from "/public/logos/logo_big.png";
import cartImage from "/public/icons/cart_icon.png";
import ActiveLink from "../ActiveLink";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/lib/user/userSlice";
function Navbar() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(logout());
  }
  return (
    <div className="grid grid-cols-12 items-center mx-auto pt-2 sticky top-0 z-10 bg-primary-30 w-full px-1 md:px-20">
      <div className="col-span-3 flex items-center">
        <Link href="/" className="flex items-center">
          <Image src={navLogo} height={50} width={50} alt="Buttar Store logo" />
          <span className="text-[10px] md:text-4xl font-bold ml-3">Buttar Store</span>
        </Link>
      </div>

      <div className="col-span-6 flex justify-center space-x-2 md:space-x-4 text-xs md:text-xl font-semibold">
        <ActiveLink href="/">Shop</ActiveLink>
        <ActiveLink href="/men">Men</ActiveLink>
        <ActiveLink href="/women">Women</ActiveLink>
        <ActiveLink href="/kids">Kids</ActiveLink>
      </div>

      <div className="col-span-3 flex justify-end space-x-2 md:space-x-4">
        {!isAuthenticated ? (
          <button class="bg-transparent text-[10px] md:text-xl hover:bg-primary-950 text-primary-950 font-semibold hover:text-white lg:w-[130px] px-4 border border-primary-950 hover:border-transparent rounded-[50px]">
            <Link href="/sign-in">Sign in</Link>
          </button>
        ) : (
          <button
            class="bg-transparent hover:bg-primary-950 text-[10px] md:text-xl text-primary-950 font-semibold hover:text-white lg:w-[130px] px-4 border border-primary-950 hover:border-transparent rounded-[50px]"
            onClick={handleSignOut}
          >
            <Link href="/">Sign Out</Link>
          </button>
        )}
        {isAuthenticated && (
          <button>
            <Link href="/cart">
              <Image
                src={cartImage}
                height={40}
                width={40}
                alt="Buttar Store cart"
              />
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

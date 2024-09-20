import React from "react";
import Image from "next/image";
import Link from "next/link";
import navLogo from "/public/logos/logo_big.png";
import cartImage from "/public/icons/cart_icon.png";

function Navbar() {
  return (
    <div className="grid grid-cols-12 items-center mx-auto pt-2 sticky top-0 z-10 bg-primary-30 w-full px-20">
      <div className="col-span-3 flex items-center">
        <Link href="/" className="flex items-center">
          <Image src={navLogo} height={50} width={50} alt="Buttar Store logo" />
          <span className="text-4xl font-bold ml-3">Buttar Store</span>
        </Link>
      </div>

      <div className="col-span-6 flex justify-center space-x-4 text-xl font-semibold">
        <Link href="/">Shop</Link>
        <Link href="/men">Men</Link>
        <Link href="/women">Women</Link>
        <Link href="/kids">Kids</Link>
      </div>

      <div className="col-span-3 flex justify-end space-x-4">
        <button class="bg-transparent hover:bg-primary-950 text-primary-950 font-semibold hover:text-white lg:w-[130px] px-4 border border-primary-950 hover:border-transparent rounded-[50px]">
          <Link href="/sign-in">Sign in</Link>
        </button>
        <button>
          <Link href="/cart">
            <Image
              src={cartImage}
              height={50}
              width={50}
              alt="Buttar Store cart"
            />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

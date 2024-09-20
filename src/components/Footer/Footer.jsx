import Image from "next/image";
import React from "react";
import navLogo from "/public/logos/logo_big.png";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className=" flex flex-col items-center justify-center mx-auto pt-2 sticky top-0 z-10 bg-primary-30 w-full px-20 my-10">
        <div className="flex items-center my-4">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={navLogo}
              height={50}
              width={50}
              alt="Buttar Store logo"
            />
            <span className="text-4xl font-bold ml-3">Buttar Store</span>
          </Link>
        </div>

        <div className=" flex items-center justify-center space-x-12 text-xl font-semibold  my-4">
          <Link href="/">Company</Link>
          <Link href="/product">Products</Link>
          <Link href="/">Offices</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className=" flex items-center justify-center space-x-12 text-xl font-semibold my-4">
          <Link href="/">
            <Image
              src="/icons/instagram_icon.png"
              height={50}
              width={50}
              alt="Buttar Store instagram"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/pintester_icon.png"
              height={50}
              width={50}
              alt="Buttar Store pintrester"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/whatsapp_icon.png"
              height={50}
              width={50}
              alt="Buttar Store whatsapp"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

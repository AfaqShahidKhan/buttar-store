import Image from "next/image";
import React from "react";
import navLogo from "/public/logos/logo_big.png";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center mx-auto pt-2 bg-primary-30 w-full px-4 md:px-20 sm:mb-24 md:my-10">
        <div className="flex items-center my-1 md:my-4">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src={navLogo}
              height={50}
              width={50}
              alt="Buttar Store logo"
            />
            <span className="text-xl md:text-4xl font-bold ml-3">
              Buttar Store
            </span>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 md:space-x-12 text-xs md:text-xl font-semibold my-1 md:my-4">
          <Link href="/">Company</Link>
          <Link href="/product">Products</Link>
          <Link href="/">Offices</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact-us">Contact</Link>
        </div>
        <div className="flex items-center justify-center space-x-4 text-lg md:text-xl font-semibold my-1 md:my-4">
          {" "}
          <Link href="/">
            <Image
              src="/icons/instagram_icon.png"
              height={40}
              width={40}
              alt="Buttar Store Instagram"
              className="transition-opacity duration-300 hover:opacity-75"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/pintester_icon.png"
              height={40}
              width={40}
              alt="Buttar Store Pinterest"
              className="transition-opacity duration-300 hover:opacity-75"
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/whatsapp_icon.png"
              height={40}
              width={40}
              alt="Buttar Store WhatsApp"
              className="transition-opacity duration-300 hover:opacity-75"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

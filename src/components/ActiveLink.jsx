"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`relative inline-block ${
        pathname === href ? "border-b-4 border-red-500" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;

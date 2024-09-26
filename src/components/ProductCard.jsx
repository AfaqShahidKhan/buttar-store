import Image from "next/image";
import React from "react";

function ProductCard({ src, alt, name, price, discount }) {
  return (
    <div className="rounded overflow-hidden shadow-lg px-4 py-4 max-w-[18rem]">
      <Image className="w-full" src={src} alt={alt} />
      <div className="px-6 py-4">
        <p className="text-gray-700 text-sm overflow-hidden truncate md:text-xl">{name}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block l px-3 py-1 text-lg font-semibold text-primary-950 mr-2 mb-2">
          {price}
        </span>
        <span className="inline-block px-3 py-1 text-lg line-through font-semibold text-primary-700 mr-2 mb-2">
          {discount}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;

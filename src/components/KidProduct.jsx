import all_product from "@/utils/all_product";
import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import Image from "next/image";
import banner_kids from '../../public/images/banner_kids.png'
const KidProduct = () => {
  return (
    <div>
      <div className="md:px-24 mt-8">
        <Image
          src={banner_kids}
          objectFit="contain"
          alt="buttarstore kiids"
        />
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {all_product
          .filter((product) => product.category === "kid")
          .map((product, index) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <ProductCard
                key={product.id}
                src={product.image}
                alt={product.name}
                name={product.name}
                price={`$${product.new_price.toFixed(2)}`}
                discount={`$${product.old_price.toFixed(2)}`}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default KidProduct;

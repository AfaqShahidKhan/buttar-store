import all_product from "@/utils/all_product";
import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

const MenProduct = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-4">
        {all_product
          .filter((product) => product.category === "men")
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

export default MenProduct;

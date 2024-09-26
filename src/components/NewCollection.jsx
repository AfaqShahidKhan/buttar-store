import new_collections from "@/utils/new_collections";
import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

function NewCollection() {
  return (
    <div className="bg-primary-30 w-full px-20 mt-20">
      <h1 className="text-3xl uppercase text-center font-bold">
        New Collection
      </h1>
      <div className="w-32 mx-auto h-1 bg-primary-950 mt-2" />
      <div className="flex flex-wrap justify-center mt-4">
        {new_collections.map((product, index) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <ProductCard
              key={product.id}
              src={product.image}
              alt={product.name}
              description={product.name}
              price={`$${product.new_price.toFixed(2)}`}
              discount={`$${product.old_price.toFixed(2)}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewCollection;

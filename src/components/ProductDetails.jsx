import Image from "next/image";
import React from "react";
import AddToCart from "./AddToCart";
function ProductDetails({ product }) {
  const {
    id,
    name,
    category,
    image,
    new_price,
    old_price,
    description,
    description_long,
  } = product;


  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-1 md:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="col-span-1 md:col-span-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Image
                    key={index}
                    src={image}
                    width={150}
                    height={195}
                    alt={name}
                    className="mb-4"
                  />
                ))}
              </div>
              <div className="col-span-1 md:col-span-10">
                <Image src={image} width={500} height={600} alt={name} />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-6">
            <h1 className="text-3xl font-semibold text-primary-950 my-5">
              {name}
            </h1>
            <h3 className="space-x-8 text-2xl">
              <span className="text-primary-600 line-through my-10">
                ${old_price}
              </span>
              <span className="text-[#FF4F3B]">${new_price}</span>
            </h3>
            <h4 className="text-xl text-primary-700 my-10">{description}</h4>
            <AddToCart product={product} />
          </div>
        </div>
        <div className="">
          <div className="flex">
            <button className=" hover:bg-primary-300 text-primary-950 border font-bold py-2 px-4 w-[160px] flex items-center justify-center my-10">
              Description
            </button>
            <button className=" hover:bg-primary-300 text-primary-950 border font-bold py-2 px-4 w-[160px] flex items-center justify-center my-10">
              Reviews
            </button>
          </div>
          <p className="text-xl text-primary-800">{description_long}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

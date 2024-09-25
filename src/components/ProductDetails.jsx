import Image from "next/image";
import React from "react";
const sizes = ["S", "M", "L", "XL", "XXL"];
function ProductDetails({ product }) {
  const { id, name, category, image, new_price, old_price, description } =
    product;

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
            <div className="">
              <h3 className="text-2xl text-primary-700 font-semibold">
                Select Size
              </h3>
              <div className="flex space-x-2 mt-4">
                {sizes.map((size) => (
                  <div
                    key={size}
                    className="border border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-200 transition duration-200"
                  >
                    {size}
                  </div>
                ))}
              </div>
              <button className="bg-[#FF4F3B] hover:bg-[#FF3B2A] text-white font-bold py-2 px-4 w-[160px] flex items-center justify-center my-10">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;

"use client";
import { addToCart } from "@/lib/cart/cartSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";

const sizes = ["S", "M", "L", "XL", "XXL"];

function AddToCart({ product }) {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart(e) {
    e.preventDefault();
    if (selectedSize) {
      const itemToAdd = {
        ...product,
        size: selectedSize,
        quantity,
      };
      dispatch(addToCart(itemToAdd));
    }
  }

  return (
    <div>
      <h3 className="text-2xl text-primary-700 font-semibold">Select Size</h3>
      <div className="flex space-x-2 mt-4">
        {sizes.map((size) => (
          <div
            key={size}
            className={`border border-gray-300 rounded-md p-4 text-center cursor-pointer transition duration-200 ${
              selectedSize === size ? "bg-[#FF4F3B]" : "hover:bg-gray-200"
            }`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </div>
        ))}
      </div>

      <div className="flex items-center mt-6">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="bg-[#FF4F3B] text-white  font-bold py-2 px-4 rounded-l transition duration-200 hover:bg-[#FF3B2A] mr-2"
        >
          <FaMinus />
        </button>
        <span className="border-t border-b border-gray-300 text-center py-1 px-4 w-16">
          {quantity}
        </span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="bg-[#FF4F3B] text-white  font-bold py-2 px-4 rounded-r transition duration-200 hover:bg-[#FF3B2A] ml-2"
        >
          <FaPlus />
        </button>
      </div>
      <div className="flex gap-12">
        <button
          className="bg-[#FF4F3B] hover:bg-[#FF3B2A] disabled:cursor-no-drop text-white font-bold py-2 px-4 w-[160px] flex items-center justify-center my-10"
          onClick={handleAddToCart}
          disabled={!selectedSize}
        >
          Add to Cart
        </button>
        <Link
          href="/cart"
          className="bg-[#FF4F3B] hover:bg-[#FF3B2A] text-white font-bold py-2 px-4 w-[160px] flex items-center justify-center my-10"
        >
          Check Cart
        </Link>
      </div>
    </div>
  );
}

export default AddToCart;

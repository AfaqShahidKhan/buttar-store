"use client";
import { addToCart } from "@/lib/cart/cartSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const sizes = ["S", "M", "L", "XL", "XXL"];

function AddToCart({ product }) {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(0);

  function handleAddToCart(e) {
    e.preventDefault();
    if (selectedSize) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      const itemToAdd = {
        ...product,
        size: selectedSize,
        quantity: newQuantity,
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

"use client";
import { clearCart, removeFromCart } from "@/lib/cart/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);
  console.log("items are---", items);

  return (
    <div className="max-w-7xl mx-auto mt-10">
      {items.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div>
          <table className="hidden sm:table min-w-full bg-white text-primary-900">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-4 border-b">Products</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Size</th>
                <th className="py-2 px-4 border-b">Total</th>
                <th className="py-2 px-4 border-b">Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">
                    <Image
                      src={item.image}
                      width={80}
                      height={125}
                      alt={item.name}
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">
                    ${item.new_price.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b">{item.quantity}</td>
                  <td className="py-2 px-4 border-b">{item.size}</td>
                  <td className="py-2 px-4 border-b">
                    ${(item.new_price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-2 px-4 mt-5 border-b pl-14">
                    <button onClick={() => dispatch(removeFromCart(item.id))}>
                      <Image
                        src="/icons/cart_cross_icon.png"
                        alt="remove product"
                        width={20}
                        height={20}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="sm:hidden flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="border-b pb-4 flex flex-col sm:flex-row"
              >
                <div className="flex justify-between">
                  <Image
                    src={item.image}
                    width={80}
                    height={125}
                    alt={item.name}
                  />
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="pr-10 hover:"
                  >
                    <Image
                      src="/icons/cart_cross_icon.png"
                      alt="remove product"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-lg">{item.name}</h2>
                  <p>${item.new_price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                  <p>Total: ${(item.new_price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-24">
        <div className="px-4 lg:px-8">
          <h1 className="text-2xl lg:text-3xl text-primary-900 font-semibold">
            Cart Total
          </h1>
          <div className="flex justify-between mt-10 border-b py-2">
            <h2 className="text-lg lg:text-xl text-primary-700">SubTotal</h2>
            <h2 className="text-lg lg:text-xl text-primary-700">
              $ {totalAmount.toFixed(2)}
            </h2>
          </div>
          <div className="flex justify-between my-2 border-b py-2">
            <h2 className="text-lg lg:text-xl text-primary-700">
              Shipping Fee
            </h2>
            <h2 className="text-lg lg:text-xl text-primary-700">Free ❤</h2>
          </div>
          <div className="flex justify-between mt-4 border-b py-2">
            <h2 className="text-lg lg:text-xl text-primary-950 font-semibold">
              Total
            </h2>
            <h2 className="text-lg lg:text-xl text-primary-950 font-semibold">
              ${totalAmount.toFixed(2)}
            </h2>
          </div>
          <div className="mt-8 flex flex-start">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-primary-950 hover:bg-[#FF3B2A] text-white font-bold py-2 px-4 w-[160px] flex items-center justify-center"
            >
              Clear all
            </button>
          </div>
        </div>

        <div className="px-4 lg:px-24 mt-12 lg:mt-24">
          <p className="text-lg lg:text-xl text-primary-900 font-semibold">
            If you have a promo code enter it here 👇
          </p>
          <div className="flex items-center mt-4">
            <input
              placeholder="Promo Code"
              className="border border-gray-300 py-2 px-4 text-lg lg:text-xl font-semibold max-h-[40px] flex-grow"
            />
            <button className="bg-primary-950 hover:bg-[#FF3B2A] text-white font-bold py-2 px-4 w-[160px] flex items-center justify-center ml-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

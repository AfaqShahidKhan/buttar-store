import ProductDetails from "@/components/ProductDetails";
import all_product from "@/utils/all_product";
import React from "react";

export const metadata = {
  title: "Details",
  description: "Unleash Your Style: Fashion Finds at Your Fingertips! Buttar Store by Afaq Shahid Khan and Mushahid Buttar. follow buttarstore",
};

async function getProductById(id) {
  const productId = parseInt(id, 10);

  const product = all_product.find((product) => product.id === productId);

  return product || null;
}

async function page({ params }) {
  const { id } = params;
  const product = await getProductById(id);
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
}

export default page;

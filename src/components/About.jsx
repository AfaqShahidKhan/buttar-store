import React from "react";
import Image from "next/image";

import aboutImage from "../../public/images/about-us.jpg";
function About() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <Image
        src={aboutImage}
        alt="About Us"
        className="rounded-lg mb-6"
        layout="responsive"
        width={700}
        height={344}
      />
      <p className="text-lg mb-4">
        Welcome to Buttar Store! At Buttar Store, we believe that shopping
        should be a delightful experience filled with the latest trends and
        timeless classics. Our mission is to provide a curated selection of
        high-quality products that cater to everyone’s style and needs.
      </p>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Who We Are</h2>
      <p className="text-lg mb-4">
        Founded by a passionate team of fashion enthusiasts, Buttar Store
        emerged from a desire to bring together the best in fashion and
        lifestyle. We are dedicated to sourcing unique items that resonate with
        our customers and reflect the latest trends in the industry.
      </p>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Our Values</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg">
          Quality: We prioritize quality in every product we offer.
        </li>
        <li className="text-lg">
          Inclusivity: We believe that everyone deserves to express their
          individuality.
        </li>
        <li className="text-lg">
          Sustainability: We are committed to promoting sustainable practices.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-4 mb-2">What We Offer</h2>
      <p className="text-lg mb-4">
        At Buttar Store, you will find new arrivals, exclusive collections, and
        customer-centric service. Our team is dedicated to ensuring that your
        shopping experience is enjoyable, from easy returns to responsive
        support.
      </p>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Join Us</h2>
      <p className="text-lg mb-4">
        We invite you to explore our collection and find your next favorite
        piece. Thank you for choosing Buttar Store. We can’t wait to be part of
        your shopping journey!
      </p>
    </div>
  );
}

export default About;

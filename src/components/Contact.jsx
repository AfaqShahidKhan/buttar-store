"use client";
import Image from "next/image";
import React, { useState } from "react";
import contactImage from "../../public/images/contact-us.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <Image
        src={contactImage}
        alt="Contact Us"
        className="rounded-lg mb-6"
        layout="responsive"
        width={700}
        height={400}
      />

      {submitted ? (
        <div className="text-lg text-center mb-4">
          Thank you for your message! We will get back to you soon.
        </div>
      ) : (
        <>
          <p className="text-lg mb-4">
            We’d love to hear from you! Whether you have a question, feedback,
            or need assistance, feel free to reach out using the form below.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                rows="4"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="bg-[#FF4F3B] hover:bg-[#FF3B2A] text-white font-bold py-2 px-4 rounded-full"
            >
              Send Message
            </button>
          </form>
        </>
      )}

      <p className="mt-6 text-lg">
        You can also reach us directly at{" "}
        <a href="mailto:support@buttarstore.com" className="text-[#FF4F3B]">
          support@buttarstore.com
        </a>
        .
      </p>
    </div>
  );
}

export default Contact;

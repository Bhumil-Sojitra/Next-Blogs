import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Contact Page",
  description: "Next Blogs Contact Page",
};

export default function ContactPage() {
  return (
    <div className="mt-20 flex items-center justify-center bg-bgdark">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <Image
            width={500}
            height={500}
            src={"/contact.png"}
            alt="Contact Us"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="bg-bgsoft p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium ">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                className="bg-bgdark mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium ">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                className="bg-bgdark mt-1 block w-full px-3 py-2   rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium ">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="Phone No."
                id="phone"
                name="phone"
                className="bg-bgdark mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="bg-bgdark mt-1 block w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

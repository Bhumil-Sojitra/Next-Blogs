import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Page",
  description: "Next Blogs About Page",
};

const teamMembers = [
  {
    name: "Sojitra Bhumil",
    role: "Founder & CEO",
    image: "/about.png", // Place your images in the public/images directory
    bio: "Sojitra Bhumil is the visionary behind our platform with a passion for writing and technology.",
  },
  {
    name: "Sojitra Bhumil",
    role: "Content Manager",
    image: "/about.png",
    bio: "Sojitra Bhumil manages our content with an eye for detail and a love for storytelling.",
  },
  {
    name: "Sojitra Bhumil",
    role: "Lead Developer",
    image: "/about.png",
    bio: "Sojitra Bhumil leads our development team, ensuring our platform is robust and user-friendly.",
  },
];

export default function AboutPage() {
  return (
    <div className="h-full bg-bgdark py-7">
      <div className="container mx-auto px-6">
        {/* about us */}
        <h1 className="text-4xl font-bold  mb-8 text-center">About Us</h1>
        <p className="text-lg  mb-12 text-center max-w-2xl mx-auto">
          Welcome to our blogging platform, where we share insightful articles
          on a wide range of topics. Our mission is to provide a space for
          writers and readers to connect, share ideas, and inspire each other.
        </p>

        {/* Our team */}

        <h2 className="text-3xl font-semibold  mb-6">Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((data, id) => (
            <div
              key={id}
              className="bg-bgsoft p-6 rounded-lg shadow-lg text-center"
            >
              <Image
                src={data.image}
                alt={data.name}
                width={150}
                height={150}
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold ">{data.name}</h3>
              <p className="">{data.role}</p>
              <p className=" mt-4">{data.bio}</p>
            </div>
          ))}
        </div>

        {/* our mission */}

        <div className="mt-12">
          <h2 className="text-3xl font-semibold  mb-6">Our Mission</h2>
          <p className="text-lg  max-w-3xl mx-auto">
            Our mission is to create a platform that empowers writers to share
            their stories and connect with readers from around the world. We
            believe in the power of words to inspire, educate, and bring people
            together.
          </p>
        </div>
      </div>
    </div>
  );
}

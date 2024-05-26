import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center bg-bgdark ">
        <div className="container mx-auto mt-20 px-6 py-12 flex flex-col items-center  md:flex-row  ">
          <div className="md:w-1/2 text-left mb-8 md:mb-0 ">
            <h1 className="text-4xl font-bold text-center md:text-start  mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-lg text-center md:text-start text-gray-200 mb-6 ">
              This is a sample paragraph. It provides some introductory text
              about the website or the services offered.
            </p>
            <div className="flex space-x-4  justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700">
                Get Started
              </button>
              <button className="bg-white text-black px-4 py-3 rounded hover:text-white hover:bg-blue-700">
                Contact
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              width={500}
              height={0}
              src={"/hero.gif"}
              alt="Image"
              unoptimized
            />
          </div>
        </div>
      </div>
    </>
  );
}

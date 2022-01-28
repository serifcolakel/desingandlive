import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className=" w-full h-[100vh] relative bg-black z-0 text-center">
      <Navbar />
      <div className="w-full p-4 md:w-[550px] md:ml-[375px] h-[100vh] text-white flex flex-col gap-y-8 -mb-24 ">
        <h1 className="text-5xl font-bold md:text-left md:pt-28">About</h1>
        <p className="md:text-left">
          Home is an essential part of our existence. The house is an integral
          component of one is identity. Design & Live collects the works of the
          brightest minds, which are products of art movements, philosophy,
          history, and humanistic disciplines.
        </p>
        <p className="md:text-left">
          These masterpieces embody abstract concepts, unique design
          methodologies, and beautiful spaces. As the world progressively gets
          more hyperconnected, the creatives are urged to be more innovative
          when constructing our homes and all the places that are integral
          fragments of our routines, such as coffee shops, restaurants, hotels,
          museums, and many more.
        </p>
        <p className="md:text-left">
          We hope to be a part of this narrative by making design more
          accessible.
        </p>
      </div>
      <img
        src="https://i.hizliresim.com/f0jbyo2.png"
        alt="about-logo"
        className="absolute md:right-[20%] md:top-0 top-0 -z-40 w-[100%] h-full md:blur-none blur-sm md:w-auto md:h-[80%] object-contain"
      />
      <Footer />
    </div>
  );
}

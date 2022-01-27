import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function premium() {
  return (
    <>
      <div className="w-full bg-[#5ab963]  md:h-[53vh] text-center">
        <Navbar />
        <div className="flex flex-col mt-8 md:mt-24 mb-8  md:w-[1230px] mx-auto w-full md:pr-12 p-4">
          <div className="flex flex-row justify-end w-full gap-y-8 gap-x-2 pb-4">
            <p className="text-base font-bold text-white">Premium</p>
            <div className="border-t-2 w-12 my-auto "></div>
          </div>
          <p className="md:text-[50px] text-3xl text-white font-[800] md:ml-auto md:mr-0 ml-0 mr-auto ">
            Premium features are available to all users.
          </p>
          <p className="text-start font-mono text-white ml-0 mr-auto mt-8 ">
            Wellcome Desing&Alive Best Ever Collection in the World. There are
            many variations o by injected humour, or randomised words which don
            nott look even slightly believable. If you are going to use a
            passage of Lorem Ipsum, you need to be sure...
          </p>
        </div>
      </div>
      <div className="flex flex-col md:p-8 relative md:pb-20 ">
        <p className="text-[#666] text-lg text-center text-opacity-40 pb-8">
          <strong className="text-black">
            Here is a different option for you.
          </strong>{" "}
          Eos in maluisset mediocritatem. Cu qui admodum inimicus, te mei debet
          qualisque.
        </p>
        <img
          src="https://uploads-ssl.webflow.com/61e6f7c57d32bad945e87f67/61e6f7c57d32ba817be87fa3_image-premium-banner-2.jpg"
          alt="premium banner"
          className="w-full md:w-3/4 mx-auto h-[100vh] object-cover object-center"
        />
        <div className="absolute -bottom-16 left-5 md:bottom-0 md:left-1/4 bg-white flex flex-row items-center justify-between w-[90%] md:w-1/2 mx-auto h-[200px] md:h-[150px] shadow-xl rounded-lg md:px-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNeizDW4BAPnmx8WJM8_8IdbsAwNxhG2pGoQ&usqp=CAU"
            alt="premium banner"
            className="md:w-[100px] w-[60px] h-[60px] object-cover"
          />
          <div className="text-center font-mono ">
            <p>Pro ad constituto el</p>
            <p className="text-[#666] text-xs text-opacity-60 ">
              Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos
              ocurreret splendide hendrerit. Dicant placerat democritum eos id,
              sit mollis invidunt mediocritatem ei.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 relative my-20 gap-y-6 text-center md:w-1/2 mx-auto border-b-2  ">
        <p className="font-mono text-xs text-[#555] text-apacity-40 ">
          WHAT THE PEOPLE SAY
        </p>
        <p className="text-green-500 font-bold text-lg">
          “Great customer service, kuddos for doing things the right way rather
          than the easy way. I am still getting compliments about the food
          served at my wedding.”
        </p>
        <div className="flex flex-row gap-x-4 items-center justify-center md:pb-12">
          <img
            src="https://uploads-ssl.webflow.com/61e6f7c57d32bad945e87f67/61e6f7c57d32ba43a5e87fa5_image-avatar.jpg"
            alt="user-comment"
            className="w-12 h-12 object-cover rounded-full "
          />
          <p className="font-mono ">Serif COLAKEL</p>
        </div>
      </div>
      <div className="w-full md:w-[1170px] mx-auto flex flex-col gap-y-12 p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-20">
          <img
            src="https://uploads-ssl.webflow.com/61e6f7c57d32bad945e87f67/61e6f7c57d32baa25be87f9e_image-row-01.jpg"
            alt="row-01"
            className="w-full md:w-[470px] h-[330px] object-cover object-center"
          />
          <div className="text-center font-mono md:w-1/3 w-full">
            <p className="text-[#666] text-lg text-center text-opacity-40 pb-8">
              <strong className="text-black">
                Ex tempor euismod sapientem ouis lexor pro.
              </strong>{" "}
              Quas suscipit ad mea verear vivendo tincidunt.
            </p>
            <p className="text-[#666] text-lg text-opacity-60 font-mono">
              Pri cu dico labores officiis, odio principes complectitur ad sea.
              Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid
              definitiones id cum, ad meliore perpetua referrentur sed. Quas
              suscipit ad mea verear vivendo tincidunt.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-y-4 md:gap-x-20">
          <div className="text-center font-mono w-full md:w-1/3 ">
            <p className="text-[#666] text-lg text-center text-opacity-40 pb-8">
              <strong className="text-black">
                Te elit antiopam vix zril recusabo ut pri.
              </strong>{" "}
              Quas suscipit ad mea verear vivendo tincidunt.
            </p>
            <p className="text-[#666] text-lg text-opacity-60 font-mono">
              Possit tritani consectetuer eu his, nusquam minimum ut per, eu eos
              ocurreret splendide hendrerit. Dicant placerat democritum eos id,
              sit mollis invidunt mediocritatem ei.
            </p>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/61e6f7c57d32bad945e87f67/61e6f7c57d32bad293e87f9d_image-row-02.jpg"
            alt="row-02"
            className="w-full md:w-[470px] h-[330px] object-cover object-center"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

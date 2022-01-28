import Link from "next/link";
import React from "react";
import {
  FaGlobe,
  FaStar,
  FaUserAlt,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
export default function Login() {
  return (
    <div className="w-full h-[100vh] bg-[#140e3a] flex items-center justify-center gap-x-4 text-white">
      <div className="w-[1170px] flex flex-col-reverse md:flex-row items-center justify-center m-auto ">
        {" "}
        <div className="hidden w-1/2 h-full md:flex flex-col items-start justify-center p-12">
          <div className="flex flex-row w-full gap-y-8 gap-x-2 pb-4">
            <div className="border-t-2 w-12 my-auto "></div>
            <p className="text-base font-bold text-white">
              WWHAT IS DESINGANDLIVE
            </p>
          </div>
          <p className="text-[40px] font-bold ">
            We have built a platform to buy and sell shares.
          </p>
          <div className="flex flex-col gap-y-8 pt-12">
            <div className="flex flex-row items-center gap-x-4">
              <FaUserAlt className="text-white bg-blue-600 rounded-full w-[15%] h-auto p-2" />
              <div className="w-auto ">
                <p className="text-xl font-bold pb-4">Crowd Wisdom</p>
                <p className="font-mono ">
                  The process of taking into account the collective opinion of a
                  group
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-4">
              <FaGlobe className="text-white bg-blue-600 rounded-full w-[12%] h-auto p-2" />
              <div className="w-auto ">
                <p className="text-xl font-bold pb-4">Rewards MeAchanism</p>
                <p className="font-mono ">
                  The system pay a bonus for excellent individuals
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-4">
              <FaStar className="text-white bg-blue-600 rounded-full w-[15%] h-auto p-2" />
              <div className="w-auto ">
                <p className="text-xl font-bold pb-4">Decentralized Platform</p>
                <p className="font-mono ">
                  The platform helps investors to make easy to purchase and sell
                  their tokens
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-login-bg md:w-1/2 md:h-full w-full h-auto bg-center bg-no-repeat bg-contain p-4 md:p-12 ">
          <form className="h-auto flex flex-col justify-center gap-y-1  rounded-lg bg-white  bg-opacity-50  p-8">
            <p className="text-center text-black font-bold text-[30px]">
              Login
            </p>
            <label className="text-black font-bold text-lg">Email</label>
            <input
              type="email"
              placeholder="Email Adress"
              className="border-2 border-white p-2 my-4 text-black"
            />
            <label className="text-black font-bold text-lg">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-white p-2 my-4 text-black"
            />
            <button className="border-2 w-full text-lg font-bold  rounded-md border-black text-black p-2 my-4 hover:bg-black hover:text-white">
              Login
            </button>
            <p className="text-center text-black font-bold">
              or Connect with Social Media
            </p>
            <div className="flex flex-row w-full gap-x-4">
              <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white flex items-center justify-center  p-2 rounded-lg w-1/3">
                <FaFacebook size={25} />
              </button>

              <button className="bg-white text-black p-2 hover:bg-black hover:text-white  rounded-lg w-1/3 flex items-center justify-center">
                <FaGithub size={25} />
              </button>
              <button className="bg-white text-blue-500 p-2 hover:bg-blue-500 hover:text-white rounded-lg w-1/3 flex items-center justify-center">
                <FaTwitter size={25} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

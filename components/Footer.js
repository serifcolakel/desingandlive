import React from "react";
import { useRouter } from "next/router";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="w-full h-[400px] bg-[#0a0e1a] text-white flex flex-col items-start justify-center ">
      <div className="w-full h-full md:w-[1170px] flex p-8 flex-col pt-20 md:pt-40 md:flex-row mx-auto">
        <div className="md:w-1/2">
          <p
            className="text-[32px] font-bold cursor-pointer pb-2 md:pb-4"
            onClick={() => router.push("/")}
          >
            DESINGANDLIVE
          </p>
          <p className="text-[12px] text-[#666] font-[600] ">
            ©2022 Rasit Inc, All rights reserved.
          </p>
        </div>
        <div className="flex flex-row md:w-1/3 w-full gap-x-4 md:justify-between">
          <div className="flex flex-col gap-y-4 md:pt-0  pt-4">
            <p className="text-sm font-bold hover:text-green-500  cursor-pointer">
              Features
            </p>
            <p className="text-sm font-bold hover:text-green-500  cursor-pointer">
              Premium
            </p>
            <p className="text-sm font-bold hover:text-green-500  cursor-pointer">
              Pricing
            </p>
            <p className="md:hidden block text-sm font-bold hover:text-green-500  cursor-pointer">
              Image License Info
            </p>
            <p className="md:hidden block  text-sm font-bold hover:text-green-500  cursor-pointer">
              Powered by Webflow
            </p>
          </div>
          <div className="flex flex-col gap-y-4 md:pt-0 pt-4">
            <p className="text-sm font-bold hover:text-green-500  cursor-pointer">
              About
            </p>
            <p className="text-sm font-bold hover:text-green-500  cursor-pointer">
              Blog
            </p>
            <p className="text-sm font-bold hover:text-green-500  cursor-pointer">
              Contact
            </p>
            <div className="md:hidden flex flex-row gap-x-4 md:pt-0 md:pl-12 pt-2">
              <FaFacebookF className="text-white text-2xl mr-4 cursor-pointer hover:text-green-500 " />
              <FaTwitter className="text-white text-2xl mr-4 cursor-pointer hover:text-green-500" />
              <FaInstagram className="text-white text-2xl cursor-pointer hover:text-green-500" />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-y-4">
            <p className="text-sm font-bold hover:text-green-500  cursor-pointer">
              Image License Info
            </p>
            <p className="text-sm font-bold hover:text-green-500  cursor-pointer">
              Powered by Webflow
            </p>
          </div>
        </div>
        <div className="hidden md:flex flex-row gap-x-4 pl-4">
          <FaFacebookF className="text-white text-2xl mr-4 cursor-pointer hover:text-green-500 " />
          <FaTwitter className="text-white text-2xl mr-4 cursor-pointer hover:text-green-500" />
          <FaInstagram className="text-white text-2xl cursor-pointer hover:text-green-500" />
        </div>
      </div>
    </div>
  );
}

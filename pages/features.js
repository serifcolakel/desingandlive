import Link from "next/link";
import React from "react";
import Navbar from "../components/Navbar";
export default function features() {
  return (
    <div className="w-full bg-features-image bg-repeat-space h-[100vh] text-center">
      <Navbar />
      <div className="flex items-center md:w-[1130px] h-[80vh] mx-auto justify-center w-full pr-12">
        <div className="ml-auto mr-0 flex flex-col items-center justify-center ">
          <div className="flex flex-row justify-end w-full gap-x-8 pb-4">
            <p className="text-base font-bold text-white">Sign Up</p>
            <div className="border-t-2 w-12 my-auto "></div>
          </div>
          {["Connect Wallet", "Google Sign In", "Facebook Sign In"].map(
            (item, index) => (
              <button
                key={index}
                className={
                  index == 2
                    ? "w-[200px]  h-[46px] border-2 bg-blue-600 rounded-md border-white p-2 my-2 text-white hover:bg-white hover:text-blue-600"
                    : "w-[200px]  h-[46px] border-2 rounded-md border-white p-2 my-2 text-white hover:bg-white hover:text-green-600"
                }
              >
                <Link href="/register">
                  <p className="text-lg font-bold ">{item}</p>
                </Link>
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

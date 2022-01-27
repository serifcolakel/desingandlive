import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import { Transition } from "@tailwindui/react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full px-4 pt-0  rounded-b-xl md:w-[1170px] h-[60px] md:h-[90px] mx-auto flex flex-row justify-between items-center text-white">
      <Link href="/">
        <p className="text-xl pl-4 md:pl-0 font-bold cursor-pointer">
          DESINGANDALIVE
        </p>
      </Link>
      <div className={isOpen ? "h-full p-4 bg-[#5ab963]" : "h-full p-4 "}>
        <HiMenu
          onClick={() => setIsOpen(!isOpen)}
          size={40}
          className="pb-3 md:hidden block text-xl cursor-pointer "
        />
      </div>

      <Transition
        show={isOpen}
        className="absolute top-[60px] left-0 bg-[#5ab963] w-full h-[68vh]  mt-auto md:hidden flex-col  items-center z-50 "
      >
        <Transition.Child
          enter="transition-opacity linear duration-2000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-2000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {["Features", "Premium", "Pricing", "About", "."].map((item, index) =>
            index === 4 ? (
              <div
                key={index}
                className="hidden md:block pb-[25px] text-[40px] "
              >
                .
              </div>
            ) : (
              <Link key={index} href={`/${item.toLowerCase()}`}>
                <p className="text-sm py-6 font-bold cursor-pointer  hover:text-green-600">
                  {item}
                </p>
              </Link>
            )
          )}
          <Link href="/login">
            <p className="text-sm font-bold cursor-pointer py-6 hover:text-green-600">
              Sign in
            </p>
          </Link>
          <button className="border-2 w-[90%] rounded-md border-white p-2 my-6 hover:bg-white hover:text-green-600">
            <Link href="/register">
              <p className="text-lg font-bold ">Register</p>
            </Link>
          </button>
        </Transition.Child>
      </Transition>

      <div className="hidden md:flex flex-row items-center gap-x-8">
        {["Features", "Premium", "Pricing", "About", "."].map((item, index) =>
          index === 4 ? (
            <div key={index} className="hidden md:block pb-[25px] text-[40px] ">
              .
            </div>
          ) : (
            <Link key={index} href={`/${item.toLowerCase()}`}>
              <p className="text-sm  font-bold cursor-pointer  hover:text-green-600">
                {item}
              </p>
            </Link>
          )
        )}
        <Link href="/login">
          <p className="text-sm font-bold cursor-pointer hover:text-green-600">
            Sign in
          </p>
        </Link>
        <button className="border-2 rounded-md border-white p-2 hover:bg-white hover:text-green-600">
          <Link href="/register">
            <p className="text-lg font-bold ">Register</p>
          </Link>
        </button>
      </div>
    </div>
  );
}

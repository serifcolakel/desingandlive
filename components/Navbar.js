import Link from "next/link";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className="w-full px-4 pt-2 md:pt-0 rounded-b-xl md:w-[1170px] h-[60px] md:h-[90px] mx-auto flex flex-row justify-between items-center text-white">
      <Link href="/">
        <p className="text-xl font-bold cursor-pointer">DESINGANDALIVE</p>
      </Link>
      <HiMenu
        size={40}
        className="border-2 rounded-lg p-1 md:hidden block text-xl cursor-pointer"
      />
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

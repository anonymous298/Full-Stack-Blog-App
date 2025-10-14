import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { logo } = assets;
  console.log(logo);

  return (
    <>
      <div id="navbar">
        <div id="container" className="w-[80%] flex justify-between items-center mx-auto p-5 max-md:w-[90%] max-sm:w-[98%]">
          <Link href={'/'} className="logo relative h-[50px] w-[180px] max-sm:w-[150px] max-sm:h-[50px]">
            <Image src={logo} alt="logo" fill={true} />
          </Link>

          <div>
            <button className="border-2 py-2 px-6 max-md:px-5 max-sm:py-1 max-sm:px-3 font-semibold shadow-[-7px_7px_0px_#000] transform transition-all hover:scale-105 cursor-pointer flex items-center gap-1">Get started <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#000000" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg></button>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Navbar;

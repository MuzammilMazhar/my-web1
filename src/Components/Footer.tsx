import React from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/16/solid";
function Footer(){
    return(
        <div className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 bg-gray-900 rounded-t-lg mt-10">
        <div>
        <div className=" align-center items-center sm:p-10 p-10">
            <div className="flex items-center">
            <HomeIcon className="text-white sm:w-10 sm:h-10 w-10 h-10 md:w-8 md:h-8"/>
        <Link className="text-white font-bold pt-2 text-4xl sm:text-2xl" href="">Decobay</Link>
        </div>
        <p className="sm:text-[12px] text-white pt-2">2024 Decobay .All Rights Reserved.</p>
        <p className="sm:text-[12px] text-white pt-2">Developed By Muzammil Mazhar</p>
      </div>
      </div>
            <div className="text-white md:p-10 items-center p-10">
                <h1 className="pt-2 font-bold text-4xl sm:text-2xl">Products</h1>
                <p className="text-[12px] leading-5">Sofa , Chair , Table</p>
                <p className="text-[12px] leading-5">WardRob , Decoration</p>
                <p className="text-[12px] leading-5">HousePlant</p>
            </div>
            <div className="text-white p-10 ">
                <h1 className="pt-2 font-bold text-4xl sm:text-2xl">Company</h1>
                <p className="text-[12px] leading-5">About , Stories</p>
                <p className="text-[12px] leading-5">Find A Store</p>
                <p className="text-[12px] leading-5">Careers</p>
            </div>
            <div className="text-white p-10 ">
                <h1 className="pt-2 font-bold text-4xl sm:text-2xl">Follow Us</h1>
                <p className="text-[12px] leading-5">Instagram </p>
                <p className="text-[12px] leading-5">Facebook YouTube</p>
                <p className="text-[12px] leading-5">TikTok</p>
            </div>
        </div>
    )
}

export default Footer;
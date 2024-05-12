import React from "react";
import Link from "next/link";
import {  MagnifyingGlassCircleIcon, ShoppingBagIcon } from "@heroicons/react/16/solid";
import { HomeIcon } from "@heroicons/react/16/solid";

function Navbar(){
    return(
        <div className="flex  flex-wrap gap-4 rounded-b-2xl bg-black bg-opacity-75 w-[100%] justify-between justify-around items-center ">
        <div className="flex align-center items-center">
            <HomeIcon className="text-white w-8 h-8"/>
        <Link className="text-white font-bold pt-2" href="">Decobay</Link>
      </div>
      <div className=" py-5 space-between ">
      <Link className="text-white text-1xl pl-5 gap-x-4" href="" >Home</Link>
       <Link className="text-white text-1xl pl-5" href="" > Product</Link>
       <Link className="text-white text-1xl pl-5" href="" >Collection</Link>
       <Link className="text-white text-1xl pl-5" href="" >About</Link>
       <Link className="text-white text-1xl pl-5" href="" >Contact</Link>
      </div>
    
      <div className="flex">
<ShoppingBagIcon className="w-5 h-5 text-white"/>
    <Link className="text-white text-1xl pl-5" href="" >SignIn</Link>
      </div>
        </div>
    )
}

export default Navbar;
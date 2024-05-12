import Link from "next/link";
import React from "react";
import List from "./List";

function Product(){
    return(
        <div className="p-10">
            <h1 className="text-4xl font-bold ">Top-Quality Product Choices</h1>
            <p className="pt-2 pb-4">Treat Your   Spaces To Lasting Elegance,Explore Our Top Quality Selections For Enduring Quality </p>
            <div className="flex flex-wrap gap-4 justify-start mb-8 mt-2">
                <Link className="border-2 border-gray-200 px-4 py-2 active:bg-black active:text-white hover:bg-black hover:text-white rounded-lg delay-100 " href="">All</Link>
                <Link className="border-2 border-gray-200 px-4 py-2  active:bg-black active:text-white hover:bg-black hover:text-white rounded-lg delay-100 ml-2" href="">Sofa</Link>
                <Link className="border-2 border-gray-200 px-4 py-2  active:bg-black active:text-white hover:bg-black hover:text-white rounded-lg delay-100 ml-2" href="">Table</Link>
                <Link className="border-2 border-gray-200 px-4 py-2  active:bg-black active:text-white hover:bg-black hover:text-white rounded-lg delay-100 ml-2" href="">Chair</Link>
                <Link className="border-2 border-gray-200 px-4 py-2  active:bg-black active:text-white hover:bg-black hover:text-white rounded-lg delay-100 ml-2" href="">HouseHolds</Link>
            </div>
            <List/>
        </div>
    )
}


export default Product;
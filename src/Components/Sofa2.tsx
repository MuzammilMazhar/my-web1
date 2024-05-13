"use client"
import React from "react";
import Image from "next/image";
import List from "./List";

function Sofa2(){
    return(
       <div className="p-10">
 <Image className="w-full h-full rounded-lg pt-5 pb-10" src="/5254.jpg" alt="Poster" width={500} height={500} />
    <h1 className="text-4xl font-bold ">Top-Quality Product Choices</h1>
    <p className="pt-2 pb-4">Treat Your   Spaces To Lasting Elegance,Explore Our Top Quality Selections For Enduring Quality </p>
        
        <List/>
  
       </div>
    )
}


export default Sofa2;
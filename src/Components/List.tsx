"use client"
import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
function List(){
    return(
       <div>
         <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        <div className=" items-center">
            
            <Image src="/sofa1.png" alt="sofa" width={200} height={200}/>
           <div className="pl-4 ">
           <p className="font-semibold  ">Emperial Gray </p>
            <p>Sofa</p>
            <p className="flex font-semibold text-1xl ">$150.000 Only</p>
           
           </div>
        </div>
        <div>
            <Image src="/128.jpg" alt="sofa" width={200} height={200}/>
            <p className="font-semibold ">Emperial Gray </p>
            <p>Sofa</p>
            <p className="font-semibold text-1xl ">$150.000 Only</p>
        </div>
        <div>
            <Image src="/129.jpg" alt="sofa" width={200} height={200}/>
            <p className="font-semibold">Emperial Gray </p>
            <p>Sofa</p>
            <p className="font-semibold text-1xl">$150.000 Only</p>
        </div>
        <div>
            <Image src="/130.jpg" alt="sofa" width={200} height={200}/>
            <p className="font-semibold">Emperial Gray </p>
            <p>Sofa</p>
            <p className="font-semibold text-1xl">$150.000 Only</p>
        </div>
        
        </div>
        <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        <div>
            <Image src="/130.jpg" alt="sofa" width={200} height={200}/>
            <p className="font-semibold">Emperial Gray </p>
            <p>Sofa</p>
            <p className="font-semibold text-1xl">$150.000 Only</p>
        </div>
        <div>
            <Image src="/129.jpg" alt="sofa" width={200} height={200}/>
            <p className="font-semibold">Emperial Gray </p>
            <p>Sofa</p>
            <p className="font-semibold text-1xl">$150.000 Only</p>
        </div>
        <div>
            <Image src="/128.jpg" alt="sofa" width={200} height={200}/>
            <p className="font-semibold ">Emperial Gray </p>
            <p>Sofa</p>
            <p className="font-semibold text-1xl ">$150.000 Only</p>
        </div>
        <div className=" items-center">
            
            <Image src="/sofa1.png" alt="sofa" width={200} height={200}/>
           <div className="pl-4 ">
           <p className="font-semibold  ">Emperial Gray </p>
            <p>Sofa</p>
            <p className="flex font-semibold text-1xl ">$150.000 Only</p>
           
           </div>
        </div>
        </div>
       </div>
    )
}


export default List;
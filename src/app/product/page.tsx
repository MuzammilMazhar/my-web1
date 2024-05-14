
import React from "react";

function Product(){
    return(
        <div className="mt-24 grid grid-cols-1 p-20">
        <h1  className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold">Product Page</h1>
        <div>
            <h1  className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold">Design</h1>
        </div>
        <div className="justify-items-center justify-self-center">
            <h1  className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold">For</h1>
        </div>
        <div>
            <h1  className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold float-right">Demo</h1>
        </div>

    </div>
    )
}



export default Product;
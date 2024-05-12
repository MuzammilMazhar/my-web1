import React from "react";
import Image from "next/image";
function Category(){
    return(
        <div>
          <div className="p-10">
          <h1 className="text-4xl font-bold ">Preffered Categories</h1>
            <p className="pt-2 pb-4">Discover Unlimited Excellence in Every Selection</p>
          </div>
          <div className="flex grid gap-4 grid-cols-2 sm:grid-cols-4 md-grid-cols-4 lg:grid-cols-4 p-10 pt-5">
<div className="bg-[url(/129.jpg)] bg-cover bg-center">
  
   <h1 className="text-2xl text-black text-bold p-10 float-center-bottom">Sofa Chair</h1>
 
</div>
<div className="bg-[url(/129.jpg)] bg-cover bg-center">
   <div className="bg-black bg-opacity-75 rounded-lg ">
   <h1 className="text-5xl text-white text-bold p-24 float-center-bottom">Sofa Chair</h1>
 </div>
</div>
<div className="bg-[url(/129.jpg)] bg-cover bg-center">
   <div className="bg-black bg-opacity-75 rounded-lg ">
   <h1 className="text-5xl text-white text-bold p-24 float-center-bottom">Sofa Chair</h1>
 </div>
</div>
<div className="bg-[url(/129.jpg)] bg-cover bg-center">
   <div className="bg-black bg-opacity-75 rounded-lg ">
   <h1 className="text-5xl text-white text-bold p-24 float-center-bottom">Sofa Chair</h1>
 </div>
</div>

          </div>
        </div>
    )
}


export default Category;
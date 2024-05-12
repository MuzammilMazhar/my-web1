import React from "react";
import Image from "next/image";



function Hero(){
    return(


     <div>
<h1 className="text-4xl font-bold p-5">Our Weekwnd Deals</h1>
<div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 bg-gray-500 grid-flow-col gap-4 rounded-lg">
  <div className="row-span-3  p-5 bg-gray-500 p-5">
 <div>
 <Image className="w-full h-full" src="/125.jpg" alt="sofa" width={300} height={800}/>
 </div>
  </div>
  <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 col-span-2 md:gap-2 md:p-5 md:pb-0">
<div>
<Image src="/126.jpg" alt="sofa" width={250} height={250}/>
</div>
<div>
<Image src="/127.jpg" alt="sofa" width={250} height={250}/>
</div>
<div>
<Image src="/126.jpg" alt="sofa" width={250} height={250}/>
</div>
<div>
<Image src="/127.jpg" alt="sofa" width={250} height={250}/>
</div>
  </div>
  <div className="grid grid-cols-4 col-span-2  gap-2 p-5 pt-0">
<div>
<Image src="/126.jpg" alt="sofa" width={250} height={250}/>
</div>
<div>
<Image src="/127.jpg" alt="sofa" width={250} height={250}/>
</div>
<div>
<Image src="/126.jpg" alt="sofa" width={250} height={250}/>
</div>
<div>
<Image src="/127.jpg" alt="sofa" width={250} height={250}/>
</div>
  </div>
 
</div>


     </div>

    )
}


export default Hero;
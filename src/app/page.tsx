// import Hero from "@/Components/Hero";
// import Category from "@/Components/Category";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Product from "@/Components/Product";
import Review from "@/Components/Review";
import Sofa2 from "@/Components/Sofa2";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
   
    <div className="hero  bg-[url(/sofa.jpg)] bg-blue-500 bg-opacity-25 bg-cover bg-bottom ">
    <Navbar/>
<div  className="bg-black bg-opacity-75 p-10 sm:p-16 md:p-28 lg:p-48 ">
<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl  text-white font-bold justify-center">Discover The Perfect Pieces For Your Home</h1>
<p className="text-white pb-4 pt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus modi fugit cumque a id quisquam dicta. Omnis sapiente repudiandae iure, in adipisci id ratione, deserunt enim corporis est facilis voluptatibus!</p>
<Link className="px-4 py-2 bg-white rounded-lg" href="">Shop Now</Link>
</div>
    </div>
    {/* <Hero/> */}
    <Product/>
    
<Sofa2/>
<Review/>
  <Footer/>
   </div>
  );
}

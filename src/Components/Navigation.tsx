"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3BottomLeftIcon, HomeIcon, XMarkIcon } from '@heroicons/react/16/solid';




function Navigation() {
  const [navigation, setNavigation] = useState(false);
  return (
    <div>
      <nav className="w-full  bg-black fixed top-0 left-0 right-0 z-10 items-center justify-around">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 items-center">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block items-center">
              {/* LOGO */}
              <Link className="flex align-center items-center" href="/">
              <HomeIcon className="text-white w-8 h-8"/>
        <Link className="text-white font-bold pt-2" href="./">Decobay</Link>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavigation(!navigation)}
                >
                  {navigation ? (
                    <XMarkIcon className='w-5 h-5 text-white font-bold'/>
                 
                  ) : (
                    <Bars3BottomLeftIcon className='w-5 h-5 focus:border-none active:border-none color:white text-white '/>
                
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center items-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                navigation ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0   border-gray-900   md:hover:bg-transparent">
                  <Link href="./" onClick={() => setNavigation(!navigation)}>
                  Home
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0    border-gray-900   md:hover:bg-transparent">
                  <Link href="./product" onClick={() => setNavigation(!navigation)}>
                    Product
                  </Link>
                </li>
               
                <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0   border-gray-900   md:hover:bg-transparent">
                  <Link href="./about" onClick={() => setNavigation(!navigation)}>
                  About
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
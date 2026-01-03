
"use client";
import { useState } from "react"
import { Menu, X } from "lucide-react";

export default function Header({isScrolled}: {isScrolled:boolean}) {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <header className={`absolute top-0 z-50 w-full ${isScrolled && "bg-[#FAFAFA] text-[#171717] sticky top-0"}`}>
      <div className={`mx-auto flex ${isMobile ? "hidden" : "flex"} ${isScrolled && "text-[#171717]"} max-w-7xl items-center justify-between px-6 py-5`}>
        <span className={`text-lg font-semibold  ${isScrolled ? "text-[#171717]": "text-white"}`}>CELZ4</span>
        <nav className="hidden items-center gap-8 md:flex">
          {["Home", "About Us", "Plan your visit", "FAQs", "Sermons", "Events", "Media", "Join the service", "Contact Us"].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium  ${isScrolled ? "text-[#262626] hover:text-[#262626] border-b-[#262626]": "text-white/90 hover:text-white border-b-white"}  hover:border-b-2 `}
            >
              {item}
            </a>
          ))}
        </nav>
       
        <button aria-label="Open menu" onClick={() => setIsMobile(true)} className={`flex md:hidden text-white `}>
          <Menu />
        </button>
        <button aria-label="Open menu" className={`hidden md:block rounded-md px-4 py-1 text-white ${isScrolled && "bg-[#202C5E]"}`}>
          Login
        </button>
      </div>
       <div className={ `flex flex-col md:hidden ${isMobile ? "flex" : "hidden"} py-1.5 text-[#171717] z-50 w-full bg-white`}>
        <div className="flex justify-end-safe align-middle w-full px-1.5">
          <X onClick={() => setIsMobile(false)} />
        </div>
          <ul className="text-center px-3">
            <li  className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white" onClick={() => setIsMobile(false)}><a href="#" >Home</a></li>
            <li  className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white" onClick={() => setIsMobile(false)}><a href="#" >About Us</a></li>
            <li  className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white" onClick={() => setIsMobile(false)}><a href="#" >Plan your visit</a></li>
            <li  className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white" onClick={() => setIsMobile(false)}><a href="#" >FAQs</a></li>
            <li  className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white" onClick={() => setIsMobile(false)}><a href="#" >Sermons</a></li>
            <li  className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white" onClick={() => setIsMobile(false)}><a href="#" >Events</a></li>
            <li  className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white" onClick={() => setIsMobile(false)}><a href="#" >Media</a></li>
            <li  className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white" onClick={() => setIsMobile(false)}><a href="#" >Join the service</a></li>
            <li  className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white" onClick={() => setIsMobile(false)}><a href="#" >Contact Us</a></li>
          </ul>
        </div>
    </header>
  );
}



" use client"
import { MapPin } from 'lucide-react';
import React from 'react'

const Jumbotron = ({heading, subtext, hasBtn, btnText, bgImage}: {heading?:string, subtext?:string, hasBtn:boolean, btnText?:string, bgImage:string}) => {
   
  return (
    <div
      className={`w-full h-[60vh]   flex flex-col justify-center items-center text-center p-4`}
      style={{ backgroundImage: `url(${bgImage})` , backgroundPosition: 'center', backgroundSize: 'cover'}}
    >
      <h1 className="text-white text-3xl font-bold md:text-5xl">{heading}</h1>
      {subtext && (
        <p className="text-white mt-4 text-sm md:text-base">{subtext}</p>
      )}
      {hasBtn && (
        <button className="mt-8 rounded-md bg-white px-8 py-4 w-90px text-sm cursor-pointer text-[#171717]">
          <span className="flex justify-between align-middle">
            <MapPin className="w-4 h-4" /> &nbsp; {btnText}
          </span>
        </button>
      )}
    </div>
  );
}

export default Jumbotron

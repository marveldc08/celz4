"use client"
import { useEffect, useState } from "react";
// import Image from "next/image";
import  Header  from "@/components/Header"
import { MapPin, CalendarDays } from "lucide-react";
import Image from "next/image";
import EventCountdown from "@/components/CountDownTimer";


export default function Home() {
  const  [isScrolled, setIsScrolled] = useState(false)
  const date = new Date();
  console.log(date)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Run once on mount (handles refresh when already scrolled)
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Header isScrolled={isScrolled} />
      <main className="flex flex-col items-center justify-center">

        <section className="relative h-[90vh] w-full bg-[url('/images/landing-jumbo.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 z-10"/>
          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className=" px-6 text-white">
              <h1 className="text-2xl font-bold md:text-5xl">
                Welcome to Christ Embassy Zone 4
              </h1>
              <p className="mt-4 text-sm md:text-base">
                A place where your life will be transformed
              </p>
              <button className="mt-8 rounded-md bg-white px-8 py-4 w-90px text-sm  text-[#171717]">
                 <span className="flex justify-between align-middle">
                  <MapPin className="w-4 h-4" /> &nbsp; Join us today
                 </span>
              </button>
            </div>
          </div>
        </section>

        <section className=" w-full">
          <div className="  mx-auto grid w-full grid-cols-1 md:grid-cols-4 h-900px">
                <div className="flex flex-col justify-center align-middle bg-white text-center text-[#0E2A57] h-full py-3">
                  <p className="text-md ">Upcoming</p>
                  <h1 className="mb-3 text-[30px] font-semibold">Events</h1>
                </div>
                <div>
                  <div className="w-full h-[50%]">
                    <Image src={"/images/worship.jpg"} width={800} height={800} style={{height: "100%"}} alt="event image" />
                  </div>
                  <div className="bg-[#C3A253] text-white p-6 text-center flex flex-col justify-center align-middle h-[50%]">
                     <p className="text-sm "> 
                     29th December, 2025
                    </p>
                    <h1 className="mb-3 text-lg font-medium">Night of Glory live</h1>
                  </div>
                </div>
                <div className="relative w-full bg-[url('/images/event-bg.jpg')] text-left p-7 text-[#262626] bg-cover bg-center" >
                <div className="absolute inset-0 bg-[#ccc8c1]/50 z-10" />
                  <div className="relative z-20">
                    <p className="text-sm ">
                      23rd January, 2026 
                    </p>
                    <h1 className="mb-3 text-[30px] font-semibold">Worship Arena</h1>
                    <p className="text-sm py-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima iure ut dolorem, qui vel eum porro rerum nesciunt quaerat expedita! Rem quo veniam cumque numquam, fuga fugiat molestias voluptas dolor.
                    </p>
                    <div className="w-[55%]">
                      <span className="flex flex-row justify-between text-sm align-middle">
                        <CalendarDays className="w-5 h-5" /> &nbsp; <p>10 AM - 8 PM</p>
                      </span>
                      <span className="flex flex-row justify-between text-sm align-middle">
                        <CalendarDays className="w-5 h-5" /> &nbsp; <p>10 AM - 8 PM</p>
                      </span>
                    
                    </div>
                  </div>
                  
                </div>
                <div className="bg-[#202C5E] text-white p-6 ">
                  <h3 className="mb-3 text-[30px] font-semibold">More Upcoming Events</h3>
                  <div className="border-b border-b-white">
                    <h3 className="mb-3 text-[15px] font-semibold my-0.5">Youth Alive Retreat</h3>
                     <p className="text-xs my-0.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus 
                      </p>
                       <span className="flex flex-row justify-between text-sm align-middle my-0.5">
                        <CalendarDays className="w-5 h-5" /> &nbsp; <p>10 AM - 8 PM</p>
                      </span>

                      <p className="my-1 text-sm">Read More...</p>
                  </div>
                  <div className="mt-3">
                    <h3 className="mb-3 text-[15px] font-semibold my-0.5">Rhapsody Night</h3>
                     <p className="text-xs my-0.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus 
                      </p>
                      
                  </div>
                 
                </div>
              
          </div>
          <EventCountdown targetDate={date.toISOString()} />
        </section>
 <section className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-3">
        {/* Left Text */}
        <div className="h-full">
          <p className="mb-2 text-sm  text-[#1E2F5C]">
            About Us
          </p>
          <p className="text-lg leading-relaxed font-semibold text-gray-600">
            Zone 4 is a home filled with hope to the hopeless and
            helping them to fulfill God’s calling
          </p>

          <button className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#1E2F5C]">
            Locate the church
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#1E2F5C]">
              →
            </span>
          </button>
        </div>

        {/* Image with Offset Background */}
        <div className="relative mx-auto">
          <div className="absolute -bottom-4 -left-4 h-full w-full rounded-xl bg-[#1E2F5C]" />
          <Image
            src="/images/about-pastor.png"
            alt="Pastor ministering"
            className="relative z-10 rounded-xl object-cover"
            width={400}
            height={700}
          />
        </div>

        {/* Right Text */}
        <div>
          <p className="md:text-3xl font-semibold">
            <span className="text-[#D9A441]">Loving</span> <span className="text-[#1E2F5C]">God</span>
          </p>
          <p className="mt-1 md:text-3xl font-semibold">
           <span className="text-[#1E2F5C]"> Care for</span> <span className="text-[#D9A441]">Humanity</span>
          </p>
          <p className="mt-1  md:text-3xl font-semibold text-[#D9A441]">
            <span className="text-[#D9A441]">Hope</span> <span className="text-[#1E2F5C]">filled</span>
          </p>
        </div>
      </div>
    </section>

          <section className="w-full h-auto">
            <Image src={"/images/about-frame.png"} width={1000} height={1000} alt="about image"/>
          </section>
      </main>
    </div>
  );
}

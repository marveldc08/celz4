"use client"
import { useEffect, useState } from "react";
// import Image from "next/image";
import  Header  from "@/components/Header"
import { MapPin, CalendarDays, ChevronRight, Share2, Download, Play } from "lucide-react";
import Image from "next/image";
import EventCountdown from "@/components/CountDownTimer";
import FAQ from "@/components/Faq"
import Footer from "@/components/Footer";


export default function Home() {
  const  [isScrolled, setIsScrolled] = useState(false)
  const date = new Date();
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
          <div className="absolute inset-0 bg-black/50 z-10" />
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
                <Image
                  src={"/images/worship.jpg"}
                  width={800}
                  height={800}
                  style={{ height: "100%" }}
                  alt="event image"
                />
              </div>
              <div className="bg-[#C3A253] text-white p-6 text-center flex flex-col justify-center align-middle h-[50%]">
                <p className="text-sm ">29th December, 2025</p>
                <h1 className="mb-3 text-lg font-medium">
                  Night of Glory live
                </h1>
              </div>
            </div>
            <div className="relative w-full bg-[url('/images/event-bg.jpg')] text-left p-7 text-[#262626] bg-cover bg-center">
              <div className="absolute inset-0 bg-[#ccc8c1]/50 z-10" />
              <div className="relative z-20">
                <p className="text-sm ">23rd January, 2026</p>
                <h1 className="mb-3 text-[30px] font-semibold">
                  Worship Arena
                </h1>
                <p className="text-sm py-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima iure ut dolorem, qui vel eum porro rerum nesciunt
                  quaerat expedita! Rem quo veniam cumque numquam, fuga fugiat
                  molestias voluptas dolor.
                </p>
                <div className="w-[55%]">
                  <span className="flex flex-row justify-between text-sm align-middle">
                    <CalendarDays className="w-5 h-5" /> &nbsp;{" "}
                    <p>10 AM - 8 PM</p>
                  </span>
                  <span className="flex flex-row justify-between text-sm align-middle">
                    <CalendarDays className="w-5 h-5" /> &nbsp;{" "}
                    <p>10 AM - 8 PM</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#202C5E] text-white p-6 ">
              <h3 className="mb-3 text-[30px] font-semibold">
                More Upcoming Events
              </h3>
              <div className="border-b border-b-white">
                <h3 className="mb-3 text-[15px] font-semibold my-0.5">
                  Youth Alive Retreat
                </h3>
                <p className="text-xs my-0.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus
                </p>
                <span className="flex flex-row justify-between text-sm align-middle my-0.5">
                  <CalendarDays className="w-5 h-5" /> &nbsp;{" "}
                  <p>10 AM - 8 PM</p>
                </span>

                <p className="my-1 text-sm">Read More...</p>
              </div>
              <div className="mt-3">
                <h3 className="mb-3 text-[15px] font-semibold my-0.5">
                  Rhapsody Night
                </h3>
                <p className="text-xs my-0.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus
                </p>
              </div>
            </div>
          </div>
          <EventCountdown targetDate={date.toISOString()} />
        </section>

        <section className="w-full relative py-24 bg-[url('/images/about-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#FFFFFF]/90 z-10" />
          <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-3">
            {/* Left Text */}
            <div className="h-full text-center md:text-left">
              <p className="mb-2 text-md  text-[#1E2F5C]">About Us</p>
              <p className="text-lg leading-relaxed font-semibold text-gray-600">
                Zone 4 is a home filled with hope to the hopeless and helping
                them to fulfill God’s calling
              </p>

              <button className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#1E2F5C] cursor-pointer">
                Locate the church
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#1E2F5C]">
                  <ChevronRight />
                </span>
              </button>
            </div>

            {/* Image with Offset Background */}
            <div className="relative ml-6 md:items-left mx-auto">
              <div className="absolute -bottom-4 -left-6 h-100 w-full rounded-xl bg-[#1E2F5C]" />
              <Image
                src="/images/about-pastor.png"
                alt="Pastor ministering"
                className="relative z-10 rounded-xl object-cover"
                width={400}
                height={700}
              />
            </div>

            {/* Right Text */}
            <div className="text-4xl text-center md:text-left">
              <p className="text-[32px] md:text-3xl font-semibold">
                <span className="text-[#D9A441]">Loving</span>{" "}
                <span className="text-[#1E2F5C]">God</span>
              </p>
              <p className="mt-1 text-[32px] md:text-3xl font-semibold">
                <span className="text-[#1E2F5C]"> Care for</span>{" "}
                <span className="text-[#D9A441]">Humanity</span>
              </p>
              <p className="mt-1 text-[32px] md:text-3xl font-semibold text-[#D9A441]">
                <span className="text-[#D9A441]">Hope</span>{" "}
                <span className="text-[#1E2F5C]">filled</span>
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-3 md:px-8 py-5 ">
          <div className=" px-6 w-full">
            <div className="flex flex-col md:flex-row justify-between align-middle w-full">
              <div className="w-full md:w-[40%] m-2">
                <p className="mb-3 text-sm font-semibold text-[#262626]">
                  Our Ministry
                </p>
                <h1 className="text-xl font-semibold text-[#262626]">
                  Giving hope to the hopeless and helping them to fulfill God’s
                  calling
                </h1>
              </div>
              <div className="w-full md:w-[40%] m-2">
                <p className="text-xs md:text-md text-[#525252]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  facere eveniet quaerat voluptates quod sit magnam et earum
                  explicabo numquam praesentium officia consequatur aut sint
                  esse impedit odio. Modi, veritatis!
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3 mt-10">
              <div className="md:pt-[30%]">
                <div className="rounded-lg shadow-2xl">
                  <Image
                    src="/images/outreach.png"
                    alt="ministry image"
                    width={200}
                    height={200}
                    className="mb-4 rounded-t-lg object-cover"
                    style={{ width: "100%" }}
                  />
                  <div className="p-3.5">
                    <h3 className="mb-2 text-md font-semibold text-[#1E2F5C]">
                      Outreach Ministry
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <button className="inline-flex text-xs font-semibold text-[#1E2F5C]">
                      Learn More &nbsp;{" "}
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#1E2F5C]">
                        <ChevronRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:pt-[60%]">
                <div className="rounded-lg shadow-2xl">
                  <Image
                    src="/images/children.png"
                    alt="ministry image"
                    width={200}
                    height={200}
                    className="mb-4 rounded-t-lg object-cover"
                    style={{ width: "100%" }}
                  />
                  <div className="p-3.5">
                    <h3 className="mb-2 text-md font-semibold text-[#1E2F5C]">
                      Children Ministry
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <button className="inline-flex text-xs font-semibold text-[#1E2F5C]">
                      Learn More &nbsp;{" "}
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#1E2F5C]">
                        <ChevronRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:pt-[90%]">
                <div className="rounded-lg shadow-2xl">
                  <Image
                    src="/images/media.png"
                    alt="ministry image"
                    width={200}
                    height={200}
                    className="mb-4 rounded-t-lg object-cover"
                    style={{ width: "100%" }}
                  />
                  <div className="p-3.5">
                    <h3 className="mb-2 text-md font-semibold text-[#1E2F5C]">
                      Media Ministry
                    </h3>
                    <p className="mb-3 text-xs leading-relaxed text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>
                    <button className="inline-flex text-xs font-semibold text-[#1E2F5C]">
                      Learn More &nbsp;{" "}
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#1E2F5C]">
                        <ChevronRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center align-middle h-auto mt-10 p-5 md:p-50 relative bg-[url('/images/live-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#202C5E]/85 z-10" />
          <div className="relative z-20 w-full h-auto flex flex-col justify-center align-middle">
            <h1 className="text-[30px] text-center font-extrabold text-white mb-5">
              Clips from Previous outreach
            </h1>

            {/* <div className=" flex justify-center align-middle  p-20 md:p-30 border-6 rounded-lg border-white bg-[url('/images/media.png')] bg-cover bg-center">
              <button className="cursor-pointer rounded-full border-2 border-white p-4 md:p-8 text-md text-white">
                Play
              </button>
            </div>
             
            <iframe src="https://www.youtube.com/watch?v=u3i_4ZlFcdY" allowFullScreen width={"500"} height={"500"}/> */}
            <div className="relative w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/u3i_4ZlFcdY`}
                title="YouTube video player"
                className="absolute inset-0 h-full w-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="w-full px-3 md:px-10 py-5 ">
          <div className=" px-6 w-full">
            <div className="flex flex-col md:flex-row justify-evenly align-middle w-full">
              <div className="w-full md:w-[40%] m-2">
                <h1 className="text-xl font-semibold text-[#262626]">
                  Our Sermons
                </h1>
                <p className="text-sm md:text-md text-[#525252]">
                  Free downloads available for food for your soul
                </p>
              </div>
              <div className="w-full md:w-[40%] m-2">
                <p className="text-sm md:text-md text-[#525252]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  facere eveniet quaerat voluptates quod sit magnam et earum
                  explicabo numquam praesentium officia consequatur aut sint
                  esse impedit odio. Modi, veritatis!
                </p>
              </div>
              <div className=" flex flex-col justify-items-center align-middle w-full md:w-[40%] items-end-safe">
                <button className="inline-flex text-sm font-semibold text-[#1E2F5C]">
                  View More &nbsp;{" "}
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#1E2F5C]">
                    <ChevronRight />
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-10 w-full flex flex-col justify-between align-middle">
              <div className=" flex flex-col justify-center align-middle my-2 px-10 md:px-40 ">
                <div className="rounded-lg flex flex-col md:flex-row justify-center align-middle">
                  <div className="flex flex-row md:flex-col justify-items-center align-middle p-3.5 items-start-safe md:items-end-safe text-center">
                    <h1 className="text-[20px] font-bold text-[#262626]">12</h1>
                    <p className="text-sm leading-relaxed text-[#525252]">
                      July, 2029
                    </p>
                  </div>

                  <Image
                    src="/images/pastor.jpg"
                    alt="ministry image"
                    width={70}
                    height={70}
                    className="mb-4 rounded-lg object-cover w-5xl md:w-[20%]"
                  />

                  <div className="p-1 m-0 flex flex-row md:flex-col justify-between align-middle">
                    <div>
                      <div className="md:w-30">
                        <h3 className="mb-2 text-md text-wrap font-semibold text-[#525252]">
                          The Resurrection
                        </h3>
                      </div>
                      <p className="mb-3 text-sm leading-relaxed text-gray-700">
                        Audio: <span className="font-bold">3:45</span>
                      </p>
                      <p className="mb-3 text-sm leading-relaxed text-gray-700">
                        Uploaded by{" "}
                        <span className="text-[#ab8134]">Admin</span>
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2.5">
                      <button className="inline-flex text-xs font-semibold text-white bg-[#1E2F5C] p-2 rounded-lg">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="inline-flex text-xs font-semibold text-white bg-[#1E2F5C] p-2 rounded-lg">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="inline-flex text-xs font-semibold text-white bg-[#1E2F5C] p-2 rounded-lg">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-center align-middle my-2 px-10 md:px-40">
                <div className="rounded-lg flex flex-col md:flex-row justify-center align-middle">
                  <div className="flex flex-row md:flex-col justify-items-center align-middle p-3.5 items-start-safe md:items-end-safe text-center">
                    <h1 className="text-[20px] font-bold text-[#262626]">12</h1>
                    <p className="text-sm leading-relaxed text-[#525252]">
                      July, 2029
                    </p>
                  </div>

                  <Image
                    src="/images/pastor.jpg"
                    alt="ministry image"
                    width={70}
                    height={70}
                    className="mb-4 rounded-lg object-cover w-5xl md:w-[20%]"
                  />

                  <div className="p-1 m-0 flex flex-row md:flex-col justify-between align-middle">
                    <div>
                      <div className="md:w-30">
                        <h3 className="mb-2 text-md text-wrap  font-semibold text-[#525252]">
                          Reasons why you need Jesus
                        </h3>
                      </div>
                      <p className="mb-3 text-sm leading-relaxed text-gray-700">
                        Audio: <span className="font-bold">3:45</span>
                      </p>
                      <p className="mb-3 text-sm leading-relaxed text-gray-700">
                        Uploaded by{" "}
                        <span className="text-[#ab8134]">Admin</span>
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2.5">
                      <button className="inline-flex text-xs font-semibold text-white bg-[#1E2F5C] p-2 rounded-lg">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="inline-flex text-xs font-semibold text-white bg-[#1E2F5C] p-2 rounded-lg">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="inline-flex text-xs font-semibold text-white bg-[#1E2F5C] p-2 rounded-lg">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-center align-middle my-2 px-10 md:px-40 ">
                <div className="rounded-lg flex flex-col md:flex-row justify-center align-middle">
                  <div className="flex flex-row md:flex-col justify-items-center align-middle p-3.5 items-start-safe md:items-end-safe text-center">
                    <h1 className="text-[20px] font-bold text-[#262626]">12</h1>
                    <p className="text-sm leading-relaxed text-[#525252]">
                      July, 2029
                    </p>
                  </div>

                  <Image
                    src="/images/pastor.jpg"
                    alt="ministry image"
                    width={70}
                    height={70}
                    className="mb-4 rounded-lg object-cover w-5xl md:w-[20%]"
                  />

                  <div className="p-1 m-0 flex flex-row md:flex-col justify-between align-middle">
                    <div>
                      <div className="md:w-30">
                        <h3 className="mb-2 text-md text-wrap font-semibold text-[#525252]">
                          Now i am free
                        </h3>
                      </div>

                      <p className="mb-3 text-sm leading-relaxed text-gray-700">
                        Audio: <span className="font-bold">3:45</span>
                      </p>
                      <p className="mb-3 text-sm leading-relaxed text-gray-700">
                        Uploaded by{" "}
                        <span className="text-[#ab8134]">Admin</span>
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2.5">
                      <button className="inline-flex text-xs font-semibold text-white bg-[#1E2F5C] p-2 rounded-lg">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="inline-flex text-xs font-semibold text-white bg-[#1E2F5C] p-2 rounded-lg">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="inline-flex text-xs font-semibold text-white bg-[#1E2F5C] p-2 rounded-lg">
                        <Play className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pb-24 px-20 mt-20">
          <div className="mx-auto max-w-7xl px-">
            {/* Section title */}
            <h1 className="mb-8 text-lg text-center font-semibold text-[#1E2F5C]">
              From Gallery
            </h1>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Left – Tall Image */}
              <div className="md:row-span-2">
                <Image
                  src="/images/children.png"
                  alt="Gallery image"
                  width={70}
                  height={70}
                  className="mb-4 rounded-xl w-full h-full object-cover"
                />
              </div>

              {/* Middle Top */}
              <div>
                <Image
                  src="/images/pastor.jpg"
                  alt="Gallery image"
                  width={70}
                  height={70}
                  className="mb-4 rounded-xl w-full h-full object-cover"
                />
              </div>

              {/* Right Top */}
              <div>
                <Image
                  src="/images/outreach.png"
                  alt="Gallery image"
                  width={70}
                  height={70}
                  className="mb-4 rounded-xl w-full h-full object-cover"
                />
              </div>

              {/* Middle Bottom */}
              <div>
                <Image
                  src="/images/media.png"
                  alt="Gallery image"
                  width={70}
                  height={70}
                  className="mb-4 rounded-xl w-full h-full object-cover"
                />
              </div>

              {/* Right Bottom */}
              <div>
                <Image
                  src="/images/children.png"
                  alt="Gallery image"
                  width={70}
                  height={70}
                  className="mb-4 rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className=" w-full relative flex justify-center align-middle p-10 md:px-40 md:py-30 bg-[url('/images/outreach.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#1E2F5C]/90 z-10" />
          <div className="relative z-20 border-2 border-white rounded-lg p-5 md:p-60">
            <div className="flex flex-col justify-center align-middle text-center">
              <p className="mb-3 text-sm md:text-[20px] leading-relaxed text-white">Join Us</p>
              <h1 className="mb-2 text-[40px] text-wrap font-semibold text-white">
                Become a part of our community
              </h1>
              <p className="mb-3 text-sm leading-relaxed text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut elit tellus, luctus Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus
              </p>
              <div className="w-full">
                <button className="mt-8 rounded-md bg-white px-8 py-4 w-90px text-sm  text-[#171717]">
                  <span className="flex justify-between align-middle">
                    <MapPin className="w-4 h-4" /> &nbsp; Join us today
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <FAQ />
        <Footer/>
      </main>
    </div>
  );
}

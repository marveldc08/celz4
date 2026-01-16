'use client'
import EventCountdown from "@/components/CountDownTimer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from '@/components/Header'
import Jumbotron from '@/components/Jumbotron'
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation"
import React, {  useState } from "react";

const Page = () => {
  const router = useRouter();
    const eventdate = new Date();
    eventdate.setDate(eventdate.getDate() + 100); 

    const tabs = [
      "All Events",
      "Upcoming This Week",
      "Past Events",
      "Outreach",
      "Revival",
      "Youth&kids",
    ];

    const [activeTab, setActiveTab] = useState("All Events");

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const hours = ["12am", "1am", "2am"];
      const [date] = useState("November 20, 2025");

  return (
    <div>
      <Header isStatic={true} />
      <Jumbotron
        heading="Events"
        subtext="All Events"
        hasBtn={true}
        btnText="Locate the church "
        bgImage={`/images/children.png`}
      />
      <EventCountdown targetDate={eventdate.toISOString()} />
      <main>
        <section className="w-full ">
          <div className="bg-[#F7F8FC] min-h-screen px-6 lg:px-16 py-10">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              All Event
            </h1>

            <div className="flex flex-wrap gap-8 md:border-b md:border-b-gray-100 mb-10 text-sm text-gray-500">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 transition cursor-pointer ${
                    activeTab === tab
                      ? "text-gray-900 border-b-6 border-[#C6A94D] font-medium"
                      : "hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {activeTab === "All Events" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-44 bg-gray-200 flex items-center justify-center">
                        <div className="absolute top-0 left-0 w-full h-full">
                          <Image
                            src="/images/media.png"
                            alt="Event Image"
                            className="object-cover w-full h-full"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="absolute top-0 right-0 w-[30%] h-full bg-[#202C5E] hover:bg-[#171717] flex flex-col justify-center items-center text-white px-4 py-2 rounded-t-r-lg text-md text-center">
                          <p className="font-semibold">20th</p>
                          <p>Nov</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-xs text-gray-500 mb-1">
                          8:00 AM - 9:00 PM
                        </p>

                        <h3 className="font-semibold text-gray-900 mb-2">
                          Minister’s Conference
                        </h3>

                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                          Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut elit tellus, luctus lorem ipsum
                          dolor...
                        </p>

                        <button className="w-full cursor-pointer  bg-[#202C5E] hover:bg-[#233066] text-white py-4 rounded-md text-sm" onClick={() => router.push('/events/details') }>
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center mt-12 w-full ">
                  <button className="bg-[#202C5E] cursor-pointer text-white px-12 py-3 rounded-md text-sm">
                    See More
                  </button>
                </div>
              </div>
            )}
            {activeTab === "Upcoming This Week" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-44 bg-gray-200 flex items-center justify-center">
                        <div className="absolute top-0 left-0 w-full h-full">
                          <Image
                            src="/images/media.png"
                            alt="Event Image"
                            className="object-cover w-full h-full"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="absolute top-0 right-0 w-[30%] h-full bg-[#202C5E] hover:bg-[#171717] flex flex-col justify-center items-center text-white px-4 py-2 rounded-t-r-lg text-md text-center">
                          <p className="font-semibold">20th</p>
                          <p>Nov</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-xs text-gray-500 mb-1">
                          8:00 AM - 9:00 PM
                        </p>

                        <h3 className="font-semibold text-gray-900 mb-2">
                          Minister’s Conference
                        </h3>

                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                          Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut elit tellus, luctus lorem ipsum
                          dolor...
                        </p>

                        <button className="w-full cursor-pointer  bg-[#202C5E] hover:bg-[#233066] text-white py-4 rounded-md text-sm">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center mt-12 w-full ">
                  <button className="bg-[#202C5E] cursor-pointer text-white px-12 py-3 rounded-md text-sm">
                    See More
                  </button>
                </div>
              </div>
            )}
            {activeTab === "Past Events" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-44 bg-gray-200 flex items-center justify-center">
                        <div className="absolute top-0 left-0 w-full h-full">
                          <Image
                            src="/images/media.png"
                            alt="Event Image"
                            className="object-cover w-full h-full"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="absolute top-0 right-0 w-[30%] h-full bg-[#202C5E] hover:bg-[#171717] flex flex-col justify-center items-center text-white px-4 py-2 rounded-t-r-lg text-md text-center">
                          <p className="font-semibold">20th</p>
                          <p>Nov</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-xs text-gray-500 mb-1">
                          8:00 AM - 9:00 PM
                        </p>

                        <h3 className="font-semibold text-gray-900 mb-2">
                          Minister’s Conference
                        </h3>

                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                          Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut elit tellus, luctus lorem ipsum
                          dolor...
                        </p>

                        <button className="w-full cursor-pointer  bg-[#202C5E] hover:bg-[#233066] text-white py-4 rounded-md text-sm">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center mt-12 w-full ">
                  <button className="bg-[#202C5E] cursor-pointer text-white px-12 py-3 rounded-md text-sm">
                    See More
                  </button>
                </div>
              </div>
            )}
            {activeTab === "Outreach" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-44 bg-gray-200 flex items-center justify-center">
                        <div className="absolute top-0 left-0 w-full h-full">
                          <Image
                            src="/images/children.png"
                            alt="Event Image"
                            className="object-cover w-full h-full"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="absolute top-0 right-0 w-[30%] h-full bg-[#202C5E] hover:bg-[#171717] flex flex-col justify-center items-center text-white px-4 py-2 rounded-t-r-lg text-md text-center">
                          <p className="font-semibold">20th</p>
                          <p>Nov</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-xs text-gray-500 mb-1">
                          8:00 AM - 9:00 PM
                        </p>

                        <h3 className="font-semibold text-gray-900 mb-2">
                          Minister’s Conference
                        </h3>

                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                          Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut elit tellus, luctus lorem ipsum
                          dolor...
                        </p>

                        <button className="w-full cursor-pointer  bg-[#202C5E] hover:bg-[#233066] text-white py-4 rounded-md text-sm">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center mt-12 w-full ">
                  <button className="bg-[#202C5E] cursor-pointer text-white px-12 py-3 rounded-md text-sm">
                    See More
                  </button>
                </div>
              </div>
            )}
            {activeTab === "Revival" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-44 bg-gray-200 flex items-center justify-center">
                        <div className="absolute top-0 left-0 w-full h-full">
                          <Image
                            src="/images/outreach.png"
                            alt="Event Image"
                            className="object-cover w-full h-full"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="absolute top-0 right-0 w-[30%] h-full bg-[#202C5E] hover:bg-[#171717] flex flex-col justify-center items-center text-white px-4 py-2 rounded-t-r-lg text-md text-center">
                          <p className="font-semibold">20th</p>
                          <p>Nov</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-xs text-gray-500 mb-1">
                          8:00 AM - 9:00 PM
                        </p>

                        <h3 className="font-semibold text-gray-900 mb-2">
                          Minister’s Conference
                        </h3>

                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                          Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut elit tellus, luctus lorem ipsum
                          dolor...
                        </p>

                        <button className="w-full cursor-pointer  bg-[#202C5E] hover:bg-[#233066] text-white py-4 rounded-md text-sm">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center mt-12 w-full ">
                  <button className="bg-[#202C5E] cursor-pointer text-white px-12 py-3 rounded-md text-sm">
                    See More
                  </button>
                </div>
              </div>
            )}
            {activeTab === "Youth&kids" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative h-44 bg-gray-200 flex items-center justify-center">
                        <div className="absolute top-0 left-0 w-full h-full">
                          <Image
                            src="/images/media.png"
                            alt="Event Image"
                            className="object-cover w-full h-full"
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className="absolute top-0 right-0 w-[30%] h-full bg-[#202C5E] hover:bg-[#171717] flex flex-col justify-center items-center text-white px-4 py-2 rounded-t-r-lg text-md text-center">
                          <p className="font-semibold">20th</p>
                          <p>Nov</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-xs text-gray-500 mb-1">
                          8:00 AM - 9:00 PM
                        </p>

                        <h3 className="font-semibold text-gray-900 mb-2">
                          Minister’s Conference
                        </h3>

                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                          Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Ut elit tellus, luctus lorem ipsum
                          dolor...
                        </p>

                        <button className="w-full cursor-pointer  bg-[#202C5E] hover:bg-[#233066] text-white py-4 rounded-md text-sm">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center mt-12 w-full ">
                  <button className="bg-[#202C5E] cursor-pointer text-white px-12 py-3 rounded-md text-sm">
                    See More
                  </button>
                </div>
              </div>
            )}

            {/* CALENDAR */}
            <div className="mt-20">
              <section className="">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="relative px-5 rounded-md bg-white">
                    <input
                      placeholder="Search Event"
                      className="bg-white rounded-md px-5 py-4 text-xs"
                    />
                    <Search className="absolute top-4 left-0 ml-2 w-4 h-4 text-[#525252]" />
                  </div>

                  <div className="flex gap-3">
                    <select
                      name="day"
                      id="day"
                      className="bg-white px-4 py-4 rounded-md text-[#525252] text-xs cursor-pointer"
                    >
                      <option value="">Filter by Day </option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                    </select>

                    <select
                      name="month"
                      id="month"
                      className="bg-white px-4 py-4 rounded-md text-[#525252] text-xs cursor-pointer"
                    >
                      <option value="">Filter by Month </option>
                      <option value="january">January</option>
                      <option value="february">February</option>
                      <option value="march">March</option>
                      <option value="april">April</option>
                      <option value="may">May</option>
                      <option value="june">June</option>
                      <option value="july">July</option>
                      <option value="august">August</option>
                      <option value="september">September</option>
                      <option value="october">October</option>
                      <option value="november">November</option>
                      <option value="december">December</option>
                    </select>
                  </div>
                </div>

                <div className="w-full flex flex-inline justify-center items-center gap-0 mb-6">
                  <p className="text-sm text-gray-500 mb-4 w-[50%] md:w-[10%] p-0">
                    {date}
                  </p>
                  <span className="border-b border-b-gray-200 w-full"></span>
                </div>

                {/* Calendar Grid */}
                <div className=" bg-white rounded-xl p-6 shadow-sm overflow-x-auto">
                  <div className="py-2">
                    <h4 className="text-md font-semibold">Events</h4>
                  </div>
                  <div className="grid grid-cols-8 min-w-225">
                    {/* Header row */}

                    <div />
                    {days.map((day) => (
                      <div
                        key={day}
                        className="text-xs text-gray-500 text-center pb-2 border-b border-x border-gray-200"
                      >
                        <p>{day}</p>
                        <p className="font-medium">20/11</p>
                      </div>
                    ))}

                    {/* Time rows */}

                    {hours.map((hour, i) => (
                      <div key={hour} >
                        <div
                       
                          className="text-xs text-gray-400 py-6 border-r border-y border-gray-200 "
                        >
                          {hour}
                        </div>

                        {days.map((_, d) => (
                          <div
                            key={d}
                            className="border-r border-b border-gray-200 relative h-20"
                          >
                            {i === 0 && d === 0 && (
                              <CalendarEvent
                                title="Pastor’s birthday"
                                color="bg-[#1E2A5A]"
                              />
                            )}

                            {i === 1 && d === 1 && (
                              <CalendarEvent
                                title="Media Conference"
                                color="bg-[#FFF4CC]"
                                dark
                              />
                            )}

                            {i === 1 && d === 4 && (
                              <CalendarEvent
                                title="Pastor’s conference"
                                color="bg-[#FFE8E8]"
                                dark
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Faq />
      <Footer />
    </div>
  );
}

interface Props {
  title: string;
  color: string;
  dark?: boolean;
}

export function CalendarEvent({ title, color, dark }: Props) {
  return (
    <div
      className={`absolute inset-x-2 top-2 rounded-full px-3 py-1 text-xs flex items-center gap-2 ${color} ${
        dark ? "text-gray-800" : "text-white"
      }`}
    >
      <span className="w-4 h-4 rounded-full bg-white/60" />
      {title}
    </div>
  );
}

export default Page




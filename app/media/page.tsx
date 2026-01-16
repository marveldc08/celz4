"use client"
import EventCountdown from "@/components/CountDownTimer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from '@/components/Header'
import Jumbotron from '@/components/Jumbotron'
import { Grid } from "lucide-react";
import Image from "next/image";
import React, { useState } from 'react'

const TABS = [
  "Cell meetings",
  "Outreach",
  "Youth celebration",
  "Conferences",
  "Motherless visits",
  "Mothers celebration ",
  "Fathers celebration ",
];

const Page = () => {
    const [activeTab, setActiveTab] = useState(0);
       const eventdate = new Date();
       eventdate.setDate(eventdate.getDate() + 100); 
    
  return (
    <div>
      <Header isStatic={true} />
      <Jumbotron
        heading="Media"
        subtext="All Videos/Photos"
        hasBtn={false}
        bgImage={`url([/images/children.png])`}
      />
      <EventCountdown targetDate={eventdate.toISOString()} />
      <main>
        <section className="w-full">
          <div className="bg-[#F7F8FC] min-h-screen px-2 md:px-21 py-10">
            <section className="w-full py-20 px-2 md:px-10">
              <div className="flex flex-col md:flex-row justify-between align-middle ">
                <div>
                  <h4 className="text-2xl font-bold">All Categories</h4>
                </div>
                <div className="flex flex-col md:flex-row  mt-4 md:mt-0 gap-4">
                  <select
                    name="series"
                    id=""
                    className="bg-white rounded-lg p-3 w-full md:p-1 md:w-40 text-sm"
                  >
                    <option value="">Filter by Photo</option>
                    <option value="Manifesting the Truth">
                      Manifesting the Truth
                    </option>
                    <option value="Manifestion of the sons of God">
                      Manifestion of the sons of God
                    </option>
                    <option value="Manifestation of Christ">
                      Manifestation of Christ
                    </option>
                    <option value="The Power of Your Testimony">
                      The Power of Your Testimony
                    </option>
                  </select>
                  <select
                    name="series"
                    id=""
                    className="bg-white rounded-lg p-3 w-full md:p-1 md:w-40 text-sm "
                  >
                    <option value="">Filter by Year</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                  </select>

                  <button className="text-[#000000]">
                    {" "}
                    <Grid />{" "}
                  </button>
                </div>
              </div>
              <div className="mt-10 w-full">
                <div className="mb-6 flex flex-wrap gap-3 items-center md:justify-center ">
                  {TABS.map((tab, index) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(index)}
                      className={`rounded-lg p-4 text-xs transition ${
                        activeTab === index
                          ? "bg-[#202C5E] text-white"
                          : "bg-[#F5F5F5] text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-center p-5 md:p-0">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-4 w-full md:w-[50%] md:h-[50%] ">
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
                    <div className="md:col-span-2">
                      <Image
                        src="/images/outreach.png"
                        alt="Gallery image"
                        width={70}
                        height={70}
                        className="mb-4 rounded-xl w-full h-full object-cover"
                      />
                    </div>

                    {/* Middle Middle */}
                    <div className="md:col-span-2">
                      <Image
                        src="/images/media.png"
                        alt="Gallery image"
                        width={70}
                        height={70}
                        className="mb-4 rounded-xl w-full h-full object-cover"
                      />
                    </div>

                    {/* Right Middle */}
                    <div>
                      <Image
                        src="/images/children.png"
                        alt="Gallery image"
                        width={70}
                        height={70}
                        className="mb-4 rounded-xl w-full h-full object-cover"
                      />
                    </div>
                    {/* Left Bottom */}
                    <div className="md:col-span-2">
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
              </div>
            </section>
          </div>
        </section>
      </main>
      <Faq />
      <Footer />
    </div>
  );
}

export default Page

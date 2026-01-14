'use client'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Jumbotron from '@/components/Jumbotron'
import { ChevronLeft, ChevronRight, ChevronDown,  Download, Play, Share2 } from 'lucide-react';
import { useRouter } from "next/navigation";
import Image from 'next/image';
import React, { useState } from 'react'

const Page = () => {
     const router = useRouter();
    
      const navigate = (path: string) => {
        router.push(path);
      };
      
  return (
    <div>
      <Header isStatic={true} />
      <Jumbotron
        heading="The Name of Jesus"
        subtext="Series: Summer with Christ | Preacher: Eze | Date: Jan 2, 2024"
        hasBtn={false}
        bgImage={`/images/pastor.jpg`}
      />
      <main>
        <section className="relative w-full py-7  px-5 md:px-10 bg-[#4C567E] bg-[url('/images/live-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#4C567E]/90 z-10" />
          <Image
            src="/images/book.png"
            width={100}
            height={100}
            alt="bookmark image"
            className="absolute z-10 top-0 right-0"
          />
          <div className="relative z-10 flex flex-col md:flex-row justify-between align-middle p-3 gap-10 text-white">
            <div className="p-6 w-full md:w-[50%] align-middle flex flex-col justify-center md:justify-start">
              <p className="text-sm text-[#F5F5F5]">Latest Sermon</p>
              <h4 className="text-md text-2xl font-bold md:text-3xl mb-3">
                The name of Jesus
              </h4>
              <p>
                <span className="text-[#C3A253]">Published</span> - January 2,
                2024
              </p>
            </div>
            <div className="py-15 w-full md:w-[50%] align-middle flex justify-center md:justify-end">
              <button className="flex flex-inline rounded-md border border-white hover:bg-[#ffffff] px-8 py-4 w-90px text-sm cursor-pointer hover:text-[#171717] text-white">
                Listen Now <ChevronRight />{" "}
              </button>
            </div>
          </div>
        </section>
        <section className="w-full py-20 px-5 md:px-50">
          <div>
            <button
              className="cursor-pointer flex flex-inline items-center mb-10 font-semibold"
              onClick={() => router.back()}
            >
              <ChevronLeft /> Go Back
            </button>
          </div>
          <SermonSection />
        </section>
        <section className="w-full py-1 px-5 md:px-50">
          <div className='mb-10'>
            <h3 className='font-semibold'>Similar Sermons</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="rounded-lg overflow-hidden">
                <Image
                  src="/images/pastor.jpg"
                  width={140}
                  height={100}
                  alt="sermon image"
                  className="w-full h-auto"
                />
                <div className="p-5 bg-[#FAFAFA]">
                  <div className="flex flex-row justify-between align-middle">
                    <h4 className="text-lg font-bold mb-2">
                      The name of Jesus
                    </h4>
                    <p className="text-sm mb-2 text-[#334797]">20:35</p>
                  </div>
                  <p className="text-sm mb-4 text-[#262626]">
                    Preacher: <span className="font-semibold">Adewole Eze</span>
                  </p>
                  <p className="text-sm mb-4 text-[#262626]">
                    Published by <span className="text-[#C3A253]">Admin</span>
                  </p>
                  <p className="text-sm mb-4 text-[#262626]">
                    Series:{" "}
                    <span className="text-[#202C5E] font-semibold">
                      Summer Sermons
                    </span>
                  </p>
                  <div className="flex flex-row justify-between align-middle p-3">
                    <button className="cursor-pointer">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="cursor-pointer">
                      <Download className="w-5 h-5" />
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => navigate("/sermons/sermon")}
                    >
                      <Play className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 w-full align-middle flex justify-center">
            <button className="flex flex-inline rounded-md bg-[#334797] px-15 md:px-20 py-4 w-90px text-sm cursor-pointer text-white">
              See More
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const TABS = ["Sermon Notes", "Transcript"];

function SermonSection() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('notes');

  return (
    <section className="w-full px-3 py-4">
      {/* Video Wrapper */}
      <div className="relative overflow-hidden rounded-xl flex flex-col items-center justify-center">
        <div className="relative w-full md:w-225 aspect-video">
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
      <div className="w-full flex flex-col md:flex-row justify-between align-middle py-5 md:py-10">
        <div className="w-full md:w-[50%] flex justify-start align-middle ">
          <div className="flex flex-row gap-2 align-middle items-center justify-center ">
            <Image
              src="/images/series.png"
              width={200}
              height={200}
              alt={"bible image"}
              className="rounded-lg w-10 h-10 md:w-20 md:h-20"
            />
            <div className="text-center py-5">
              <p className="text-sm text-[#262626]">
                Series -{" "}
                <span className="font-semibold text-[#525252]">
                  {" "}
                  Living the word daily
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex justify-end align-middle ">
          <div className="py-4 w-full align-middle flex justify-center md:justify-end gap-5">
            <button className="flex flex-inline gap-2 rounded-md bg-[#BCBFCE33] border border-[#202C5E] px-3 md:px-5 py-4 text-sm cursor-pointer text-[#202C5E]">
              Download Audio <Download className="w-4 h-4" />
            </button>
            <button className="flex flex-inline rounded-md bg-[#202C5E] px-5 py-4 text-sm cursor-pointer text-[#F5F5F5]">
              Download Notes <ChevronDown />
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}

      <div className="mb-6 flex flex-wrap gap-3 items-center border-b border-b-gray-300 mt-6">
        {TABS.map((tab, index) => (
          <button
            key={tab}
            onClick={() => (
              setActiveTabIndex(index),
              setActiveTab(tab.toLowerCase().replace(" ", ""))
            )}
            className={`px-4 py-2 text-md transition cursor-pointer ${
              activeTabIndex === index
                ? "font-bold text-md border-b-6 border-b-amber-300"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/*Sermon Notes*/}
      {activeTab === "sermonnotes" && (
        <div className="mt-8">
          <div className="w-full md:w-[50%] flex justify-start align-middle ">
            <div className="flex flex-row gap-2 align-middle items-center justify-center ">
              <Image
                src="/images/sermons.jpg"
                width={200}
                height={200}
                alt={"bible image"}
                className="rounded-lg w-10 h-10 md:w-20 md:h-20"
              />
              <div className="text-left py-5">
                <p className="font-bold text-black">
                  Topic : The Name of Jesus |
                  <span className="text-md text-[#202C5E]">
                    {" "}
                    Mattew 12:30-46
                  </span>
                </p>
                <p className="text-xs text-[#404040]">
                  Preacher : Pastor Dipo Fisho
                </p>
              </div>
            </div>
          </div>
          <div>
            <ul className="list-disc list-inside marker:text-[25px] marker:text-[#202C5E] space-y-2 text-sm text-[#525252] mt-5">
              <li>
                We work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work We
                work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work
              </li>
              <li>
                We work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work We
                work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work
              </li>
              <li>
                We work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work We
                work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work
              </li>
              <li>
                We work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work We
                work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work
              </li>
            </ul>
            <div className="bg-[#BCBFCE33] border-l-6 border-l-[#C3A253] p-7 mt-8">
              <h4 className="text-md font-bold text-[#262626]">
                Mattew 12:30-46 Verse 30 :
              </h4>
              <p className="text-sm text-[#525252] mt-5">
                We work by spirit spirt me We work by spirit spirt meWe work
                by spirit spirt meWe work by spirit spirt meWe work by We work
                We work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work
              </p>
            </div>
            <ul className="list-disc list-inside marker:text-[25px] marker:text-[#202C5E] space-y-2 text-sm text-[#525252] mt-5">
              <li>
                We work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work We
                work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work
              </li>
              <li>
                We work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work We
                work by spirit spirt me We work by spirit spirt meWe work by
                spirit spirt meWe work by spirit spirt meWe work by We work
              </li>
             
            </ul>
          </div>
        </div>
      )}
      {/* Transcript */}
      {activeTab === "transcript" && (
        <div className="mt-8 rounded-lg border border-gray-100 bg-gray-50/15 ">
          <div className="mb-4 flex items-center justify-between border border-gray-100 p-6">
            <h3 className="text-sm font-semibold">Transcript</h3>

            <button className="flex flex-row rounded-md bg-[#334797] cursor-pointer px-4 py-3 text-xs text-white hover:bg-[#374da3]">
              Export as Pdf &nbsp; <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-5 text-sm text-gray-700 p-6">
            <TranscriptItem
              time="03:40"
              speaker="Pastor James"
              text="great is the lord great is the lordgreat is the lordgreat is the lordgreat is the lordgreat is the lord
great is the lord great is the lordgreat is the lordgreat is the lordgreat is the lordgreat is the lord great is the lord
great is the lord great is the lordgreat is the lordgreat is the lordgreat is the lordgreat is the lord great is the lord
great is the lord great is the s the lordgreat is the lordgreat is the lordgreat is the lord great is the lord
great is the lord great is the lordgreat is the lordgreat is the lordgreat  is the lord great is the lord"
            />

            <TranscriptItem
              time="04:91"
              speaker="Praise Team"
              text="Speaking in other tongues...
            great is the lord great is the lord
            great is the lord great is the lord"
            />

            <TranscriptItem
              time="03:40"
              speaker="Pastor James"
              text="great is the lord great is the lordgreat is the lordgreat is the lordgreat is the lordgreat is the lord
great is the lord great is the lordgreat is the lordgreat is the lordgreat is the lordgreat is the lord great is the lord
great is the lord great is the lordgreat is the lordgreat is the lordgreat is the lordgreat is the lord great is the lord
great is the lord great is the s the lordgreat is the lordgreat is the lordgreat is the lord great is the lord
great is the lord great is the lordgreat is the lordgreat is the lordgreat  is the lord great is the lord"
            />

            <TranscriptItem
              time="03:40"
              speaker="Pastor James"
              text="great is the lord great is the lordgreat is the lordgreat is the lordgreat is the lordgreat is the lord
great is the lord great is the lordgreat is the lordgreat is the lordgreat is the lordgreat is the lord great is the lord
great is the lord great is the lordgreat is the lordgreat is the lordgreat is the lordgreat is the lord great is the lord
great is the lord great is the s the lordgreat is the lordgreat is the lordgreat is the lord great is the lord
great is the lord great is the lordgreat is the lordgreat is the lordgreat  is the lord great is the lord"
            />

            <TranscriptItem
              time="10:40"
              speaker="Pastor James"
              text="Great is the Lord, great is the Lord..."
            />
          </div>
        </div>
      )}
    </section>
  );
}

function TranscriptItem({
  time,
  speaker,
  text,
}: {
  time: string;
  speaker: string;
  text: string;
}) {
  return (
    <div>
      <p className="mb-1 text-md font-semibold text-[#202C5E]">[{time}]</p>
      <p className="font-semibold text-black">{speaker}:</p>
      <p className="leading-relaxed text-[#717171]">{text}</p>
    </div>
  );
}

export default Page

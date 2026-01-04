"use client"
import Header from '@/components/Header'
import CountDoownTimer  from "@/components/CountDownTimer"
import React from 'react'
import { useState } from "react";
import { Download, Play, Share2 } from "lucide-react";
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';

const TABS = [
  "Zonal healing stream",
  "Global Crossover service",
  "Youth alive",
  "Zonal end of the year meeting",
  "Mothers celebration",
  "Fathers celebration",
];

const page = () => {
    const date = new Date()
  return (
    <div>
      <Header isStatic={true} />
      <main className="flex flex-col items-center justify-center">
        <section className="relative h-[30vh] md:h-[50vh] w-full bg-[url('/images/children.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className=" px-6 text-white">
              <h1 className="text-2xl font-bold md:text-5xl">
                Join the Service
              </h1>
              <p className="mt-4 text-sm md:text-base">Watch live programs</p>
              
            </div>
          </div>
        </section>
        <CountDoownTimer targetDate={date.toISOString()} />
        <WatchLiveSection/>
        <FAQ/>
        <Footer/>
      </main>
    </div>
  );
}



function WatchLiveSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-[#dfe3f2]/16 px-6 md:px-64 py-14">
      <div className="flex items-center justify-start px-15">
        <h2 className="mb-4 text-lg font-semibold">Watch all program live</h2>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-3 items-center justify-center">
        {TABS.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveTab(index)}
            className={`rounded-lg px-4 py-2 text-xs transition ${
              activeTab === index
                ? "bg-red-600 text-white"
                : "bg-[#F5F5F5] text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Video Wrapper */}
      <div className="relative overflow-hidden rounded-xl flex flex-col items-center justify-center">
        <div className="relative w-full md:w-[900px] aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/u3i_4ZlFcdY`}
            title="YouTube video player"
            className="absolute inset-0 h-full w-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Watch Live ribbon */}
        <div className="absolute right-30 top-0 rounded-bl-xl bg-red-600 px-4 py-2 text-xs font-semibold text-white">
          Watch Live
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center justify-between md:px-15 text-sm">
        <div className="flex items-center justify-between gap-6">
          <h1 className="font-bold text-md border-b-6 border-b-amber-300">
            Transcript
          </h1>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <Share2 className="h-4 w-4" />
            Invite others
          </button>
        </div>

        <button className="font-semibold text-xs md:text-medium text-blue-600 hover:underline">
          Make a prayer Request →
        </button>
      </div>

      {/* Transcript */}
      <div className="mt-8 rounded-lg border-2 border-dashed bg-gray-50/15 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Transcript</h3>

          <button className="flex flex-row rounded-md bg-[#334797] px-4 py-3 text-xs text-white hover:bg-[#374da3]">
            Export as Pdf &nbsp; <Download className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-5 text-sm text-gray-700">
          <TranscriptItem
            time="03:40"
            speaker="Pastor James"
            text="Great is the Lord, great is the Lord, great is the Lord..."
          />

          <TranscriptItem
            time="04:91"
            speaker="Praise Team"
            text="Speaking in other tongues..."
          />

          <TranscriptItem
            time="10:40"
            speaker="Pastor James"
            text="Great is the Lord, great is the Lord..."
          />
        </div>
      </div>
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
      <p className="mb-1 text-xs text-gray-500">[{time}]</p>
      <p className="font-semibold">{speaker}:</p>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}


export default page

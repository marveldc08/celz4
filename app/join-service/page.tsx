"use client"
import Header from '@/components/Header'
import CountDownTimer  from "@/components/CountDownTimer"
import React from 'react'
import { useState } from "react";
import { Download, Play, Share2 } from "lucide-react";
import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';
import Jumbotron from '@/components/Jumbotron';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TABS = [
  "Zonal healing stream",
  "Global Crossover service",
  "Youth alive",
  "Zonal end of the year meeting",
  "Mothers celebration",
  "Fathers celebration",
];

const page = () => {
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 100)
  return (
    <div>
      <Header isStatic={true} />
      <Jumbotron
        heading="Join the Service"
        subtext="Watch live programs"
        hasBtn={false}
        bgImage="/images/children.png"
      />
      <main className="flex flex-col items-center justify-center">
        {/* <section className="relative h-[30vh] md:h-[50vh] w-full bg-[url('/images/children.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-10 flex h-full items-center justify-center text-center">
            <div className=" px-6 text-white">
              <h1 className="text-2xl font-bold md:text-5xl">
                Join the Service
              </h1>
              <p className="mt-4 text-sm md:text-base">Watch live programs</p>
            </div>
          </div>
        </section> */}
        <CountDownTimer targetDate={eventDate.toISOString()} />
        <WatchLiveSection />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}



function WatchLiveSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const handleSubmit = () => {
    setAutoPlay(true);

  }

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
        <div className="relative w-full md:w-225 aspect-video">
          {autoPlay ? null : (
            <div className=" absolute z-10 inset-0 flex items-center justify-center rounded-lg bg-black/30">
              <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <button className="w-18 h-15 text-white cursor-pointer rounded-xl bg-red-600 flex items-center justify-center">
                      {" "}
                      <Play />{" "}
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-106.25 p-0">
                    <DialogHeader className="bg-[#FAFAFA] p-4 rounded-t-lg ">
                      <DialogTitle className="flex flex-inline justify-center items-center font-medium">
                        {" "}
                        <div className="rounded-full w-4 h-4 bg-red-600 mr-2"></div>{" "}
                        Join live Service
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 p-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input
                          id="name-1"
                          name="name"
                          defaultValue="Pedro Duarte"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="email">email</Label>
                        <Input
                          id="email"
                          name="email"
                          defaultValue="exampleson@gmail.com"
                          className="outline-none"
                        />
                      </div>
                    </div>
                    <DialogFooter className="p-6">
                      <DialogClose asChild>
                        <Button variant="outline" className="cursor-pointer">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button
                        type="submit"
                        className="bg-[#202C5E] cursor-pointer"
                        onClick={() => handleSubmit()}
                      >
                        Submit
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </div>
          )}

          <iframe
            src={`https://www.youtube.com/embed/u3i_4ZlFcdY?autoplay=${
              autoPlay ? 1 : 0
            }`}
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

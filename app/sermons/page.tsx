import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Jumbotron from '@/components/Jumbotron'
import { ChevronRight, Download, Play, Share2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    <div>
      <Header isStatic={true} />
      <Jumbotron
        heading="Sermons"
        subtext="All Sermons"
        hasBtn={false}
        bgImage={`url([/images/sermons.jpg])`}
      />
      <main>
        <section className="w-full py-20 px-5 md:px-10">
          <div className="flex flex-col md:flex-row justify-between align-middle p-3">
            <div>
              <input
                type="search"
                placeholder="Search Sermon / Devotionals"
                className="bg-[#F5F5F5] rounded-lg p-3 w-full md:w-96"
              />
            </div>
            <div className="flex flex-col md:flex-row  mt-4 md:mt-0 gap-4">
              <select
                name="series"
                id=""
                className="bg-[#F5F5F5] rounded-lg p-3 w-full md:p-1 md:w-40 text-sm"
              >
                <option value="">Filter by series</option>
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
                className="bg-[#F5F5F5] rounded-lg p-3 w-full md:p-1 md:w-40 text-sm "
              >
                <option value="">Filter by Preacher</option>
                <option value="Pastor Diop Fisho">Pastor Diop Fisho</option>
                <option value="Rev, Dr. Chris Oyakhilome">
                  Rev, Dr. Chris Oyakhilome Dsc, Dsc, DD
                </option>
                <option value="Pastor Diop Fisho">Pastor Diop Fisho</option>
                <option value="Rev, Dr. Chris Oyakhilome">
                  Rev, Dr. Chris Oyakhilome Dsc, Dsc, DD
                </option>
              </select>
              <select
                name="series"
                id=""
                className="bg-[#F5F5F5] rounded-lg p-3 w-full md:p-1 md:w-40 text-sm "
              >
                <option value="">Filter By Audio</option>
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
            </div>
          </div>
        </section>
        <section className="relative w-full py-7 md:py-20 px-5 md:px-10 bg-[#4C567E] bg-[url('/images/live-bg.jpg')] bg-cover bg-center">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
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
                    <button className="cursor-pointer">
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

export default page

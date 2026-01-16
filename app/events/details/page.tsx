"use client";
import EventCountdown from "@/components/CountDownTimer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Jumbotron from "@/components/Jumbotron";
import { Calendar, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
    const eventdate = new Date();
    eventdate.setDate(eventdate.getDate() + 100); 

  return (
    <div>
      <Header isStatic={true} />
      <Jumbotron
        heading="Events"
        subtext="All Events"
        hasBtn={true}
        btnText="Locate the church "
        bgImage={`url([/images/children.png])`}
      />
      <EventCountdown targetDate={eventdate.toISOString()} />
      <main>
        <section className="w-full">
          <div className="bg-[#F7F8FC] min-h-screen px-6 md:px-21 py-10">
            <div>
              <button
                className="cursor-pointer flex flex-inline items-center mb-10 font-semibold"
                onClick={() => router.back()}
              >
                <ChevronLeft /> Go Back
              </button>
            </div>
            <div className="px-6 md:px-25">
              <div className="flex flex-col md:flex-row md:justify-between md:text-left text-center gap-4 align-middle mb-3">
                <div>
                  <h2 className="text-2xl font-bold">Minister’s conference</h2>
                  <p className="text-xs text-[#525252] mt-2">
                    November 20, 2025 -{" "}
                    <span className="text-[#202C5E] text-sm font-semibold">
                      {" "}
                      9:00AM - 12:00PM
                    </span>{" "}
                  </p>
                </div>
                <button className="flex flex-inline justify-center items-center gap-2 cursor-pointer bg-[#202C5E] text-white px-2 md:px-4 py-2 rounded-md">
                  Add to my Calendar <Calendar />
                </button>
              </div>
              <div>
                <div className="flex items-center justify-center mt-6">
                  <Image
                    src="/images/pastor.jpg"
                    width={1000}
                    height={200}
                    alt="pastor"
                  />
                </div>
                <p className="text-sm text-[#525252] mt-3 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur .
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur
                  .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur .
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur .
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur
                  .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur
                  .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur .
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur
                  .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur .
                </p>
                <div className="py-4">
                  <div className="py-2">
                    <h3 className="text-sm text-[#171717] font-semibold">
                      Venue
                    </h3>
                    <p className="text-xs text-[#525252] mt-2">
                      Church Auditorium -{" "}
                      <Link
                        href="https://maps.app.goo.gl/CfRBsmDf1H1SGQQQ7"
                        className="text-[#202C5E] text-sm font-semibold"
                      >
                        {" "}
                        Locate the Venue on the Map
                      </Link>{" "}
                    </p>
                  </div>
                  <div className="py-2">
                    <h3 className="text-sm text-[#171717] font-semibold">
                      Reach out Via Phone
                    </h3>
                    <p className="text-xs text-[#525252] mt-2">
                      <Link href="tel:23412231234"> 23412231234</Link>{" "}
                    </p>
                  </div>
                  <div className="py-2">
                    <h3 className="text-sm text-[#171717] font-semibold">
                      Reach out Via Email
                    </h3>
                    <p className="text-xs text-[#525252] mt-2">
                      <Link href="mailto:Churchadmin@gmail.com">
                        {" "}
                        Churchadmin@gmail.com
                      </Link>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Faq />
      <Footer />
    </div>
  );
};

export default Page;

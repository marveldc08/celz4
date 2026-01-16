"use client";
import EventCountdown from "@/components/CountDownTimer";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Jumbotron from "@/components/Jumbotron";
import { ChevronLeft } from "lucide-react";
import router from "next/router";
import React from "react";

const page = () => {
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
          <div className="bg-[#F7F8FC] min-h-screen px-6 lg:px-16 py-10">
            <div>
              <button
                className="cursor-pointer flex flex-inline items-center mb-10 font-semibold"
                onClick={() => router.back()}
              >
                <ChevronLeft /> Go Back
              </button>
            </div>
          </div>
        </section>
      </main>
      <Faq />
      <Footer />
    </div>
  );
};

export default page;

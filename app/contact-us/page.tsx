import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Jumbotron from "@/components/Jumbotron";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Header isStatic={true} />
      <div className=" relative bg-linear-160 from-[#ffffff] to-[#e2e6f5] flex flex-col md:flex-row items-center justify-between md:px-35">
        <div className=" absolute top-4 right-10 md:right-110 flex items-end justify-end  w-full py-1">
          <Image
            src={"/images/squares.png"}
            width={50}
            height={50}
            alt="squares"
          />
        </div>
        <div className=" md:px-15">
          <div
            className={`w-full h-[50vh] flex flex-col justify-center items-center md:text-left text-center p-4 `}
          >
            <p className="text-[#A3A3A3] mt-4 text-sm md:text-base">
              We have you in mind!
            </p>
            <h1 className="text-[#262626] text-3xl font-bold md:text-5xl">
              Contact Us
            </h1>
            <div className="flex items-start justify-start  w-full py-3 -ml-40">
              <Image
                src={"/images/squares.png"}
                width={50}
                height={50}
                alt="squares"
              />
            </div>
          </div>
        </div>

        <div className=" p-9"></div>
        <div className=" absolute bottom-4 right-10 md:right-20 flex items-end justify-end w-full py-1">
          <Image
            src={"/images/squares.png"}
            width={50}
            height={50}
            alt="squares"
          />
        </div>
      </div>
      <main>
        <section className="w-full flex flex-row justify-center align-middle p-6">
          <div className=" w-full md:w-[25%] p-10 bg-[#202C5E] text-center rounded-lg justify-center md:-mt-70 md:ml-160 z-10">
            <div className="text-left">
              <h2 className="text-white text-md text-1xl font-bold md:text-2xl mb-3">
                Send us a message
              </h2>
              <p className="text-[#E5E5E5] text-sm">
                If you need further help, please send a quick message to us via
                this simple form
              </p>
              <form>
                <div className="grid gap-4 py-6">
                  <div className="grid gap-3 text-white py-2">
                    <Label htmlFor="name-1">Fullname</Label>
                    <input
                      id="name-1"
                      name="name"
                      placeholder="Enter your full name"
                      className="border-b-2 border-l-0 border-r-0 border-t-0 border-b-white rounded-lg px-3"
                    />
                  </div>
                  <div className="grid gap-3 text-white py-2">
                    <Label htmlFor="email">Email</Label>
                    <input
                      id="email"
                      name="email"
                      placeholder="Enter your full email"
                      className="border-b-2 border-l-0 border-r-0 border-t-0 border-b-white rounded-lg px-3"
                    />
                  </div>
                  <div className="grid gap-3 text-white py-2">
                    <Label htmlFor="text">Additional message</Label>
                    <textarea
                      id="text"
                      name="text"
                      placeholder="Enter additional message here"
                      className="border-b-2 border-l-0 border-r-0 border-t-0 border-b-white rounded-lg h-20 px-3"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-white cursor-pointer rounded-lg py-3 px-9"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className=" w-full relative flex justify-center align-middle p-10 md:px-40 md:py-30 bg-[url('/images/children.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#1E2F5C]/90 z-10" />
          <div className="relative z-20 border-2 border-white rounded-lg p-5 md:p-10 w-full">
            <div className="flex flex-col justify-center align-middle items-center text-center">
              <h1 className="mb-2 text-[30px] md:text-[40px] text-wrap font-semibold text-white">
                We love to hear from you
              </h1>

              <div className="w-full text-white flex flex-col md:flex-row justify-center align-middle py-6 gap-10 mt-6">
                <div>
                  <button className="mt-8 rounded-full border border-white p-4 cursor-pointer text-sm  text-white">
                    <Phone className="w-5 h-5" />
                  </button>
                  <p className="text-sm">Call us a calll</p>
                  <h4 className="font-semibold text-md">
                    <a href="tel:++23333336577849">+23333336577849</a>
                  </h4>
                </div>
                <div>
                  <button className="mt-8 rounded-full border border-white p-4 cursor-pointer text-sm  text-white">
                    <Mail className="w-5 h-5" />
                  </button>
                  <p className="text-sm">Send us a message</p>
                  <h4 className="font-semibold">celz4official@gmail.com</h4>
                </div>
                <div>
                  <button className="mt-8 rounded-full border border-white p-4 cursor-pointer text-sm  text-white">
                    <MapPin className="w-5 h-5" />
                  </button>
                  <p className="text-sm">Location</p>
                  <h4 className="font-semibold">
                    24 olaniyi street, Abule egba lagos, nigeria
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
};

export default page;

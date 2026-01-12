import FAQ from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Jumbotron from '@/components/Jumbotron'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header isStatic={true} />
      <Jumbotron
        heading="About Us"
        subtext="We are doers of the word of God. A holy Nation!"
        hasBtn={true}
        btnText="Locate the church "
        bgImage={`/images/pastor.jpg`}
      />
      <main>
        <section className="p-4">
          <div className="p-4 md:p-36 flex flex-col md:flex-row justify-between align-middle ">
            <div className="w-full md:w-[50%] h-full ">
              <Image
                className="rounded-lg"
                src="/images/pastor.jpg"
                width={500}
                height={500}
                alt="about image"
              />
            </div>
            <div className="w-full md:w-[50%] h-full p-2.5">
              <p className="text-[#525252] mb-5 text-sm">Our Senior Pastor</p>
              <h2 className="text-[#262626] text-md text-2xl font-bold md:text-3xl mb-3">
                Pastor Dipo Fisho
              </h2>
              <p className="text-[#525252] text-sm">
                Free downloads available for food for your soul Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut elit tellus, luctus. Free downloads
                available for food for your soul Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus, luctus Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus
              </p>
              <div className="flex felx-row justify-between md:justify-start align-middle">
                <button className="m-4 w-10 h-10 flex items-center justify-center rounded-full text-xs font-semibold border border-[#1E2F5C] text-[#1E2F5C] cursor-pointer">
                  <ChevronLeft style={{ width: "30px", height: "30px" }} />
                </button>
                <button className="m-4 w-10 h-10 flex items-center justify-center rounded-full text-xs font-semibold border border-[#1E2F5C] text-[#1E2F5C] cursor-pointer">
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full">
          <div className="flex flex-col-reverse md:flex-row justify-between align-middle">
            <div className="w-full md:w-[50%] px-5 md:px-40 py-20 ">
              <div>
                <h1 className="text-[#262626] text-md text-2xl font-bold md:text-3xl mb-3">
                  Mission
                </h1>
                <h4 className="font-bold text-[#525252] mb-2">
                  We are doers of the word
                </h4>
                <p className="text-[#525252] text-sm">
                  Free downloads available for food for your soul Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Ut elit tellus, luctus Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut elit tellus, luctus. Free
                  downloads available for food for your soul Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Ut elit tellus, luctus{" "}
                </p>
                <button className="mt-8 rounded-md bg-[#202C5E] px-8 py-4 w-90px text-sm cursor-pointer text-white">
                  <span className="flex justify-between align-middle">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full h-full md:w-[50%] ">
              <Image
                src={"/images/outreach.png"}
                width={1000}
                height={1000}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between align-middle">
            <div className="w-full h-full md:w-[50%] ">
              <Image
                src={"/images/outreach.png"}
                width={1000}
                height={1000}
                alt=""
              />
            </div>
            <div className="w-full md:w-[50%] px-5 md:px-40 py-20 bg-[#202C5E] ">
              <div>
                <h1 className="text-white text-md text-2xl font-bold md:text-3xl mb-3">
                  Mission
                </h1>
                <h4 className="font-bold text-white mb-2">
                  We are doers of the word
                </h4>
                <p className="text-white text-sm">
                  Free downloads available for food for your soul Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                  luctus Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Ut elit tellus, luctus Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut elit tellus, luctus. Free
                  downloads available for food for your soul Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Ut elit tellus, luctus{" "}
                </p>
                <button className="mt-8 rounded-md bg-white px-8 py-4 w-90px text-sm cursor-pointer text-[#202C5E]">
                  <span className="flex justify-between align-middle">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-linear-160 from-[#ffffff] to-[#d6dbef] p-5">
          <div className="w-full text-center p-10 mb-5">
            <p>Our Focus</p>
            <h2 className="text-[#262626] text-md text-2xl font-bold md:text-3xl mb-3">
              What we stand for
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8 align-middle md:px-50 w-full">
            <div className="bg-white rounded-lg p-5 ">
              <div>
                <Image
                  src="/images/about-win.png"
                  width={1000}
                  height={1000}
                  alt="image"
                />
              </div>
              <div className="py-6">
                <h3 className="text-[#334797] text-md text-2xl font-bold mb-3">
                  WIN
                </h3>
                <p className="text-sm text-[#525252] mb-3">
                  We are fueled by a burning passion for the lost and a mandate
                  to manifest the liquid love of Christ to our world as given to
                  us by our man of God, Rev Dr Chris Oyakhilome DSc.DSc.DD. 
                </p>
                <p className="text-sm text-[#525252] mb-3">
                  Through the massive distribution of our messenger angel, the
                  Rhapsody of Realities, and strategic soul-winning exploits, we
                  compel them to come in.
                </p>
                <p className="text-sm text-[#525252] mb-3">
                  For us, we are laborers in this glorious dispensation,
                  ensuring that the knowledge of the glory of God covers the
                  earth as the waters cover the sea. <b>Habakkuk 2:14</b>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 ">
              <div>
                <Image
                  src="/images/about-build.png"
                  width={1000}
                  height={1000}
                  alt="image"
                />
              </div>
              <div className="py-6">
                <h3 className="text-[#334797] text-md text-2xl font-bold mb-3">
                  WIN
                </h3>
                <p className="text-sm text-[#525252] mb-3">
                  We are fueled by a burning passion for the lost and a mandate
                  to manifest the liquid love of Christ to our world as given to
                  us by our man of God, Rev Dr Chris Oyakhilome DSc.DSc.DD. 
                </p>
                <p className="text-sm text-[#525252] mb-3">
                  Through the massive distribution of our messenger angel, the
                  Rhapsody of Realities, and strategic soul-winning exploits, we
                  compel them to come in.
                </p>
                <p className="text-sm text-[#525252] mb-3">
                  For us, we are laborers in this glorious dispensation,
                  ensuring that the knowledge of the glory of God covers the
                  earth as the waters cover the sea. <b>Habakkuk 2:14</b>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 ">
              <div>
                <Image
                  src="/images/about-send.png"
                  width={1000}
                  height={1000}
                  alt="image"
                />
              </div>
              <div className="py-6">
                <h3 className="text-[#334797] text-md text-2xl font-bold mb-3">
                  WIN
                </h3>
                <p className="text-sm text-[#525252] mb-3">
                  We are fueled by a burning passion for the lost and a mandate
                  to manifest the liquid love of Christ to our world as given to
                  us by our man of God, Rev Dr Chris Oyakhilome DSc.DSc.DD. 
                </p>
                <p className="text-sm text-[#525252] mb-3">
                  Through the massive distribution of our messenger angel, the
                  Rhapsody of Realities, and strategic soul-winning exploits, we
                  compel them to come in.
                </p>
                <p className="text-sm text-[#525252] mb-3">
                  For us, we are laborers in this glorious dispensation,
                  ensuring that the knowledge of the glory of God covers the
                  earth as the waters cover the sea. <b>Habakkuk 2:14</b>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
}

export default page

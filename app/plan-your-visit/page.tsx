import FAQ from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Jumbotron from '@/components/Jumbotron'
import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    <div>
      <Header isStatic={true} />
      <Jumbotron
        heading="Plan your visit"
        subtext="We are a holy Nation!"
        hasBtn={true}
        btnText="Locate the church "
        bgImage={`/images/children.png`}
      />
      <main>
        <section className="w-full flex flex-col md:flex-row gap-0 justify-between align-middle">
          <div className=" w-full md:w-[25%] px-10 py-20 md:py-30">
            <div className="w-full flex items-center justify-center">
              <Image
                src="/images/come-vector.png"
                width={25}
                height={25}
                alt="heart image"
              />
            </div>
            <div className="text-center">
              <h2 className="text-[#000000] text-md text-1xl font-bold md:text-2xl mb-3">
                Come
              </h2>
              <p className="text-[#525252] text-sm">
                luctus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus Lorem
              </p>
            </div>
          </div>
          <div className=" w-full md:w-[25%] px-10 py-20 md:py-30 bg-[#334797] text-center justify-center">
            <div className="w-full flex items-center justify-center">
              <Image
                src="/images/grow-vector.png"
                width={25}
                height={25}
                alt="heart image"
              />
            </div>
            <div className="text-center">
              <h2 className="text-white text-md text-1xl font-bold md:text-2xl mb-3">
                Grow
              </h2>
              <p className="text-[#E5E5E5] text-sm">
                luctus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus Lorem
              </p>
            </div>
          </div>
          <div className=" w-full md:w-[25%] px-10 py-20 md:py-30 bg-[#131A38] text-center justify-center">
            <div className="w-full flex items-center justify-center">
              <Image
                src="/images/serve-vector.png"
                width={25}
                height={25}
                alt="heart image"
              />
            </div>
            <div className="text-center">
              <h2 className="text-white text-md text-1xl font-bold md:text-2xl mb-3">
                Serve
              </h2>
              <p className="text-[#E5E5E5] text-sm">
                luctus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus Lorem
              </p>
            </div>
          </div>
          <div className=" w-full md:w-[25%] px-10 py-20 md:py-30 bg-[#4C567E] text-center justify-center">
            <div className="w-full flex items-center justify-center">
              <Image
                src="/images/shear-vector.png"
                width={25}
                height={25}
                alt="heart image"
              />
            </div>
            <div className="text-center">
              <h2 className="text-white text-md text-1xl font-bold md:text-2xl mb-3">
                Shear
              </h2>
              <p className="text-[#E5E5E5] text-sm">
                luctus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus Lorem
              </p>
            </div>
          </div>
        </section>
        <section className="w-full p-8 md:px-50 md:py-30 bg-linear-160 from-[#ffffff] to-[#e2e6f5]">
          <div className="flex flex-col md:flex-row justify-between align-middle p-5">
            <div className="flex flex-col mb-7">
              <div className="mb-3">
                <h1 className="text-[#262626] text-md text-2xl font-bold md:text-3xl mb-3">
                  Locate us on the Map
                </h1>
                <p className="text-sm text-[#717171]">
                  If you need further help, please send a quick message to us
                  via this simple form
                </p>
              </div>
              <form action="">
                <div className="mb-3 flex flex-col">
                  <label htmlFor="fullname" className="text-[#262626]">
                    Full Name
                  </label>
                  <input
                    placeholder="Your fullname"
                    className="bg-white rounded-lg p-2 h-14"
                  />
                </div>
                <div className="mb-2 flex flex-col">
                  <label htmlFor="phone number" className="text-[#262626]">
                    Phone number
                  </label>
                  <input
                    type="phone"
                    placeholder="+2340900000"
                    className="bg-white rounded-lg p-2 h-14"
                  />
                </div>

                <div className="mb-3 flex flex-col">
                  <label htmlFor="date" className="text-[#262626]">
                    Preferred date
                  </label>
                  <input
                    type="date"
                    placeholder="select date"
                    className="bg-white rounded-lg p-2 h-14"
                  />
                </div>
                <div className="mb-3 flex flex-col">
                  <label htmlFor="date" className="text-[#262626]">
                    Service
                  </label>
                  <select
                    name="service"
                    id=""
                    className="bg-white rounded-lg p-2 h-14"
                  >
                    <option value="">select service</option>
                    <option value="Sunday service">Sunday service</option>
                    <option value="Midweek service">Midweek service</option>
                    <option value="Communion service">Communion service</option>
                    <option value="FirstFruit service">
                      FirstFruit service
                    </option>
                    <option value="Thanksgiving service">
                      Thanksgiving service
                    </option>
                  </select>
                </div>

                <div className="mb-3 flex flex-col">
                  <label htmlFor="date" className="text-[#262626]">
                    Additional message
                  </label>
                  <textarea
                    placeholder="Drop your messages here."
                    className="bg-white rounded-lg p-2 h-14"
                  />
                </div>
                <button className="rounded-md bg-[#202C5E] px-8 py-4 w-90px text-sm cursor-pointer text-white">
                  <span className="flex justify-between align-middle">
                    Submit Form
                  </span>
                </button>
              </form>
            </div>

            <div className="flex md:flex md:flex-row">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.1986799762674!2d3.2976113679993815!3d6.6544529267425565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d965ce25197%3A0x6562d7f3f7eab925!2sJendol%20Super%20stores%2C%20U-turn%20Abule-Egba%20Lagos!5e0!3m2!1sen!2sng!4v1767473560274!5m2!1sen!2sng"
                width="200"
                height="150"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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

import FAQ from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Jumbotron from '@/components/Jumbotron'
import Image from "next/image"
import React from 'react'

const page = () => {
  return (
    <div>
      <Header isStatic={true} />
      <div className="bg-linear-160 from-[#ffffff] to-[#e2e6f5]">
        <Jumbotron bgImage={`/images/faq.png`} hasBtn={false} />
      </div>
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
      </main>
      <FAQ />
      <Footer />
    </div>
  );
}

export default page

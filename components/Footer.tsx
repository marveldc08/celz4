import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full">
      <section className="relative z-10 -mb-24">
        <div className="mx-auto max-w-5xl px-9">
          <div className="flex flex-col md:flex-row justify-between align-middle bg-[#33499F] px-10 py-10 text-white">
            <div>
              <h3 className="text-sm font-semibold">
                Subscribe to Our Newsletter
              </h3>
              <p className="mt-1 text-xs text-white/80">
                Get Access to our timely Sermons and Programs, we will not spam
                your mail.
              </p>
            </div>

            <form className="mt-6 flex flex-row max-w-md">
              <input
                type="email"
                required
                placeholder="Enter Email"
                className="w-full rounded-l-md px-4 py-2 text-xs text-black bg-white"
              />
              <button className="rounded-r-md bg-[#1E2F5C] px-5 py-2 text-xs font-semibold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-[#1E2F5C] pt-40 pb-10 text-white w-full">
        <div className="mx-auto  px-6">
          <div className="grid gap-12 grid-cols-3 md:grid-cols-4 ">
            {/* Logo */}
            <div>
              <h4 className="mb-3 text-md font-semibold">CELZ4</h4>
              <p className="text-sm leading-relaxed text-white/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis amet.
              </p>
            </div>

            {/* Home */}
            <div>
              <h5 className="mb-3 text-md font-semibold">Home</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Media */}
            <div>
              <h5 className="mb-3 text-md font-semibold">Media</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Privacy Policy</li>
                <li>Developer Policy</li>
                <li>Cookies</li>
              </ul>
            </div>

            {/* Locate */}
            <div className="flex flex-col justify-center align-middle">
              <div>
                <h5 className="mb-3 text-md font-semibold">Locate us</h5>
                <p className="mb-3 text-sm text-white/70">
                    20 Akinode street, opposite cinema, Lagos Nigeria
                </p>
              </div>
              <div className="flex-none md:flex md:flex-row">
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

            {/* <section className="w-50 md:w-full flex flex-row justify-self-start-safe align-middle border border-amber-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397.1986799762674!2d3.2976113679993815!3d6.6544529267425565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d965ce25197%3A0x6562d7f3f7eab925!2sJendol%20Super%20stores%2C%20U-turn%20Abule-Egba%20Lagos!5e0!3m2!1sen!2sng!4v1767473560274!5m2!1sen!2sng"
                width="200"
                height="150"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section> */}
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-6 md:flex-row">
            <div className="flex gap-4 text-[#1E2F5C]">
              <div className="rounded-full bg-white p-1">
                <Facebook size={20} />
              </div>
              <div className="rounded-full bg-white p-1">
                <Twitter size={20} />
              </div>
              <div className="rounded-full bg-white p-1">
                <Instagram size={20} />
              </div>
              <div className="rounded-full bg-white p-1">
                <Linkedin size={20} />
              </div>
            </div>

            <p className="text-sm text-white/60">
              Copyright ©2025. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

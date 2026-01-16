
"use client";
import { useState } from "react"
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header({ isScrolled, isStatic }: { isScrolled?: boolean; isStatic?:boolean }) {
  const [isMobile, setIsMobile] = useState(false);
  const pathName = usePathname()

  return (
    <header
      className={`absolute top-0 z-50 w-full ${
        isScrolled && "bg-[#FAFAFA] text-[#171717] sticky top-0"
      }  ${isStatic && "bg-[#FAFAFA] text-[#171717] sticky top-0"}`}
    >
      {!isScrolled && !isStatic && (
        <div
          className={`mx-auto flex text-white max-w-7xl items-center justify-between px-6 py-5`}
        >
          <span className={`text-lg font-semibold text-white`}>CELZ4</span>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className={`text-sm font-medium "text-white/90 hover:text-white border-b-white  hover:border-b-2 ${
                pathName == "/" && "border-b-3"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-sm font-medium "text-white/90 hover:text-white border-b-white hover:border-b-2 `}
            >
              About Us
            </Link>
            <Link
              href="/plan-your-visit"
              className={`text-sm font-medium "text-white/90 hover:text-white border-b-white hover:border-b-2 `}
            >
              {" "}
              Plan your visit
            </Link>
            <Link
              href="/faq"
              className={`text-sm font-medium "text-white/90 hover:text-white border-b-white hover:border-b-2 `}
            >
              FAQs
            </Link>
            <Link
              href="/sermons"
              className={`text-sm font-medium "text-white/90 hover:text-white border-b-white hover:border-b-2 `}
            >
              {" "}
              Sermons
            </Link>
            <Link
              href="/events"
              className={`text-sm font-medium "text-white/90 hover:text-white border-b-white hover:border-b-2 `}
            >
              Events
            </Link>
            <Link
              href="#"
              className={`text-sm font-medium "text-white/90 hover:text-white border-b-white hover:border-b-2 `}
            >
              Media
            </Link>
            <Link
              href="/join-service"
              className={`text-sm font-medium "text-white/90 hover:text-white border-b-white hover:border-b-2 ${
                pathName == "/join-service" && "border-b-3"
              } `}
            >
              Join the service
            </Link>
            <Link
              href="#"
              className={`text-sm font-medium "text-white/90 hover:text-white border-b-white hover:border-b-2 `}
            >
              Contact Us
            </Link>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setIsMobile(true)}
            className={`flex md:hidden ${
              isScrolled ? "text-[#171717]" : "text-white"
            }`}
          >
            <Menu />
          </button>
          <button
            aria-label="Open menu"
            className={`hidden md:block rounded-md px-4 py-1 text-white ${
              isScrolled && "bg-[#202C5E]"
            }`}
          >
            Login
          </button>
        </div>
      )}
      {isScrolled && (
        <div
          className={`mx-auto flex  ${
            isScrolled && "text-[#171717]"
          } max-w-7xl items-center justify-between px-6 py-5`}
        >
          <span
            className={`text-lg font-semibold  ${
              isScrolled ? "text-[#171717]" : "text-white"
            }`}
          >
            CELZ4
          </span>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className={`text-sm font-medium  ${
                isScrolled
                  ? "text-[#262626] hover:text-[#262626] border-b-[#262626]"
                  : "text-white/90 hover:text-white border-b-white"
              }  hover:border-b-2 ${pathName == "/" && "border-b-3"}`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-sm font-medium  ${
                isScrolled
                  ? "text-[#262626] hover:text-[#262626] border-b-[#262626]"
                  : "text-white/90 hover:text-white border-b-white"
              }  hover:border-b-2 ${pathName == "/about-us" && "border-b-3"}`}
            >
              About Us
            </Link>
            <Link
              href="/plan-your-visit"
              className={`text-sm font-medium  ${
                isScrolled
                  ? "text-[#262626] hover:text-[#262626] border-b-[#262626]"
                  : "text-white/90 hover:text-white border-b-white"
              }  hover:border-b-2 ${
                pathName == "/plan-your-visit" && "border-b-3"
              }`}
            >
              {" "}
              Plan your visit
            </Link>
            <Link
              href="/faq"
              className={`text-sm font-medium  ${
                isScrolled
                  ? "text-[#262626] hover:text-[#262626] border-b-[#262626]"
                  : "text-white/90 hover:text-white border-b-white"
              }  hover:border-b-2 ${pathName == "/faq" && "border-b-3"}`}
            >
              FAQs
            </Link>
            <Link
              href="/sermons"
              className={`text-sm font-medium  ${
                isScrolled
                  ? "text-[#262626] hover:text-[#262626] border-b-[#262626]"
                  : "text-white/90 hover:text-white border-b-white"
              }  hover:border-b-2   ${pathName == "/sermons" && "border-b-3"}`}
            >
              {" "}
              Sermons
            </Link>
            <Link
              href="/events"
              className={`text-sm font-medium  ${
                isScrolled
                  ? "text-[#262626] hover:text-[#262626] border-b-[#262626]"
                  : "text-white/90 hover:text-white border-b-white"
              }  hover:border-b-2 ${pathName == "/events" && "border-b-3"} `}
            >
              Events
            </Link>
            <Link
              href="/media"
              className={`text-sm font-medium  ${
                isScrolled
                  ? "text-[#262626] hover:text-[#262626] border-b-[#262626]"
                  : "text-white/90 hover:text-white border-b-white"
              }  hover:border-b-2 ${pathName == "/media" && "border-b-3"} `}
            >
              Media
            </Link>
            <Link
              href="/join-service"
              className={`text-sm font-medium  ${
                isScrolled
                  ? "text-[#262626] hover:text-[#262626] border-b-[#262626]"
                  : "text-white/90 hover:text-white border-b-white"
              }  hover:border-b-2 ${pathName == "/join-service" && "border-b-3"}`}
            >
              Join the service
            </Link>
            <Link
              href="/contact-us"
              className={`text-sm font-medium  ${
                isScrolled
                  ? "text-[#262626] hover:text-[#262626] border-b-[#262626]"
                  : "text-white/90 hover:text-white border-b-white"
              }  hover:border-b-2 ${
                pathName == "/contact-us" && "border-b-3"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setIsMobile(true)}
            className={`flex md:hidden ${
              isScrolled ? "text-[#171717]" : "text-white"
            }`}
          >
            <Menu />
          </button>
          <button
            aria-label="Open menu"
            className={`hidden md:block rounded-md px-4 py-1 text-white ${
              isScrolled && "bg-[#202C5E]"
            }`}
          >
            Login
          </button>
        </div>
      )}

      {isStatic && (
        <div
          className={`mx-auto flex ${isMobile ? "hidden" : "flex"} ${
            isStatic && "text-[#171717]"
          } max-w-7xl items-center justify-between px-6 py-5`}
        >
          <span
            className={`text-lg font-semibold  ${isStatic && "text-[#171717]"}`}
          >
            CELZ4
          </span>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className={`text-sm font-medium  ${
                isStatic &&
                "text-[#262626] hover:text-[#262626] border-b-[#262626]"
              }  hover:border-b-2 ${pathName == "/" && "border-b-3"}`}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`text-sm font-medium  ${
                isStatic &&
                "text-[#262626] hover:text-[#262626] border-b-[#262626]"
              } hover:border-b-2 ${pathName == "/about-us" && "border-b-3"}`}
            >
              About Us
            </Link>
            <Link
              href="/plan-your-visit"
              className={`text-sm font-medium ${
                isStatic &&
                "text-[#262626] hover:text-[#262626] border-b-[#262626]"
              }  hover:border-b-2 ${
                pathName == "/plan-your-visit" && "border-b-3"
              }`}
            >
              {" "}
              Plan your visit
            </Link>
            <Link
              href="/faq"
              className={`text-sm font-medium  ${
                isStatic &&
                "text-[#262626] hover:text-[#262626] border-b-[#262626]"
              }  hover:border-b-2 ${pathName == "/faq" && "border-b-3"}`}
            >
              FAQs
            </Link>
            <Link
              href="/sermons"
              className={`text-sm font-medium ${
                isStatic &&
                "text-[#262626] hover:text-[#262626] border-b-[#262626]"
              } hover:border-b-2 ${pathName == "/sermons" && "border-b-3"}`}
            >
              {" "}
              Sermons
            </Link>
            <Link
              href="/events"
              className={`text-sm font-medium ${
                isStatic &&
                "text-[#262626] hover:text-[#262626] border-b-[#262626]"
              } hover:border-b-2 ${pathName == "/events" && "border-b-3"} `}
            >
              Events
            </Link>
            <Link
              href="/media"
              className={`text-sm font-medium ${
                isStatic &&
                "text-[#262626] hover:text-[#262626] border-b-[#262626]"
              } hover:border-b-2 ${pathName == "/media" && "border-b-3"}`}
            >
              Media
            </Link>
            <Link
              href="/join-service"
              className={`text-sm font-medium  ${
                isStatic &&
                "text-[#262626] hover:text-[#262626] border-b-[#262626]"
              } hover:border-b-2 ${
                pathName == "/join-service" && "border-b-3"
              }`}
            >
              Join the service
            </Link>
            <Link
              href="/contact-us"
              className={`text-sm font-medium  ${
                isStatic &&
                "text-[#262626] hover:text-[#262626] border-b-[#262626]"
              } hover:border-b-2 ${pathName == "/contact-us" && "border-b-3"}`}
            >
              Contact Us
            </Link>
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setIsMobile(true)}
            className={`flex md:hidden ${isStatic && "text-[#262626]"}`}
          >
            <Menu />
          </button>
          <button
            aria-label="Open menu"
            className={`hidden md:block rounded-md px-4 py-1 text-white ${
              isStatic && "bg-[#202C5E]"
            }`}
          >
            Login
          </button>
        </div>
      )}
      <div
        className={`flex flex-col md:hidden ${
          isMobile ? "flex" : "hidden"
        } py-1.5 text-[#171717] z-50 w-full bg-white`}
      >
        <div className="flex justify-end-safe align-middle w-full px-1.5">
          <X onClick={() => setIsMobile(false)} />
        </div>
        <ul className="text-center px-3">
          <li
            className={` rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white ${
              pathName == "/" && "bg-[#171717] text-white"
            }`}
            onClick={() => setIsMobile(false)}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white"
            onClick={() => setIsMobile(false)}
          >
            <Link href="/about-us">About Us</Link>
          </li>
          <li
            className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white"
            onClick={() => setIsMobile(false)}
          >
            <Link href="/plan-your-visit">Plan your visit</Link>
          </li>
          <li
            className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white"
            onClick={() => setIsMobile(false)}
          >
            <Link href="/faq">FAQs</Link>
          </li>
          <li
            className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white"
            onClick={() => setIsMobile(false)}
          >
            <Link href="/sermons">Sermons</Link>
          </li>
          <li
            className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white"
            onClick={() => setIsMobile(false)}
          >
            <Link href="/events">Events</Link>
          </li>
          <li
            className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white"
            onClick={() => setIsMobile(false)}
          >
            <Link href="#">Media</Link>
          </li>
          <li
            className={` rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white ${
              pathName == "/join-service" && "bg-[#171717] text-white"
            }`}
            onClick={() => setIsMobile(false)}
          >
            <Link href="/join-service">Join the service</Link>
          </li>
          <li
            className=" rounded-md border-b border-b-gray-300 py-1 text-sm font-medium active:bg-[#171717] active:text-white"
            onClick={() => setIsMobile(false)}
          >
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}



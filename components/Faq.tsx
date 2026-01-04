"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How many services do you offer at the church?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis amet, consectetur adipiscing eliLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt, maiores, neque ipsum soluta iure libero laboriosam laudantium tempore harum ipsam odio cumque. A neque architecto pariatur nulla culpa excepturit.",
  },
  {
    question: "Are youths involved?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur aLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt, maiores, neque ipsum soluta iure libero laboriosam laudantium tempore harum ipsam odio cumque. A neque architecto pariatur nulla culpa excepturidipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis amet.",
  },
  {
    question: "What services do you offer at the church?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt, maiores, neque ipsum soluta iure libero laboriosam laudantium tempore harum ipsam odio cumque. A neque architecto pariatur nulla culpa excepturi? ",
  },
  {
    question: "What services do you offer at the church?",
    answer:
      "Lorem ipsum doLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt, maiores, neque ipsum soluta iure libero laboriosam laudantium tempore harum ipsam odio cumque. A neque architecto pariatur nulla culpa excepturilor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "What services do you offer at the church?",
    answer:
      "Lorem ipsum dolLorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sunt, maiores, neque ipsum soluta iure libero laboriosam laudantium tempore harum ipsam odio cumque. A neque architecto pariatur nulla culpa excepturior sit amet, consectetur adipiscing elit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase text-[#262626]">FAQs</p>
          <h2 className="mt-2 text-xl font-semibold text-[#262626]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis amet, consectetur.
          </p>

          <button className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#262626]">
            View More
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#262626]">
              →
            </span>
          </button>
        </div>

        {/* Right Accordion */}
        <div className="divide-y">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={index}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="w-full py-5 text-left"
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-md font-semibold text-[#262626]">
                    {faq.question}
                  </h3>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>

                {isOpen && (
                  <p className="mt-3 max-w-xl text-xs leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

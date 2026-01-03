"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

type Props = {
  targetDate: string;
};

export default function EventStrip({ targetDate }: Props) {
  const [time, setTime] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const t = setInterval(
      () => setTime(getTimeLeft(targetDate)),
      1000
    );
    return () => clearInterval(t);
  }, [targetDate]);

  return (
    <section className="w-full bg-[#1E2F5C] py-5 px-6">
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between px-9 py-6 text-white">
        {/* Left */}
        <div className="items-left md:items-center mb-4">
          <div className="mb-1 flex items-center gap-2 text-[14px] uppercase tracking-wide text-[#C3A253]">
      
            <Image src={"/images/bar-icon.png"} width={10} height={10} alt="about image"/>
            Online
          </div>
          <p className="text-md font-semibold">Healing Stream</p>
          <p className="text-sm text-white/60">
            December 16, 2025 @ 5:00 am
          </p>
           <button className="mt-4 flex items-center gap-2 text-sm font-medium text-white cursor-pointer">
              Join Now
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white">
                <ChevronRight />
              </span>
            </button>
        </div>

        {/* Right Countdown */}
        <div className="flex flex-row items-center gap-8 px-5" role="timer" aria-live="polite">
          <Time value={time.days} label="Days" />
          <Time value={time.hours} label="Hours" />
          <Time value={time.minutes} label="Minutes" />
          <Time value={time.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}

function Time({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="text-xl font-bold tabular-nums p-1.5">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] font-semibold uppercase text-[#C3A253] bg-gray-500/50 p-2">
        {label}
      </div>
    </div>
  );
}

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();

  if (diff <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

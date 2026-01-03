"use client";

import { useEffect, useState } from "react";

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
    <section className="w-full bg-[#1E2F5C]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-9 py-6 text-white">
        {/* Left */}
        <div>
          <div className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-wide text-white/70">
            <span className="h-3 w-[2px] bg-white" />
            Online
          </div>
          <p className="text-sm font-semibold">Healing Stream</p>
          <p className="text-xs text-white/60">
            December 16, 2025 @ 5:00 am
          </p>
        </div>

        {/* Right Countdown */}
        <div
          className="flex items-center gap-8"
          role="timer"
          aria-live="polite"
        >
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
      <div className="text-lg font-bold tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] uppercase text-white/60">
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

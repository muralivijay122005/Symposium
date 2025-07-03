import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-02T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderUnit = (label, value) => (
    <div className="flex flex-col items-center gap-2">
      <div className="px-4 py-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-2xl sm:text-3xl font-bold text-indigo-300 shadow-inner min-w-[50px] text-center">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs text-indigo-200 tracking-wide">{label}</div>
    </div>
  );

  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-4 sm:gap-6 items-center">
        {renderUnit("DAYS", timeLeft.days)}
        <span className="text-white font-bold text-xl sm:text-2xl">:</span>
        {renderUnit("HRS", timeLeft.hours)}
        <span className="text-white font-bold text-xl sm:text-2xl">:</span>
        {renderUnit("MIN", timeLeft.minutes)}
        <span className="text-white font-bold text-xl sm:text-2xl">:</span>
        {renderUnit("SEC", timeLeft.seconds)}
      </div>
    </div>
  );
};

export default Countdown;

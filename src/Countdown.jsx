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

  return (
    <div className=" font-modern text-white text-center space-y-4 w-full max-w-md mx-auto z-10 relative">
      
      <div className="text-xl grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <div className="text-xl">{timeLeft.days}</div>
          <div className="text-xs">Days</div>
        </div>
        <div>
          <div className="text-xl">{timeLeft.hours}</div>
          <div className="text-xs">Hours</div>
        </div>
        <div>
          <div className="text-xl">{timeLeft.minutes}</div>
          <div className="text-xs">Minutes</div>
        </div>
        <div>
          <div className="text-xl">{timeLeft.seconds}</div>
          <div className="text-xs">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

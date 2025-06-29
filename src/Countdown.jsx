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
    <div className=" font-pexico text-white text-center space-y-4 w-full max-w-md mx-auto z-10 relative">
      <h1 className="text-3xl mb-4">Countdown</h1>
      <div className="text-xl grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div>
          <div className="text-4xl">{timeLeft.days}</div>
          <div>Days</div>
        </div>
        <div>
          <div className="text-4xl">{timeLeft.hours}</div>
          <div>Hours</div>
        </div>
        <div>
          <div className="text-4xl">{timeLeft.minutes}</div>
          <div>Minutes</div>
        </div>
        <div>
          <div className="text-4xl">{timeLeft.seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;

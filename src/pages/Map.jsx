import React from "react";

const Map = () => {
  return (
    <div className="flex flex-col items-center px-14 sm:px-10 md:px-14 lg:px-40 py-16 w-full">
      <div className="w-full  font-funnel text-blue-50 text-2xl flex flex-col items-center overflow-hidden gap-10">
        <p className="text-center text-lg">FIND US</p>
        <hr className="border-0.5 border-white/20 w-full" />

        <div
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl"
          onMouseEnter={() => document.body.classList.add("cursor-auto")}
          onMouseLeave={() => document.body.classList.remove("cursor-auto")}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31081.172563393953!2d80.1939557!3d13.153153199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264a10c856599%3A0xac3348f41097ba7f!2sVelammal%20Engineering%20College!5e0!3m2!1sen!2sin!4v1751536308530!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Velammal Engineering College"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;

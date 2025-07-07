import React, { useState } from "react";

const CodeOfConduct = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreeChange = () => setAgreed(!agreed);

  const handleRegisterClick = () => {
    if (agreed) {
      window.location.href = "https://noctivus-register.vercel.app";
    }
  };

  return (
    <section className="px-8 md:px-20 lg:px-40 py-16 text-white font-funnel bg-black min-h-screen">
      <h1 className="text-3xl md:text-2xl text-center mb-6">CODE OF CONDUCT</h1>
      <hr className="border-0.5 border-white/20 w-full mb-10" />

      <div className="space-y-8 text-white/80 leading-7 text-lg">
        <p>
          At <span className="text-white font-semibold">Noctivus ’25</span>, we
          believe in creating a space that is inclusive, respectful, and
          empowering for all participants.
        </p>

        <h2 className="text-2xl text-white font-semibold mt-8">Consequences</h2>
        <p>
          Violating the code may result in warnings, disqualification, or being
          escorted out.
        </p>

        <div className="text-center text-white mt-12 text-xl">
          Let’s keep Noctivus awesome. <br />
          <span className="text-blue-400 font-semibold">
            Code hard. Stay chill. Respect always.
          </span>
        </div>

        {/* Checkbox + Button */}
        <div className="mt-16 flex flex-col items-center justify-center gap-6">
          <label className="flex items-center gap-3 text-white/80 text-lg">
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleAgreeChange}
              className="accent-blue-500 w-5 h-5"
            />
            I have read and agree to the Code of Conduct.
          </label>

          <button
            onClick={handleRegisterClick}
            disabled={!agreed}
            className={`px-6 py-3 rounded-full text-white font-funnel text-lg transition-all duration-300 ${
              agreed
                ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                : "bg-white/10 cursor-not-allowed opacity-50"
            }`}
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;

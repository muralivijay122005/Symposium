import React, { useState,useEffect } from "react";
import Aurora from "./../components/Aurora";
import { IoWarningOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CodeOfConduct = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
  if (window.performance) {
    const navType = window.performance.getEntriesByType("navigation")[0]?.type;
    if (navType === "reload") {
      window.location.replace("/"); // full reload to '/'
    }
  }
}, []);


  const handleAgreeChange = () => setAgreed(!agreed);

  const handleRegisterClick = () => {
    if (agreed) {
      navigate("/register");
    }
  };

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden text-white font-funnel">
      {/* Aurora Full-Screen Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#00FFFF"]}
          blend={20}
          amplitude={1.2}
          speed={0.7}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 px-8 md:px-20 lg:px-40 py-20 max-h-full overflow-y-auto">
        <h1 className="text-xl md:text-2xl text-center mb-6">CODE OF CONDUCT</h1>
        <hr className="border-0.5 border-white/20 w-full mb-10" />

        <div className="space-y-10 text-white/60 leading-7 text-xl">
          {/* Sections */}
          <div>
            <h2 className="text-xl text-white mb-2">1. Purpose & Scope</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>This Code of Conduct ensures a safe, inclusive, and professional environment for all participants — including volunteers, organizers, and guests — attending in-person or virtually. Everyone is expected to uphold the dignity and academic integrity of our institution.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white mb-2">2. Expected Behavior</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Respect others and maintain professionalism throughout the event.</li>
              <li>Promote inclusivity and a welcoming environment for all.</li>
              <li>Participate actively and follow guidelines with honesty and collaboration.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white mb-2">3. Unacceptable Behavior</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Harassment or discrimination of any kind — verbal, physical, sexual, online, or identity-based.</li>
              <li>Cheating, plagiarism, falsifying data, or unauthorized system access.</li>
              <li>Damaging property, using offensive language, or causing disruptions.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white mb-2">4. Privacy & Data Use</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Data collected is used solely for registration and event communication.</li>
              <li>Submissions and media may be archived for academic or promotional use.</li>
              <li>No third-party sharing without participant consent.</li>
              <li>Misuse of data will result in disciplinary action.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white mb-2">5. Rules for Participation</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Carry your college ID during the event.</li>
              <li>Register in advance via the official form.</li>
              <li>Follow the specified team size limits.</li>
              <li>Bring your own devices and necessary tools.</li>
              <li>Submit on time — late entries will not be evaluated.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl text-white mb-2">6. Photo/Media Consent</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>The event will be recorded and photographed.</li>
              <li>By participating, you agree to the use of photos, videos, or your project for academic, promotional, and social media purposes.</li>
              <li>If you have concerns, please notify the organizers in advance.</li>
            </ul>
          </div>

          <div className="flex flex-row items-center gap-2">
            <IoWarningOutline />
            <p>
              Violations may result in warnings, disqualification, or removal from the event at the discretion of the organizers.
            </p>
          </div>

          {/* Signature Message */}
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
      </div>
    </section>
  );
};

export default CodeOfConduct;

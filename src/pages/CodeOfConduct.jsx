import React, { useState, useEffect } from "react";
import Aurora from "./../components/Aurora";
import { IoWarningOutline, IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CodeOfConduct = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.performance) {
      const navType = window.performance.getEntriesByType("navigation")[0]?.type;
      if (navType === "reload") {
        window.location.replace("/");
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
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#00FFFF"]}
          blend={20}
          amplitude={1.2}
          speed={0.7}
        />
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-10 left-10 z-20 flex items-center gap-2 p-3 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-all duration-300 "
      >
        <IoArrowBackOutline className="text-lg" />
        
      </button>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-20 lg:px-40 py-20 max-h-full overflow-y-auto">
        <h1 className="text-md md:text-lg text-center mb-6">CODE OF CONDUCT</h1>
        <hr className="border-0.5 border-white/20 w-full mb-10" />

        <div className="space-y-10 text-white/60 leading-7 text-lg">
          <ul className="list-disc ml-6 space-y-3">
            <li>
              <strong>Dress Code:</strong> Participants must wear appropriate formal or semi-formal attire during the event. Only casual or formal shirts are permitted; T-shirts, graphic tops, or hoodies are strictly not allowed. This ensures a respectable environment suitable for an academic and professional gathering. Participants not adhering to the dress code may be denied entry.
            </li>
            <li>
              <strong>Photography:</strong> Photography and videography are permitted only for personal use and must be limited to yourself or individuals you personally know. Capturing photos or videos of unknown participants without their explicit consent is strictly prohibited. This policy is enforced to maintain privacy, ensure comfort for all attendees, and uphold the integrity of the event atmosphere.
            </li>
            <li>
              <strong>ID Requirement:</strong> All attendees must carry their official college identification card and be prepared to present it upon request by organizers or volunteers. Entry to the venue and participation in any activity may be denied without a valid ID.
            </li>
            <li>
              <strong>Conduct:</strong> All participants must conduct themselves with utmost professionalism, showing respect towards fellow attendees, volunteers, and organizing staff. Any form of inappropriate behavior, harassment, or disruption will lead to strict disciplinary actions including disqualification or removal.
            </li>
          </ul>

          {/* Warning */}
          <div className="flex flex-row items-center gap-2 bg-red-900 w-fit p-1 px-3 rounded-md mx-auto">
            <IoWarningOutline className="text-white text-[40px] md:text-[20px]" />
            <p className="text-white">
              Violations may result in warnings, disqualification, or removal from the event.
            </p>
          </div>

          {/* Signature */}
          <div className="text-center text-white mt-12 text-md">
            Break Limits. Not Trust!
          </div>

          {/* Checkbox + Button */}
          <div className="mt-10 flex flex-col items-center justify-center gap-6">
            <label className="flex items-center gap-3 text-white/80 text-md ">
              <input
                type="checkbox"
                checked={agreed}
                onChange={handleAgreeChange}
                className="accent-emerald-500 w-5 h-5"
              />
              I have read and agree to fully comply with the Code of Conduct.
            </label>

            <button
              onClick={handleRegisterClick}
              disabled={!agreed}
              className={`px-5 py-2 rounded-full text-white font-funnel text-md transition-all duration-300 ${
                agreed
                  ? "bg-emerald-500 hover:bg-emerald-700 cursor-pointer"
                  : "bg-white/30 cursor-not-allowed opacity-50"
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

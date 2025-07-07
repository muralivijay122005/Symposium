import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventPopup = ({ event, onClose }) => {
  const popupRef = useRef(null);

  // Handle outside click to close
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.05, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.1, ease: "easeIn" },
          }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            key="popup"
            ref={popupRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 220, // increased stiffness
                damping: 20, // slightly less damping for snap
              },
            }}
            exit={{
              scale: 0.85,
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className="bg-neutral-900 font-funnel text-white rounded-2xl p-6 w-[90%] max-w-lg relative space-y-4 max-h-[90vh] overflow-y-auto scrollbar-hide"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-5 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full transition duration-100 hover:bg-neutral-700"
            >
              &times;
            </button>

            {/* Content */}
            <h2 className="text-xl font-medium">{event.title}</h2>

            <div>
              <h3 className="text-lg font-medium mb-1"> Schedule:</h3>
              <p className="text-lg whitespace-pre-line text-neutral-300">
                {event.schedule}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1"> Overview:</h3>
              <p className="text-lg text-neutral-300">{event.overview}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1"> Format:</h3>
              <p className="text-lg whitespace-pre-line text-neutral-300">
                {event.format}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1"> Rules:</h3>
              <ul className="list-disc list-inside text-lg text-neutral-300">
                {event.rules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;

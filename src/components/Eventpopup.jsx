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
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            key="popup"
            ref={popupRef}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 110,
                damping: 18,
                duration: 0.4,
              },
            }}
            exit={{
              scale: 0.65,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              },
            }}
            className="bg-[#1a1b2e] text-white rounded-2xl p-6 w-[90%] max-w-lg relative shadow-xl space-y-4 max-h-[90vh] overflow-y-auto scrollbar-hide"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-5 text-2xl text-white hover:text-red-400"
            >
              &times;
            </button>

            {/* Content */}
            <h2 className="text-2xl font-bold">{event.title}</h2>

            <div>
              <h3 className="text-lg font-semibold mb-1"> Schedule:</h3>
              <p className="text-sm whitespace-pre-line text-gray-300">
                {event.schedule}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1"> Overview:</h3>
              <p className="text-sm text-gray-300">{event.overview}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1"> Format:</h3>
              <p className="text-sm whitespace-pre-line text-gray-300">
                {event.format}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1"> Rules:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
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
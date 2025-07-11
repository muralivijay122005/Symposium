import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EventPopup = ({ event, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  const renderTextBlock = (title, content) => (
    <div className="space-y-1">
      <h3 className="text-md font-medium">{title}</h3>
      <p className="text-md text-neutral-300 whitespace-pre-line">{content}</p>
    </div>
  );

  const renderListBlock = (title, list) =>
    list && list.length > 0 ? (
      <div>
        <h3 className="text-md font-medium">{title}</h3>
        <ul className="list-disc list-inside text-md text-neutral-300 space-y-1">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    ) : null;

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.05 } }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            key="popup"
            ref={popupRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 220, damping: 20 },
            }}
            exit={{
              scale: 0.85,
              opacity: 0,
              transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
            }}
            className="bg-neutral-900 font-funnel text-white rounded-2xl p-6 w-[90%] max-w-lg relative space-y-4 max-h-[90vh] overflow-y-auto scrollbar-hide"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-5 text-white text-3xl w-10 h-10 flex items-center justify-center rounded-full transition duration-100 hover:bg-neutral-700"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold">{event.title}</h2>

            {event.schedule && renderTextBlock("Schedule", event.schedule)}
            {event.teamSize && renderTextBlock("Team Size", event.teamSize)}
            {event.overview && renderTextBlock("Overview", event.overview)}
            {event.format && renderTextBlock("Format", event.format)}

            {renderListBlock("Rules", event.rules)}
            {renderListBlock("Topics", event.topics)}
            {renderListBlock(
              "Submission Guidelines",
              event.submissionGuidelines
            )}
            {renderListBlock("Reporting Guidelines", event.reporting)}
            {renderListBlock("Prohibited Actions", event.prohibited)}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventPopup;

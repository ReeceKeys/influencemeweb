import React, { useState, useEffect, useRef } from "react";
import ContactForm from "../components/ContactForm.jsx";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [loaded, setLoaded] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const formWrapperRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  const toggleForm = () => {
    if (formOpen) {
      // Scroll user to top before closing
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Wait a short moment for scroll to start, then trigger closing animation
      setTimeout(() => setClosing(true), 400);
    } else {
      setFormOpen(true);
    }
  };

  // Effect to finalize closing after scroll starts
  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(() => {
        setFormOpen(false);
        setClosing(false);
      }, 500); // 500 delay to let scroll start
      return () => clearTimeout(timeout);
    }
  }, [closing]);

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-r from-[#2f2f2f] via-[#2f2f2f] via-[#2f2f2f] to-[#2f2f2f] text-white">
      {/* Header */}
      <header
        className={`text-center pt-32 transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
      </header>

      {/* Contact Bubbles */}
      <div className="flex justify-center gap-8 mt-12 mb-8 flex-wrap">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-lg text-gray-900 bg-yellow-100 md:hover:bg-yellow-200 md:hover:text-black transition-colors cursor-pointer duration-500">
            <a href="tel:+18312953842"><PhoneIcon className="w-8 h-8" /></a>
          </div>
          <span className="mt-2 text-white font-semibold">Phone</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full text-gray-900 bg-green-100 md:hover:bg-green-200 md:hover:text-black transition-colors cursor-pointer duration-500">
            <a href="mailto:influencemeinc@gmail.com"><EnvelopeIcon className="w-8 h-8" /></a>
          </div>
          <span className="mt-2 text-white font-semibold">Email</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-gray-900 md:hover:bg-blue-200 md:hover:text-black transition-colors duration-500 cursor-pointer">
            <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedinIn className="w-6 h-6" /></a>
          </div>
          <span className="mt-2 text-white font-semibold">LinkedIn</span>
        </div>
      </div>

      {/* Toggle Form Button */}
      <div className="text-center">
        <button
          onClick={toggleForm}
          disabled ={closing}
          className={`px-6 p-3 rounded-lg transition-colors duration-500 
                ${closing 
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed" 
                  : "bg-yellow-100 text-gray-900 md:hover:bg-yellow-200 md:hover:text-black"
                }`}        >
          {closing ? "Closing..." : formOpen ? "Close Form" : "Send Form"}
        </button>
      </div>

      {/* Form Container */}
      <div ref={formWrapperRef} className="mt-32 mb-32 flex justify-center w-full">
        <AnimatePresence>
          {(formOpen || closing) && (
            <motion.div
              key="contact-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <ContactForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

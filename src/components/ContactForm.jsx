// src/components/ContactForm.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "4e576d58-b55b-4be7-8a85-30ee31985eb1");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
        setTimeout(() => setResult(""), 3000);
      } else {
        setResult(data.message || "Submission failed. Please try again.");
        setTimeout(() => setResult(""), 4000);
      }
    } catch {
      setResult("An error occurred. Please try again.");
      setTimeout(() => setResult(""), 4000);
    }
  };

  const onClear = () => {
    if (formRef.current) {
      formRef.current.reset();
      setResult("");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-lg overflow-hidden"
      >
        <div className="p-6 flex flex-col gap-4">
          <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">

            {/* Name + Email */}
            <div className="font-body grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="font-body block mb-1 text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-body block mb-1 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="e.g. john@example.com"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-100"
                />
              </div>
            </div>

            {/* Phone + Industry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="font-body block mb-1 text-gray-700 font-medium">
                  Phone <span className="italic text-gray-500">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="e.g. +1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-100"
                />
              </div>
              <div>
                <label htmlFor="industry" className="font-body block mb-1 text-gray-700 font-medium">
                  Your Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  placeholder="e.g. Technology"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-100"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-1 text-gray-700 font-medium">
                Additional Notes <span className="italic text-gray-500">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="e.g. I’d like to learn more about your services..."
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-100 resize-y overflow-y-auto"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClear}
                className="flex-1 bg-white border text-gray-900 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition duration-300"
              >
                Clear
              </button>
              <button
                type="submit"
                className="flex-1 bg-yellow-100 text-black text-gray-900 md:hover:text-black py-2 rounded-lg hover:bg-yellow-200 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Animated success/error message */}
          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-2"
            >
              <p className="text-center text-gray-800 font-medium">{result}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

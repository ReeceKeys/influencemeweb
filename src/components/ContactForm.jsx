import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch {
      setResult("An error occurred. Please try again.");
    }
  };

  const onClear = () => {
    if (formRef.current) {
      formRef.current.reset();
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-lg overflow-hidden"
    >
      {/* Form content */}
      <div className="p-6 flex flex-col gap-4">
        <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClear}
              className="flex-1 bg-gray-300 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-400 transition"
            >
              Clear
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit Form
            </button>
          </div>
        </form>

        {result && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-gray-800 font-medium mt-2"
          >
            {result}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

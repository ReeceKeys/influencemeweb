import React, { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex-1 flex-col bg-gradient-to-r from-[#444444ff] via-[#555555ff] via-[#666666ff] to-[#333333ff] text-white">

      {/* Header */}
      <header
        className={`text-center py-12 mt-8 pb-12 transition-all duration-700 transform ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
        }`}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold">Contact Us</h1>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-12 mb-16">
        <ContactForm />
      </main>

    </div>
  );
}

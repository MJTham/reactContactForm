// src/App.jsx
import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setStatus("Success! We'll be in touch.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    // Main Container: Soft Earthy Gradient (Mocca/Light Green)
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-stone-100 to-emerald-50 p-6">
      
      {/* The White Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
        
        {/* Header Section: Deep Forest Green */}
        <div className="bg-emerald-800 p-8 text-center">
          <h2 className="text-3xl font-extrabold text-white tracking-wide">Get in Touch</h2>
          <p className="text-emerald-100 mt-2">Send us a message from the wild!</p>
        </div>
        
        {/* Form Section */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                // Input styles: White bg with Stone border, focuses to Emerald Green
                className="block w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-stone-400"
                placeholder="John Doe"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-stone-400"
                placeholder="you@example.com"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="block w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all placeholder-stone-400"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            {/* Submit Button: Mocca Brown (Stone) */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-stone-700 hover:bg-stone-800 text-white font-bold rounded-lg shadow-md transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-stone-300"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && (
            <div className={`mt-6 text-center font-medium py-2 rounded-lg ${status.includes("Success") ? "text-emerald-800 bg-emerald-50 border border-emerald-200" : "text-red-800 bg-red-50 border border-red-200"}`}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
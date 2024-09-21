import React from "react";

export default function Contact() {
  return (
    <main className="bg-indigo-50 min-h-screen p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Have any questions or want to collaborate? We'd love to hear from you!
        </p>
        
        <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-600 text-left" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-600 text-left" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Email"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-600 text-left" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows="4"
              placeholder="Your Message"
            />
          </div>
          
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

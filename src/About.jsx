import React from "react";

export default function About() {
  return (
    <main className="bg-indigo-50 min-h-screen p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          The R&D AI Hub is committed to advancing artificial intelligence
          through research, development, and collaboration.
        </p>
        
        <div className="mt-8">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="About Us" 
            className="mx-auto rounded-lg shadow-md"
          />
        </div>
        
        <div className="text-left mt-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            Our mission is to foster an environment of creativity and innovation
            in AI, providing a platform for researchers, developers, and AI
            enthusiasts to collaborate and grow together.
          </p>
          
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            We envision a future where AI technology transforms industries and
            improves lives, driving us toward a smarter and more connected world.
          </p>
        </div>
      </div>
    </main>
  );
}

import React from "react";

export default function Home() {
  return (
    <main className="bg-indigo-50 min-h-screen p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4 animate-bounce">
          Welcome to the R&D AI Hub
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Exploring the limitless potential of AI research and development.
        </p>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">AI Projects</h2>
            <p className="text-gray-600">
              Discover our innovative AI projects that push the boundaries of technology.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Research Papers</h2>
            <p className="text-gray-600">
              Dive into our collection of AI research papers and whitepapers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Community</h2>
            <p className="text-gray-600">
              Join our community of AI enthusiasts and share your insights.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

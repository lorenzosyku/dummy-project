import React from "react";

function first() {
  return (
    <section className="bg-blue-500 text-white flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center">
          <div className="mr-8">
            <img src="/path/to/image1.jpg" alt="Image 1" className="w-32 h-32 rounded-full" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, ipsum id euismod vehicula, nulla mi posuere sapien.</p>
            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default first;

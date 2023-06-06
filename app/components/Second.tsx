import React from "react";

function second() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <img
              src="/path/to/product1.jpg"
              alt="Product 1"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Product 1</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="/path/to/product2.jpg"
              alt="Product 2"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Product 2</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="/path/to/product3.jpg"
              alt="Product 3"
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Product 3</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default second;

import React from "react";

function third() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/path/to/product.jpg"
              alt="Product"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Product Description</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              lacinia tellus sit amet lorem vestibulum auctor. Sed ac ex ligula.
              Sed eu pulvinar nisl, vitae tristique lectus. Ut fringilla justo
              at augue tincidunt, ac ullamcorper risus sagittis.
            </p>
            <p className="text-gray-700">
              Vestibulum varius dui in nibh vestibulum, sed efficitur tortor
              elementum. Fusce pellentesque orci sed ante iaculis cursus. Nam ut
              facilisis nisi. Nullam quis metus vel sem efficitur auctor vitae
              et tortor. Duis auctor tempor velit vitae blandit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default third;

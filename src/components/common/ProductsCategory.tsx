import React from "react";

const ProductsCategory = ({ cardTitle, cardDesc, cardImg }:any) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={cardImg}
        alt="Food Items"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-gray-600">{cardTitle}</h3>
        <p className="text-gray-600">{cardDesc}</p>
      </div>
    </div>
  );
};

export default ProductsCategory;

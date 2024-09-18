import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define the type for a single product
type Product = {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
};

// Define the type for the grouped products by category
type GroupedProducts = {
  [category: string]: Product[];
};

// Array of all products
const allProducts: Product[] = [
  {
    title: "Organic Saffron",
    description: "High-quality organic saffron sourced from Iran.",
    image: "/images/saffron.jpg",
    category: "Food Items",
    link: "#",
  },
  {
    title: "Organic Saffron",
    description: "High-quality organic saffron sourced from Iran.",
    image: "/images/saffron.jpg",
    category: "Spices",
    link: "#",
  },
  {
    title: "Organic Saffron",
    description: "High-quality organic saffron sourced from Iran.",
    image: "/images/saffron.jpg",
    category: "Spices",
    link: "#",
  },
  {
    title: "Gourmet Cheese",
    description: "Artisan cheese made from the finest local ingredients.",
    image: "/images/cheese.jpg",
    category: "Dairy",
    link: "#",
  },
  {
    title: "Chickpeas",
    description: "Nutrient-rich chickpeas, perfect for any recipe.",
    image: "/images/chickpeas.jpg",
    category: "Pulses",
    link: "#",
  },
  {
    title: "Chickpeas",
    description: "Nutrient-rich chickpeas, perfect for any recipe.",
    image: "/images/chickpeas.jpg",
    category: "Food Items",
    link: "#",
  },
  {
    title: "Pure Butter",
    description: "Rich and creamy butter made from fresh dairy.",
    image: "/images/butter.jpg",
    category: "Dairy",
    link: "#",
  },
  {
    title: "Pure Butter",
    description: "Rich and creamy butter made from fresh dairy.",
    image: "/images/butter.jpg",
    category: "Dairy",
    link: "#",
  },
  {
    title: "Pure Butter",
    description: "Rich and creamy butter made from fresh dairy.",
    image: "/images/butter.jpg",
    category: "Dairy",
    link: "#",
  },
  // Add more products as needed
];

// Helper function to group products by category
const groupProductsByCategory = (products: Product[]) => {
  return products.reduce<GroupedProducts>((acc, product) => {
    const { category } = product;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});
};

const Products = () => {
  // Group products by category
  const productsByCategory = groupProductsByCategory(allProducts);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-12  text-gray-700 dark:text-white">Our Products</h1>

      {/* Iterate over each category */}
      {Object.keys(productsByCategory).map((category, index) => (
        <div key={index} className="mb-12">
          {/* Category Title */}
          <h2 className="text-2xl font-semibold mb-6">{category}</h2>

          {/* Products under this category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productsByCategory[category].map((product, idx) => (
              <Card key={idx} className="flex flex-col items-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{product.description}</p>
                  <Button className="w-full text-center">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

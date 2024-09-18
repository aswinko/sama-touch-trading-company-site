"use client"

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const allProducts = [
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
    title: "Pure Butter",
    description: "Rich and creamy butter made from fresh dairy.",
    image: "/images/butter.jpg",
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
    title: "Pure Butter",
    description: "Rich and creamy butter made from fresh dairy.",
    image: "/images/butter.jpg",
    category: "Dairy",
    link: "#",
  },
  // Add more products with different categories
];

const categories = ["All", "Spices", "Dairy", "Pulses"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

      {/* Category Filter */}
      <div className="mb-8 flex justify-center w-fit">
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          defaultValue="All"
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Products List */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, idx) => (
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
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              <Button
                className="w-full text-center"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Products;

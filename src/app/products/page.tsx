import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the type for a single product
type Product = {
  title: string;
  description: string;
  image: string;
  // category: string;
  link: string;
};

 

// Define the type for the grouped products by category
// type GroupedProducts = {
//   [category: string]: Product[];
// };

// Array of all products
const allProducts: Product[] = [
  {
    title: "Dry Fruits and Nuts",
    description: "A premium selection of nutritious dry fruits and nuts, ideal for healthy snacking.",
    image: "/products/dryfruits.jpg",
    // category: "Food Items",
    link: "#",
  },
  {
    title: "Sauces",
    description: "A variety of flavorful sauces, perfect for enhancing your culinary creations.",
    image: "/products/souce.jpg",
    // category: "Spices",
    link: "#",
  },
  {
    title: "Milk Products",
    description: "A range of fresh milk-based products including butter, cheese, and more.",
    image: "/products/milk.jpg",
    // category: "Dairy",
    link: "#",
  },
  {
    title: "Rice",
    description: "High-quality rice varieties, perfect for everyday meals and special occasions.",
    image: "/products/rice.jpg",
    // category: "Food Items",
    link: "#",
  },
  {
    title: "Spices",
    description: "A selection of aromatic spices, essential for adding rich flavors to any dish.",
    image: "/products/spices.jpg",
    // category: "Spices",
    link: "#",
  },
  {
    title: "Pulses",
    description: "A variety of protein-rich pulses, perfect for soups, stews, and salads.",
    image: "/products/pulses.jpg",
    // category: "Food Items",
    link: "#",
  },
  {
    title: "Instant Mixes",
    description: "Quick and easy instant mixes to prepare delicious meals in minutes.",
    image: "/products/instantmix.jpg",
    // category: "Food Items",
    link: "#",
  },
  {
    title: "Beverages",
    description: "Refreshing juices and beverages made from natural ingredients.",
    image: "/products/juices.jpg",
    // category: "Beverages",
    link: "#",
  },  
  // Add more products as needed
];

// Helper function to group products by category
// const groupProductsByCategory = (products: Product[]) => {
//   return products.reduce<GroupedProducts>((acc, product) => {
//     const { category } = product;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(product);
//     return acc;
//   }, {});
// };

const Products = () => {
  // Group products by category
  // const productsByCategory = groupProductsByCategory(allProducts);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-12  text-gray-700 dark:text-white">
        Our Products
      </h1>

      {/* Iterate over each category */}
      {/* {Object.keys(productsByCategory).map((category, index) => ( */}
      <div className="mb-12">
        {/* Category Title */}
        {/* <h2 className="text-2xl font-semibold mb-6">{category}</h2> */}

        {/* Products under this category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product, idx) => (
            <Card key={idx} className="flex flex-col items-center p-4 hover:shadow-lg">
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
                {/* <Button className="w-full text-center">Learn More</Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* ))} */}
    </div>
  );
};

export default Products;

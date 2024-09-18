import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Page = () => {
  const projects = [
    {
      title: "Global Sourcing",
      description:
        "Identifying and establishing relationships with reputable international suppliers who provide high-quality products.",
    },
    {
      title: "Quality Assurance",
      description:
        "Ensuring imported goods meet local regulatory standards and quality expectations. This often involves inspecting products and verifying certifications.",
    },
    {
      title: "Logistics and Customs",
      description:
        "Handling the complexities of international shipping, including customs documentation, tariffs, and transportation logistics.",
    },
    {
      title: "Market Analysis",
      description:
        "Researching local market trends and consumer preferences to select the most suitable products for import.",
    },
    {
      title: "Distribution",
      description:
        "Coordinating with local distributors, wholesalers, and retailers to ensure smooth distribution and availability of products.",
    },
    {
      title: "Customer Relations",
      description:
        "Providing support and information to local clients, managing orders, and addressing any issues that arise with the imported products.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 md:pb-16">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Company Mission Section */}
      <section className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-lg">
          We are a trusted importing company dedicated to bringing the best
          food, spices, pulses, and dairy products from around the world to
          local markets. Our mission is to ensure quality, reliability, and
          satisfaction in every product we deliver.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {projects.map((data, idx) => (
          <Card key={idx} className="p-6">
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="">{data.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Page;

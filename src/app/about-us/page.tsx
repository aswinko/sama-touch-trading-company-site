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

    {/* Company Mission Section with Logo */}
    <section className="flex flex-col md:flex-row items-center max-w-3xl mx-auto mb-12">
      {/* Logo */}
      <div className="md:w-80 h-40 mb-4 md:mb-0 md:mr-6">
        <img
          src="/SAMA-FINAL-01.png" // Replace with your logo path
          alt="Company Logo"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Description */}
      <p className="text-lg text-center md:text-left">
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

    {/* Other Sections */}
    <div>
      <KeyMarkets />
      <Compliance />
      <ChallengesAndOpportunities />
      <MarketingAndSales />
    </div>
  </div>
  );
};

export default Page;

const KeyMarkets = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Key Markets</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {markets.map((market, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {market.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{market.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const Compliance = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Compliance and Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {compliance.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

const ChallengesAndOpportunities = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Challenges and Opportunities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Challenges</h3>
          <ul className="list-disc list-inside">
            {challenges.map((challenge, idx) => (
              <li key={idx} className="mb-2">
                {challenge}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Opportunities</h3>
          <ul className="list-disc list-inside">
            {opportunities.map((opportunity, idx) => (
              <li key={idx} className="mb-2">
                {opportunity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const MarketingAndSales = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Marketing and Sales
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {marketing.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

// Data for rendering each section

const markets = [
  {
    title: "Local Retailers",
    description: "Grocery stores, supermarkets, and specialty food shops.",
  },
  {
    title: "Restaurants and Food Services",
    description:
      "Businesses that require a steady supply of high-quality food products.",
  },
  {
    title: "Wholesalers and Distributors",
    description:
      "Entities that distribute imported goods to smaller retailers and food service providers.",
  },
];

const compliance = [
  {
    title: "Local Regulations",
    description:
      "Adhering to local food safety and import regulations, including obtaining necessary permits.",
  },
  {
    title: "Product Certifications",
    description:
      "Ensuring that imported products have required certifications such as organic, non-GMO, or fair-trade.",
  },
  {
    title: "Quality Standards",
    description:
      "Ensuring products meet the expected quality standards and are free from contaminants.",
  },
];

const challenges = [
  "Regulatory Compliance: Navigating complex regulations for importing food products.",
  "Supply Chain Disruptions: Managing issues related to delays, transportation, and tariffs.",
  "Quality Control: Ensuring imported products consistently meet quality standards.",
];

const opportunities = [
  "Growing Demand for Exotic Products: Expanding product offerings to include unique items.",
  "Partnerships with Suppliers: Building strong relationships to secure better pricing and exclusive products.",
  "E-commerce Expansion: Leveraging online platforms to reach a broader customer base.",
];

const marketing = [
  {
    title: "Market Research",
    description:
      "Conducting research to understand local consumer preferences and trends.",
  },
  {
    title: "Trade Shows and Networking",
    description:
      "Participating in industry events to discover new products and build contacts.",
  },
  {
    title: "Digital Marketing",
    description:
      "Using social media and e-commerce platforms to promote imported products and attract customers.",
  },
];

"use client"
import { HoverEffect } from "../ui/card-hover-effect";

function ServiceCard() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export default ServiceCard;

export const projects = [
  {
    title: "Sourcing",
    description:
      "Identifying and establishing relationships with reputable international suppliers who provide high-quality products.",
    // link: "https://stripe.com",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensuring imported goods meet local regulatory standards and quality expectations. This often involves inspecting products and verifying certifications.",
    // link: "https://netflix.com",
  },
  {
    title: "Logistics and Customs:",
    description:
      "Handling the complexities of international shipping, including customs documentation, tariffs, and transportation logistics.",
    // link: "https://google.com",
  },
  {
    title: "Market Analysis:",
    description:
      "Researching local market trends and consumer preferences to select the most suitable products for import",
    // link: "https://meta.com",
  },
  {
    title: "Distribution",
    description:
      "Coordinating with local distributors, wholesalers, and retailers to ensure smooth distribution and availability of products.",
    // link: "https://amazon.com",
  },
  {
    title: "Customer Relations",
    description:
      "Providing support and information to local clients, managing orders, and addressing any issues that arise with the imported products.",
    // link: "https://microsoft.com",
  },
];

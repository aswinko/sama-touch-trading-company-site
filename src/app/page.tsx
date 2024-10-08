import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import ProductCards from "@/components/common/ProductCards";
// import MovingCards from "@/components/common/MovingCards";
import ServiceCard from "@/components/common/ServiceCard";
// import { signIn } from "@/auth";
import Link from "next/link";
import ProductsCategory from "@/components/common/ProductsCategory";

export default function Home() {
  return (
    <div className="container mx-auto md:py-12">
      <div className="flex flex-col md:flex-row md:mt-8 py-4 md:py-12">
        <div className="w-full h-full flex justify-center">
          <img
            src="/banner.png"
            className="w-full h-full object-cover"
            alt="img"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-start items-center md:items-start gap-12">
          <div>
            <p className="text-3xl md:text-6xl font-bold text-gray-700 dark:text-white">
              Connecting Global Food to Local Markets in Kuwait
            </p>
          </div>
          <div>
            <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 mx-1">
              We are a trusted company in kuwait dedicated to import the best
              food products from around the world to the local markets.
            </p>
          </div>
          <div className="flex items-end">
            <Button type="button">
              <Link href="/products">Explore More</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="w-full bg-gray-100 dark:bg-gray-900 flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly p-4">
        <Card className="flex items-center rounded-none py-6 shadow-sm">
          <CardContent className="text-center">
            <p className="text-xl font-medium">Free Shipping</p>
            <span className="text-xs">Above $5 Only</span>
          </CardContent>
        </Card>
        <Card className="flex items-center rounded-none py-6">
          <CardContent className="text-center">
            <p className="text-xl font-medium">Certified Organic</p>
            <span className="text-xs">100% Guarantee</span>
          </CardContent>
        </Card>
        <Card className="flex items-center rounded-none py-6">
          <CardContent className="text-center">
            <p className="text-xl font-medium">Huge Savings</p>
            <span className="text-xs">At Lowest Price</span>
          </CardContent>
        </Card>
        <Card className="flex items-center rounded-none py-6">
          <CardContent className="text-center">
            <p className="text-xl font-medium">Easy Returns</p>
            <span className="text-xs">No Questions Asked</span>
          </CardContent>
        </Card>
      </div> */}

      {/* <div className=" p-12">
        <h2 className="font-bold text-3xl text-center py-12">
          Best Selling Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCards
            cardTitle={"Card 1"}
            cardDesc={
              "Card with Author avatar, complete name and time to read - most suitable for blogs."
            }
            imgSrc="prd1.jpg"
          />
          <ProductCards
            cardTitle={"Card 2"}
            cardDesc={
              "Card with Author avatar, complete name and time to read - most suitable for blogs."
            }
            imgSrc="prd2.jpg"
          />
          <ProductCards
            cardTitle={"Card 3"}
            cardDesc={
              "Card with Author avatar, complete name and time to read - most suitable for blogs."
            }
            imgSrc="prd3.jpg"
          />
          <ProductCards
            cardTitle={"Card 4"}
            cardDesc={
              "Card with Author avatar, complete name and time to read - most suitable for blogs."
            }
            imgSrc="prd4.jpg"
          />
          <ProductCards
            cardTitle={"Card 4"}
            cardDesc={
              "Card with Author avatar, complete name and time to read - most suitable for blogs."
            }
            imgSrc="prd4.jpg"
          />
        </div>
      </div> */}

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* <!-- Section Title --> */}
          <h2 className="text-4xl font-bold text-center mb-6  text-gray-700 dark:text-white">
            Our Products
          </h2>
          <p className="text-center mb-12">
            Discover our range of high-quality imports
          </p>

          {/* <!-- Product Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductsCategory
              cardImg={"/products/dryfruits.jpg"}
              cardTitle={"Dry Fruits and Nuts"}
              cardDesc={
                "A premium selection of nutritious dry fruits and nuts."
              }
            />
            <ProductsCategory
              cardImg={"/products/spices.jpg"}
              cardTitle={"Spices"}
              cardDesc={"Premium spices like saffron and paprika."}
            />
            <ProductsCategory
              cardImg={"/products/pulses.jpg"}
              cardTitle={"Pulses"}
              cardDesc={"Lentils, beans, peas, and more."}
            />
            <ProductsCategory
              cardImg={"/products/milk.jpg"}
              cardTitle={"Milk Products"}
              cardDesc={"Cheese, butter, yogurt, and more."}
            />
          </div>

          {/* <!-- CTA Button --> */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-block bg-primary text-white py-2 px-8 rounded-lg shadow-md hover:bg-primary transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <div className="">
        <h2 className="font-bold text-3xl text-center py-12  text-gray-700 dark:text-white">
          Our Key Services
        </h2>
        <ServiceCard />
      </div>

      {/* <div className="">
        <h2 className="font-bold text-3xl text-center py-12">
          Customers Reviews
        </h2>
        <MovingCards />
      </div> */}
    </div>
  );
}

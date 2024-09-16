import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductCards from "@/components/common/ProductCards";
import MovingCards from "@/components/common/MovingCards";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:mt-8">
        <div className="w-full h-full">
          <img src="/banner.png" className="w-5/6" alt="img" />
        </div>
        <div className="flex flex-col justify-center text-center md:text-start items-center md:items-start gap-12">
          <div>
            <p className="text-sm md:text-lg font-semibold text-gray-600 dark:text-gray-300 ">
              Best import and export quality products
            </p>
          </div>
          <div>
            <p className="text-3xl md:text-6xl font-bold">
              Feel The Organic Movement!
            </p>
          </div>
          <div>
            <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="flex items-end">
            <Button>
              <Link href={"/signup"}>Join Now</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 flex flex-row justify-evenly p-4">
        <Card className="flex items-center rounded-none py-6">
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
      </div>
      <div className=" p-12">
        <h2 className="font-bold text-3xl text-center py-12">
          Best Selling Products
        </h2>
        <div className="grid grid-cols-4 gap-4">
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
      </div>
      <div className="dark:bg-black">
        <h2 className="font-bold text-3xl text-center py-12">
          Customers Reviews
        </h2>
        <MovingCards />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

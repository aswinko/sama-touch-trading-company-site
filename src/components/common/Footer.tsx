import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <div>
            {/* <h2 className="text-xl font-semibold mb-4">Sama Touch General Trading Company</h2> */}
            <img
              src="/SAMA-white.png" // Replace with your logo path
              alt="Company Logo"
              className="object-fill w-full h-24"
            />
            <p className="text-sm">
              We are dedicated to connecting international suppliers with local
              markets, delivering high-quality food, spices, pulses, and dairy
              products. Our mission is to ensure excellence in every product we
              provide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="text-sm space-y-2">
              <li>
                <span className="font-semibold">Address:</span> 1234 Market St,
                Suite 567, City, Country
              </li>
              <li>
                <span className="font-semibold">Phone:</span> (123) 456-7890
              </li>
              <li>
                <span className="font-semibold">Email:</span> info@samatouch.com
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4">
          <p className="text-center text-sm">
            &copy; 2024{" "}
            <Link className="text-primary" href="/">
              SAMA TOUCH GENERAL TRADING COMPANY
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

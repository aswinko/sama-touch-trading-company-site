import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-700 dark:text-white">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-10 mb-16">
        {/* Contact Information Section */}
        <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
          <div className="border shadow-md rounded-lg p-8 flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Our Location</h2>
              <p>Kuwait -Khaitan Block-7 Building -20</p>
            </div>
          </div>

          {/* <div className="border shadow-md rounded-lg p-8 flex items-start space-x-4">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p>+123 456 789</p>
            </div>
          </div> */}

          <div className="border shadow-md rounded-lg p-8 flex items-start space-x-4">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p>info@samatouch.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 border shadow-lg rounded-lg p-10">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your Message"
                className="mt-1"
                required
              />
            </div>

            <Button type="submit" className="w-full mt-4 ">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
        <iframe
          title="Company Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27839.274766911167!2d47.95503414278273!3d29.2849903201143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9bc770801153%3A0xb6ec5934c8cb3494!2sKhaitan%2C%20Kuwait!5e0!3m2!1sen!2sin!4v1726896724913!5m2!1sen!2sin"
          // allowFullScreen="true"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default page;

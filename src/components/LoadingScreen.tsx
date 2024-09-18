"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading duration
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Adjust the time as necessary
    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
        {/* Logo */}
        <Image src="/SAMA-FINAL-01.png" alt="Logo" width={150} height={150} />
        {/* Add any loading animation or text here */}
        <div className="mt-0">
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      </div>
    )
  );
};

export default LoadingScreen;

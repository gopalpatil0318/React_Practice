"use client";
import React, { useState } from "react";

import SideBar from "@/components/SideBar"
import HeroSection from "@/components/HeroSection";
import FeacheredCoureses from "@/components/FeacheredCoureses";
import WhyChoosesUs from "@/components/WhyChoosesUs";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

 

const page = () => {


 
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-neutral-800">
      <SideBar/>
      <Dashboard />
    </div>
  );
}




// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className=" p-2 md:p-3 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black flex flex-col gap-3 flex-1 w-full h-full">
      <HeroSection />
        <FeacheredCoureses />
        <WhyChoosesUs />
        <TestimonialsCards />
        <UpcomingWebinars />
        <Instructors />
        <Footer />
      </div>
    </div>
  );
};


export default page

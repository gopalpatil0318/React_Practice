import Image from "next/image";
import HeroSection from '@/components/HeroSection';
import FeacheredCoureses from "@/components/FeacheredCoureses";
import WhyChoosesUs from "@/components/WhyChoosesUs";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
   <HeroSection/>
   <FeacheredCoureses/>
   <WhyChoosesUs/>
   <TestimonialsCards/>
   <UpcomingWebinars/>
   <Instructors/>
   <Footer/>
    </main>
  );
}

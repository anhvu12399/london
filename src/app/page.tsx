import React from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TourServices } from "@/components/TourServices";
import { AirportTransfers } from "@/components/AirportTransfers";
import { FleetShowcase } from "@/components/FleetShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="main-wrapper">
      {/* Top Header & Navigation */}
      <TopBar />
      <Navbar />

      {/* Hero & Interactive Quote Booking Engine */}
      <HeroSection />

      {/* Trust & Accreditations Strip */}
      <TrustBadges />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Sightseeing Tours Grid */}
      <TourServices />

      {/* London Airport & Cruise Port Transfers */}
      <AirportTransfers />

      {/* Iconic Fleet: LEVC TX Electric & Heritage TX4 */}
      <FleetShowcase />

      {/* 3-Step Effortless Booking Journey */}
      <HowItWorks />

      {/* Verified Guest Testimonials */}
      <Testimonials />

      {/* Accordion FAQ */}
      <FaqSection />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingActions />
    </main>
  );
}

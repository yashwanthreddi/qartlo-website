import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";

import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import FaqSection from "@/components/home/FaqSection";


export const metadata = {
  title: "Qartlo | Online Store Builder for WhatsApp-First Businesses",
  description:
    "Create a professional online store with Qartlo. Manage products, share your store link, receive WhatsApp-ready orders, and grow your business from one simple dashboard.",
  keywords: [
    "Qartlo",
    "online store builder",
    "WhatsApp commerce",
    "eCommerce platform India",
    "product catalog builder",
    "custom domain store",
    "small business online store",
  ],
  openGraph: {
    title: "Qartlo | Build Your Online Store in Minutes",
    description:
      "Launch a branded online store, manage products, receive orders, and sell through a mobile-first commerce experience.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="page-shell">
      <Navbar />

      {/* Hero: Main positioning */}
      <HeroSection />

    
     

      {/* What Qartlo does */}
      <AboutSection />

      {/* Core product capabilities */}
      <FeaturesSection />

      {/* Setup journey */}
      <HowItWorksSection />

      {/* Differentiation */}
      <WhyChooseSection />

      {/* Objection handling */}
      <FaqSection />

      

      <Footer />
    </main>
  );
}
import { Hero } from "@/components/Hero";
import { LogoBar } from "@/components/LogoBar";
import { DifferenceSection } from "@/components/DifferenceSection";
import { ServicesPreview } from "@/components/ServicesPreview";
import { AboutPreview } from "@/components/AboutPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <DifferenceSection />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}

import { Hero } from "@/components/Hero";
import { DifferenceSection } from "@/components/DifferenceSection";
import { ChooseClinic } from "@/components/ChooseClinic";
import { ServicesPreview } from "@/components/ServicesPreview";
import { AboutPreview } from "@/components/AboutPreview";
import { AdvancedTreatments } from "@/components/AdvancedTreatments";
import { NutritionSection } from "@/components/NutritionSection";
import { RightNutrition } from "@/components/RightNutrition";
import { HealthyHabits } from "@/components/HealthyHabits";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { SearchEndsHere } from "@/components/SearchEndsHere";
import { CTABanner } from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DifferenceSection />
      <ChooseClinic />
      <ServicesPreview />
      <AboutPreview />
      <AdvancedTreatments />
      <NutritionSection />
      <RightNutrition />
      <HealthyHabits />
      <WhyChooseUs />
      <Testimonials />
      <SearchEndsHere />
      <CTABanner />
    </>
  );
}

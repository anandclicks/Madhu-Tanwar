import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocation } from "@/content/locations";

const data = getLocation("dietician-dlf-phase-2")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function DieticianDlfPhase2Page() {
  return <LocationPage data={data} />;
}

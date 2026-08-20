import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocation } from "@/content/locations";

const data = getLocation("hydrafacial-sector-25-gurugram")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function HydrafacialSector25Page() {
  return <LocationPage data={data} />;
}

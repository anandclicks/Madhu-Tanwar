import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { getLocation } from "@/content/locations";

const data = getLocation("skin-clinic-sushant-lok")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
};

export default function SkinClinicSushantLokPage() {
  return <LocationPage data={data} />;
}

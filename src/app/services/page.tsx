import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CtaSection from "@/component/cta/CtaSection";
import InnerLayout from "@/component/layout/InnerLayout";
import ServiceSection3 from "@/component/service/ServiceSection3";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Services",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main className="rv-14-body">
      <InnerLayout>
        <BreadcrumbSection title="Services" />
        <ServiceSection3 />
        <CtaSection inner />
      </InnerLayout>
    </main>
  );
}

import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CtaSection from "@/component/cta/CtaSection";
import InnerLayout from "@/component/layout/InnerLayout";
import TeamSection3 from "@/component/team/TeamSection3";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Team Members",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="Team Members" />
        <TeamSection3 />
        <CtaSection inner />
      </InnerLayout>
    </main>
  );
}

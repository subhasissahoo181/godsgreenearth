import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CtaSection from "@/component/cta/CtaSection";
import InnerLayout from "@/component/layout/InnerLayout";
import ProjectSection3 from "@/component/project/ProjectSection3";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Projects",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="Projects" />
        <ProjectSection3 />
        <CtaSection inner />
      </InnerLayout>
    </main>
  );
}

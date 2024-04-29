import AboutSection2 from "@/component/about/AboutSection2";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CtaSection from "@/component/cta/CtaSection";
import InnerLayout from "@/component/layout/InnerLayout";
import SpeakerSection from "@/component/speaker/SpeakerSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - About",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="About" currentPage="About Us" />
        <AboutSection2 btnStyle="rv-inner-about-btn" />
        <SpeakerSection />
        <CtaSection />
      </InnerLayout>
    </main>
  );
}

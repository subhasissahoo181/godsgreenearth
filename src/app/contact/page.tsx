import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactSection2 from "@/component/contact/ContactSection2";
import InnerLayout from "@/component/layout/InnerLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revel Contact",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="Contact" />
        <ContactSection2 innerPage />
      </InnerLayout>
    </main>
  );
}

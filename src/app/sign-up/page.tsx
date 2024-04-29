import AuthSection from "@/component/auth/AuthSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/component/layout/InnerLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Sign Up",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="Sign Up" />
        <AuthSection />
      </InnerLayout>
    </main>
  );
}

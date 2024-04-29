import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CheckoutSection from "@/component/checkout/CheckoutSection";
import InnerLayout from "@/component/layout/InnerLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Checkout",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="Checkout" />
        <CheckoutSection />
      </InnerLayout>
    </main>
  );
}

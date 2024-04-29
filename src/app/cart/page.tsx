import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import CartSection from "@/component/cart/CartSection";
import InnerLayout from "@/component/layout/InnerLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Cart",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="Cart" />
        <CartSection />
      </InnerLayout>
    </main>
  );
}

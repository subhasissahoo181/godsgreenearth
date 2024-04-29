import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/component/layout/InnerLayout";
import WishlistSection from "@/component/wishlist/WishlistSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Wishlist",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="Wishlist" />
        <WishlistSection />
      </InnerLayout>
    </main>
  );
}

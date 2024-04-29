import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import GallerySection2 from "@/component/gallery/GallerySection2";
import InnerLayout from "@/component/layout/InnerLayout";
import ShopMain from "@/component/main/ShopMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Shop",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="Shop" />
        <ShopMain />
        <GallerySection2 />
      </InnerLayout>
    </main>
  );
}

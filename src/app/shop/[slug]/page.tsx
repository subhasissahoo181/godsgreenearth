import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import GallerySection2 from "@/component/gallery/GallerySection2";
import InnerLayout from "@/component/layout/InnerLayout";
import ProductDetailMain from "@/component/main/ProductDetailMain";
import VideoModal from "@/component/modal/VideoModal";
import RelatedProducts from "@/component/product/RelatedProducts";
import VideoSection2 from "@/component/video/VideoSection2";
import { shopData } from "@/data/Data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Product Details",
  description: "Developed by Azizur Rahman",
};

export default function Home({ params }: { params: { slug: string } }) {
  const productInfo = shopData.find((item) => item.slug === params.slug);
  return (
    <main>
      <InnerLayout>
        {productInfo ? (
          <>
            <BreadcrumbSection title="Product Details" />
            <ProductDetailMain item={productInfo} />
            <VideoSection2 />
            <RelatedProducts />
            <GallerySection2 />
            <VideoModal videoUrl="https://www.youtube.com/embed/CVHj7Wxhvdo?si=5nyGWxc5y_Rh2HtS" />
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}

import AllBlogSection from "@/component/blog/AllBlogSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import InnerLayout from "@/component/layout/InnerLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Blog",
  description: "Developed by Azizur Rahman",
};

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <BreadcrumbSection title="News & Blog" currentPage="Blog Masonry" />
        <AllBlogSection />
      </InnerLayout>
    </main>
  );
}

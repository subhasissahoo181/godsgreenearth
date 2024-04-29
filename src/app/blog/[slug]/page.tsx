import BlogDetailSection from "@/component/blog/BlogDetailSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import InnerLayout from "@/component/layout/InnerLayout";
import { blogData3 } from "@/data/Data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Revel Blog Details",
  description: "Developed by Azizur Rahman",
};
export default function Home({ params }: { params: { slug: string } }) {
  const blogInfo = blogData3.find((item) => item.slug === params.slug);
  return (
    <main className="rv-14-home">
      <InnerLayout>
        {blogInfo ? (
          <>
            <BreadcrumbSection title="Blog Details" />
            <BlogDetailSection
              img={blogInfo.img}
              title={blogInfo.title}
              id={blogInfo.id}
            />
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}

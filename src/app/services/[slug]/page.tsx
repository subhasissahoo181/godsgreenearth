import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ErrorSection from "@/component/error/ErrorSection";
import InnerLayout from "@/component/layout/InnerLayout";
import ServiceDetails from "@/component/service/ServiceDetails";
import { serviceData } from "@/data/Data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organiyo - Services Detail",
  description: "Developed by Azizur Rahman",
};
export default function Home({ params }: { params: { slug: string } }) {
  const serviceInfo = serviceData.find((item) => item.slug === params.slug);
  return (
    <main className="rv-14-body">
      <InnerLayout>
        {serviceInfo ? (
          <>
            <BreadcrumbSection title="Service Details" />
            <ServiceDetails img={serviceInfo?.img} title={serviceInfo?.title} />
          </>
        ) : (
          <ErrorSection />
        )}
      </InnerLayout>
    </main>
  );
}

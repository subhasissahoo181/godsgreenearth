import AboutSection from "@/component/about/AboutSection";
import BannerSection from "@/component/banner/BannerSection3";
import BlogSection from "@/component/blog/BlogSection3";
import ContactSection from "@/component/contact/ContactSection";
import FooterSection from "@/component/footer/FooterSection3";
import HeaderSection from "@/component/header/HeaderSection4";
import SearchFormModal from "@/component/modal/SearchFormModal";
import VideoModal from "@/component/modal/VideoModal";
// import PortfolioSection from "@/component/portfolio/PortfolioSection";
import PricingSection from "@/component/pricing/PricingSection";
import ServiceSection from "@/component/service/ServiceSection2";
import TeamSection from "@/component/team/TeamSection";
import TestimonialSection from "@/component/testimonial/TestimonialSection";
import VideoSection from "@/component/video/VideoSection";
import ProjectDetails from "@/component/project/ProjectSection2";
import Guides from "@/component/guide/GuideSection"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Godsgreenearth",
  description: "Developed by Subhasis Sahoo",
};
export default function Home() {
  return (
    <main>
      <HeaderSection />
      <BannerSection />
      <ServiceSection />
      <AboutSection />      
      <Guides />
      <VideoSection /> 
      <TestimonialSection />
      <PricingSection />
      <ProjectDetails />
      <TeamSection />
      <ContactSection />
      <BlogSection />

      <FooterSection/>
        {/* // style="rv-20-footer"
        // logo="assets/img/rv-20-logo-light.png"
        // footerContactStyle="rv-20-footer__contact-card"
        // footerFormStyle="rv-20-footer-nwsltr__form" */}
      {/* /> */}

      {/* Modals */}
      <SearchFormModal />
      <VideoModal videoUrl="https://www.youtube.com/embed/b-5E5suKIAY?si=KAbRHsNOuo4JeZiV" />
    </main>
  );
}

import { blogData3 } from "@/data/Data";
import React from "react";
import CustomGsapHeaderAnimate from "../utils/CustomGsapHeaderAnimate";
import Link from "next/link";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BlogSection = () => {
  return (
    <section className="rv-20-blog_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="rv-20-blog_section_heading">
              <CustomGsapHeaderAnimate>
                <p className="rv-20-blog_sub_title rv-text-anime d-flex">
                  <span></span> Blogs and News
                </p>
              </CustomGsapHeaderAnimate>
              <CustomGsapHeaderAnimate>
                <h2 className="rv-20-blog_section_title rv-text-anime">
                  Latest News & Article
                </h2>
              </CustomGsapHeaderAnimate>
            </div>
          </div>
        </div>

        <DivAnimateYAxis className="row">
          {blogData3.slice(0, 3).map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              <div className="rv-20-single_blog">
                <div className="rv-20-blog_image">
                  <Link href={`/blog/${item.slug}`}>
                    <img src={item.img} alt="image" />
                  </Link>

                  <p className="rv-20-single_blog_date">
                    <i className="fal fa-calendar-alt"></i>
                    {item.date}
                  </p>
                </div>
                <h4 className="rv-20-single_blog_content_title">
                  <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                </h4>
                <p className="rv-20-single_blog_content_desc">
                  Enim aliquam, vehicula sem at, luctus risus estibulum ultrices
                  molestie.
                </p>
                <Link
                  href={`/blog/${item.slug}`}
                  className="rv-20-single_blog_btn"
                >
                  Read More <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </DivAnimateYAxis>
      </div>
    </section>
  );
};

export default BlogSection;

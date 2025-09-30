import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  // Removed Medium fetching logic to avoid loading issues; using hardcoded blogs only
  const [mediumBlogs, setMediumBlogs] = useState("Error"); // Force hardcoded rendering
  if (!blogSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.blogs.map((blog, i) => (
              <BlogCard
                key={i}
                isDark={isDark}
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

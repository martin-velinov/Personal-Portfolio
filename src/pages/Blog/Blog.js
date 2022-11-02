import "./Blog.css";
import BlogComponent from "../../pages/Blog/BlogComponent"
import {info} from "../../data/info"


export default function Blog() {
 
  return (
    <div >
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{info.blogSection.title}</h1>
          <p>
            {info.blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {info.blogSection.blogs.map((blog, i) => {
              return (
                <BlogComponent
                  key={i}
                  blog={{
                    title: blog.title,
                    description: blog.description,
                    img:blog.img
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
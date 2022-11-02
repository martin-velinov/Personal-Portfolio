import React from "react";
import "./Blog.css";
export default function BlogComponent({blog}) {
 

  return (
    <div>
      <div >
        <div className="blog">
          <h3 >
            {blog.title}
          </h3>
          <img src ={blog.img} alt="" />
          <p >
            {blog.description}
          </p>
          <button className="btn-secondary">Read all</button>
        </div>
      </div>
    </div>
  );
}
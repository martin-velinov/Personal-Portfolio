import React from "react";

export default function BlogComponent({blog}) {
 

  return (
    <div>
      <div >
        <div className="blog">
          <h3 >
            {blog.title}
          </h3>
          <p >
            {blog.description}
          </p>
          
        </div>
      </div>
    </div>
  );
}
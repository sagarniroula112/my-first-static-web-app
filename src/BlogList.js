import { Blogs } from "./Blogs";
// import { useState } from "react";

export function BlogList({ blogDetails, handleShowCards }) {
  return (
    <div className="faq-box">
      {blogDetails.map((blog) => (
        <Blogs
          blog={blog}
          key={blog.id}
          id={blog.id}
          title={blog.title}
          text={blog.text}
          handleShowCards={handleShowCards}
        />
      ))}
    </div>
  );
}

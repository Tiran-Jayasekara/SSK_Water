import React from 'react';
import './Blog.css';

const BlogPost = ({ title, date, author, content }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p className="post-meta">
        {author} | {date}
      </p>
      <div className="post-content">
        {content}
      </div>
    </div>
  );
};

export default BlogPost;

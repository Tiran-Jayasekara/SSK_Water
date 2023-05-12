import React from 'react';
import BlogPost from './BlogPost';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'My First Blog Post',
      date: 'May 1, 2023',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      id: 2,
      title: 'My Second Blog Post',
      date: 'May 3, 2023',
      author: 'Jane Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    },
    {
      id: 3,
      title: 'My Third Blog Post',
      date: 'May 6, 2023',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
    }
  ];

  return (
    <div className="blog">
      {blogPosts.map(post => (
        <BlogPost
          key={post.id}
          title={post.title}
          date={post.date}
          author={post.author}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default Blog;

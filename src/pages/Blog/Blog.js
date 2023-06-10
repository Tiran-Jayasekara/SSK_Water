import React from 'react';
import BlogPost from './BlogPost';
import './Blog.css';
import { Row } from 'reactstrap';
import { Col } from "reactstrap";
import Footer from '../../components/Footer/Footer';

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
    <>
  <div className="blog-container">
  <div className="post-container">
  <Row>
    <Col>
    {blogPosts.map(post => (
      <BlogPost
        key={post.id}
        title={post.title}
        date={post.date}
        author={post.author}
        content={post.content}
      />
    ))}
    
    <img src='https://media.springernature.com/full/springer-static/image/art%3A10.1186%2Fs12882-019-1501-0/MediaObjects/12882_2019_1501_Fig2_HTML.png?as=webp' className="image" alt='blog_images'></img>
    </Col>
  </Row>  
  </div>
</div>
<Footer/>
</>
  );
};

export default Blog;

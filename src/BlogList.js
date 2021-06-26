import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = (props) => {
  const blogs = props;
  const title = props;

  return (
    <div className="blog-list">
      <h2>{title.title}</h2>
      {blogs.blogsHome.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

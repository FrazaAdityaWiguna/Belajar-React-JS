import React from 'react';

const BlogList = (props) => {
  const blogs = props;
  const title = props;
  const handleDelete = props;

  return (
    <div className="blog-list">
      <h2>{title.title}</h2>
      {blogs.blogsHome.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button
            type="button"
            onClick={() => handleDelete.handleDeleteHome(blog.id)}
          >
            delete blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

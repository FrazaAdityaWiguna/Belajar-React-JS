import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Fraza', id: 1 },
    {
      title: 'Welcome to My Blog',
      body: 'lorem ipsum...',
      author: 'Dihas',
      id: 2,
    },
    {
      title: 'Web Dev top tips',
      body: 'lorem ipsum...',
      author: 'Erik',
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogsHome={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;

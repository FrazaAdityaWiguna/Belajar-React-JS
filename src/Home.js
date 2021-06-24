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
    {
      title: 'Leader Of BigDream',
      body: 'lorem ipsum...',
      author: 'Fraza',
      id: 4,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogsHome={blogs} title="All Blogs " />
      <BlogList
        blogsHome={blogs.filter((blog) => blog.author === 'Fraza')}
        title="Fraza's Blogs "
      />
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';
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

  const [name, setName] = useState('Fraza');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use Effect ran');
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList
        blogsHome={blogs}
        title="All Blogs"
        handleDeleteHome={handleDelete}
      />
      <button type="button" onClick={() => setName('King')}>
        Change Name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;

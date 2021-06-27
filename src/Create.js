import React, { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('fraza');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('Add New Blog');
      setIsPending(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Blog title
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label htmlFor="body">
          Blog body
          <textarea
            name="body"
            id="body"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </label>
        <label htmlFor="author">
          Blog author:
          <select
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="fraza">Fraza</option>
            <option value="dihas">Dihas</option>
            <option value="erik">Erik</option>
          </select>
          {!isPending && <button type="submit">Add blog</button>}
          {isPending && (
            <button type="submit" disabled>
              Adding blog...
            </button>
          )}
        </label>
      </form>
    </div>
  );
};

export default Create;

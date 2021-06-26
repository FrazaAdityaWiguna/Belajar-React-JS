import React, { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('fraza');

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
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
          <button type="button">Add blog</button>
        </label>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;

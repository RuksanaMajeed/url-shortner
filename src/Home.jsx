import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const shortUrl = Math.random().toString(36).substring(7);
      setShortUrl(shortUrl)
      await axios.post(
        "http://localhost:5000/url/api/shorten",
        {
          originalUrl: e.currentTarget.elements.originalURl.value,
          shortUrl: shortUrl,
        }
      )
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          id="originalURl"
          value={originalUrl}
          onChange={
            (e) => setOriginalUrl(e.target.value)
          }
        />
        <button type="submit">Shorten</button>
      </form>

      {shortUrl && (
        <p>
          Short URL:
          <a
            href={`http://localhost:5000/url/${shortUrl}`}
            target="_blank" rel="noreferrer"
          >
            {shortUrl}
          </a>
        </p>
      )}
    </div>
  )
}

export default Home;
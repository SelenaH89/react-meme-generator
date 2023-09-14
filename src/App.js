import React, { useState } from 'react';

export default function MemesGenerator() {
  const [topText, setTopText] = useState(''); // Initialize state for top text
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [memeUrl, setMemeUrl] = useState('');

  const generateMeme = () => {
    // Function to generate meme URL
    const apiUrl = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.jpg`;

    setMemeUrl(apiUrl); // Update meme URL state with the generated URL
  };

  const handleMemeTemplateChange = (event) => {
    setMemeTemplate(event.target.value); // Handle changes in meme template input and update state
  };

  return (
    <div className="meme-generator">
      <label htmlFor="topText">Top text</label>
      <input
        type="text"
        id="topText"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />

      <button onClick={generateMeme}>Generate Meme</button>

      <div>
        <img
          src={memeUrl}
          alt="Meme"
          data-test-id="meme-image"
          style={{ display: memeUrl ? 'block' : 'none' }}
        />
      </div>

      <label htmlFor="bottomText">Bottom text</label>
      <input
        type="text"
        id="bottomText"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />

      <label htmlFor="memeTemplate">Meme template</label>
      <input
        type="text"
        id="memeTemplate"
        value={memeTemplate}
        onChange={handleMemeTemplateChange} // Input for meme template with controlled state
      />

      <a href={memeUrl} download="meme.jpg">
        {' '}
        <button>Download Meme</button>
      </a>
    </div>
  );
}

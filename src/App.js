/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react'; // The code imports React and the useState hook from the 'react' library.

export default function MemesGenerator() {
  // The MemesGenerator function is defined as a React functional component.
  const [topText, setTopText] = useState(''); // Several state variables are defined using the useState hook
  const [bottomText, setBottomText] = useState('');
  const [memeTemplate, setMemeTemplate] = useState('doge');
  const [memeUrl, setMemeUrl] = useState('');

  const generateMeme = () => {
    // This function is called when the "Generate Meme" button is clicked.
    try {
      const apiUrl = `https://memegen.link/${memeTemplate}/${topText}/${bottomText}.jpg`;
      setMemeUrl(apiUrl);
    } catch (error) {
      console.error('Error generating meme URL:', error);
      // Handle the error, e.g. display an error message to the user
    }
  };

  function handleTopTextChange(event) {
    // Updates the topText state when the top text input field value changes.
    setTopText(event.target.value);
  }

  const handleBottomTextChange = (event) => {
    setBottomText(event.target.value);
  };

  return (
    <div className="meme-generator">
      <label htmlFor="topText">Top text</label>
      <input
        // eslint-disable-next-line upleveled/no-unnecessary-html-attributes
        type="text"
        id="topText"
        value={topText}
        onChange={handleTopTextChange}
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
        // eslint-disable-next-line upleveled/no-unnecessary-html-attributes
        type="text"
        id="bottomText"
        value={bottomText}
        onChange={handleBottomTextChange}
      />

      <label htmlFor="memeTemplate">Meme template</label>
      <input
        // eslint-disable-next-line upleveled/no-unnecessary-html-attributes
        type="text"
        id="memeTemplate"
        value={memeTemplate}
        onChange={memeTemplate}
      />
      <a href={memeUrl} download="meme.jpg">
        {' '}
        <button>Download Meme</button>
      </a>
    </div>
  );
}

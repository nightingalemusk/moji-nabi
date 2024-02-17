import React, { useState } from 'react';

function TextConverter() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState([]);

  const onSubmit = () => {
    const updatedResults = results.map(({ encoding, decoding }) => {
      const encoded = new TextEncoder().encode(inputText);
      const decoded = new TextDecoder().decode(encoded);
      return { encoding, decoding, result: decoded };
    });
    setResults(updatedResults);
  };

  return (
    <div>
      <h2>Text Converter</h2>
      <div>
        <label htmlFor="inputText">Input Text:</label>
        <textarea
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={onSubmit}>Convert</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Encoding</th>
              <th>Decoding</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {results.map(({ encoding, decoding, result }, index) => (
              <tr key={index}>
                <td>{encoding}</td>
                <td>{decoding}</td>
                <td>{result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TextConverter;

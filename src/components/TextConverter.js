import React, { useState } from 'react';
import iconv from 'iconv-lite';
import { Buffer } from 'buffer';

function TextConverter() {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState([]);
  
  const onSubmit = () => {
    const updatedResults = results.map(({ encoding, decoding }) => {
      const encoded = iconv.encode(inputText, encoding);
      const decoded = iconv.decode(Buffer.from(encoded), decoding);
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

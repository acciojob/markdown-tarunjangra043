import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "../styles/App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <textarea
            className="textarea"
            value={markdown}
            onChange={handleInputChange}
            placeholder="Write your markdown here..."
          />
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </>
      )}
    </div>
  );
}

export default App;

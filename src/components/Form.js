import React from "react";

function Form({ input, setInput, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        className="search-input"
        type="text"
        placeholder="Search for food!..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default Form;

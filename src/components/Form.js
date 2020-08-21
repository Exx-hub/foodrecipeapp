import React from "react";
import Alert from "./Alert";

function Form({ input, setInput, onSubmit, alert }) {
  return (
    <form onSubmit={onSubmit} className="form">
      {alert && <Alert alert={alert} />}
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

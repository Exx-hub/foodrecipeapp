import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import CardList from "./components/CardList";

// https://api.edamam.com/search?q=${query}&app_id=e7f7546c&app_key=8132d01ca10a402f52afd972b6ad7460

function App() {
  const [input, setInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState("");

  const APP_ID = "e7f7546c";
  const APP_KEY = "8132d01ca10a402f52afd972b6ad7460";
  const url = `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    setLoading(true);
    if (input) {
      const result = await Axios.get(url);

      if (!result.data.more) {
        console.log("no results");
        setLoading(false);
        setInput("");
        return setAlert("no results");
      }

      console.log(result);
      setLoading(false);
      setRecipes(result.data.hits);
      setInput("");
      setAlert("");
    } else {
      console.log("please fill out the form");
      setAlert("Please fill out the form");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App-container">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        onSubmit={onSubmit}
        alert={alert}
      />
      {loading ? <h1>Loading...</h1> : <CardList recipes={recipes} />}
    </div>
  );
}

export default App;

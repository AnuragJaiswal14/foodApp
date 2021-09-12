import React, { useState } from "react";
import Axios from "axios";
import "./Menu.css";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";
import Starters from "./Starters";
function Menu() {
  const APP_ID = "24a2a443";
  const APP_KEY = "24615e46743f474b6d70c79dd80e6e2b";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setQuery("");
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="container">
      <h1
        className="text-center"
        onClick={getData}
        style={{ paddingTop: "0%" }}
      ></h1>
      <center>
        <form className="search-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search food item"
            autocomplete="off"
            onChange={onChange}
            value={query}
          />
          <input type="submit" value="search" />
        </form>
      </center>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
      <Starters />
    </div>
  );
}

export default Menu;

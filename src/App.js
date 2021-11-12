import logo from "./logo.svg";
import "./App.css";
import LikeButton from "./component/LikeButton";
import MouseTracker from "./component/MouseTracker";
import DogShow from "./component/DogShow";
import useMousePosition from "./component/hooks/useMousePosition";
import useURLLoader from "./component/hooks/useURLLoader";
import React, { useState, useEffect } from "react";

const DogShowWithHook = () => {
  const [data, loading] = useURLLoader(
    "https://dog.ceo/api/breeds/image/random"
  );
  return (
    <>
      {loading ? (
        "加载中"
      ) : (
        <img src={data && data.message} alt="dog" style={{ width: 200 }} />
      )}
    </>
  );
};
const CatShowWithHook = () => {
  const [category, setCategory] = useState(5);
  const [data, loading] = useURLLoader(
    `https://api.thecatapi.com/v1/images/search?limit=1&category_ids=${category}`
  );
  const preCategory = () => {
    setCategory(category - 1);
  };
  const nextCategory = () => {
    setCategory(category + 1);
  };
  return (
    <>
      {loading ? (
        "加载中"
      ) : (
        <img src={data && data[0].url} alt="cat" style={{ width: 200 }} />
      )}
      <button onClick={preCategory}>上一张</button>
      <button onClick={nextCategory}>下一张</button>
    </>
  );
};

function App() {
  const position = useMousePosition();
  const [data, loading] = useURLLoader(
    "https://dog.ceo/api/breeds/image/random"
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {position.x},{position.y}
        </h1>
        <LikeButton />
        <DogShowWithHook />
        <CatShowWithHook />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

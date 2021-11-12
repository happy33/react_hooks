import React, { useState, useEffect } from "react";
import axios from "axios";
const DogShow = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const style = {
    width: 200,
  };
  const [fetch, setFetch] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      console.log(res);
      setUrl(res.data.message);
      setLoading(false);
    });
  }, [fetch]);

  return (
    <>
      {loading ? (
        <p>🐕读取中</p>
      ) : (
        <img src={url} alt="dog" style={style}></img>
      )}
      <button
        onClick={() => {
          setFetch(!fetch);
        }}
      >
        再看一张
      </button>
    </>
  );
};

export default DogShow;

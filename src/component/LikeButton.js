import React, { useState, useEffect } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  //useEffect在第一次加载和每次更新后都会执行
  useEffect(() => {
    document.title = `点击了${like}次`;
  });
  return (
    <>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like}👍
      </button>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "on" : "off"}
      </button>
    </>
  );
};

export default LikeButton;

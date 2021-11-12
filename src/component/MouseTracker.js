import React, { useState, useEffect } from "react";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //useEffect在组件卸载时执行清除
  //打印顺序为第一次加载时add，重新渲染时inner、remove、add，此处的remove是清除上一次的effect
  useEffect(() => {
    const updateMouse = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      console.log("inner");
    };
    console.log("add listener");
    document.addEventListener("click", updateMouse);
    return () => {
      console.log("remove listener");
      document.removeEventListener("click", updateMouse);
    };
  });
  return (
    <p>
      {position.x},{position.y}
    </p>
  );
};

export default MouseTracker;

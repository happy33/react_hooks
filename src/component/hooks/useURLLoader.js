import axios from "axios";
import React, { useState, useEffect } from "react";

const useURLLoader = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [url]);
  return [data, loading];
};

export default useURLLoader;

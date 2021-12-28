import React, { useState, useEffect } from "react";

import { API_KEY } from "./Keys";

const CONTEXT_KEY = "1898cfdade93baf88";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchdata();
  }, [term]);
  return { data };
};

export default useGoogleSearch;

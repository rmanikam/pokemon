import "./App.css";

import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const fetchURL = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=200";
  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data.results));
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div className="main">
          <li className="style">This is Name of Pokmon:-{item.name}</li>
          <li className="style1">This is Url of Pokmon:-{item.url}</li>{" "}
        </div>
      ))}
    </div>
  );
};

export default App;

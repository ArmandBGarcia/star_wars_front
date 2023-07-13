import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// const url = "34.68.80.111:8000/characters";

export const Card = () => {
  const [data, setData] = useState({ name: "" });

  const api_characters = async () => {
    const response = await axios.get("http://localhost:8000/characters");
    // const response = await axios.get("http://34.68.80.111:8000/characters");
    // const response = await axios.get("https://swapi.dev/api/people/1");
    console.log({ response });
    setData(response.data);
  };

  useEffect(() => {
    console.log("Componente montado");

    api_characters();
  }, []);

  return (
    <div>
      <h1>Star Wars data: </h1>
      <p>{data.name}</p>
    </div>
  );
};

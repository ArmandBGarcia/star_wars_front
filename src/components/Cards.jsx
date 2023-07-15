import React from "react";
import Card from "./Card";
import s from "../CSS/Cards.module.css";

export const Cards = ({ characters }) => {
  console.log("desde cards: ", characters);
  return (
    <div className={s.cards}>
      {characters.map((data) => (
        <Card key={data._id} {...data} />
      ))}
    </div>
  );
};

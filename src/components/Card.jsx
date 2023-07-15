import React from "react";
import s from "../CSS/Card.module.css";

const Card = ({
  _id,
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
  films,
}) => {
  console.log("desde Card: ", name);
  return (
    <div className={s.card}>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>Home: </p>
        {/* {homeworld.map((planet) => (
          <p>{planet}</p>
        ))} */}
      </div>
    </div>
  );
};

export default Card;

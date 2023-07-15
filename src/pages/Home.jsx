import React, { useEffect } from "react";
import { Cards } from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions";
import s from "../CSS/Home.module.css";

export const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  console.log("desde home: ", characters);

  return (
    <div className={s.home}>
      <Cards characters={characters} />
    </div>
  );
};

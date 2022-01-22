import React from "react";
import ButtonLike from "../button-like/ButtonLike";
import Image from "../images/Image";

export default function AboutGame({ game }) {
  return (
    <>
      <Image image={game} size={"t_screenshot_med"}/>
      <h3>{game.name}</h3>
      <ButtonLike game ={game}/>

    </>
  );
}

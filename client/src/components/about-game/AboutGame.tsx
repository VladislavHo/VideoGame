import React, { useContext } from "react";
import { MyContext } from "../../App";
import ButtonLike from "../buttons/ButtonLike";
import Image from "../images/Images";

export default function AboutGame() {
  const {aboutGame} = useContext(MyContext)
  return (
    <>
      <Image image={aboutGame} size={"t_screenshot_med"}/>
      <h3>{aboutGame.name}</h3>
      <ButtonLike game = {aboutGame}/>

    </>
  );
}

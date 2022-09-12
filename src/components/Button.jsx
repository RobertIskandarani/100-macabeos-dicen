import { useEffect } from "react";
import { useState } from "react";
import "./Button.css";
import ButtonAnswer from "./ButtonAnswer";
import audio from "./../assets/boton.mp3";

function Button({ answer, setCounter }) {
  let music = new Audio(audio);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  }, [answer]);

  return show ? (
    <ButtonAnswer answer={answer} />
  ) : answer.answer === "" ? (
    <div className="buttonAnswer">
      <img alt={answer.id} src={answer.img} width={"auto"} height={"90%"} />
    </div>
  ) : (
    <div
      className="button"
      onClick={() => {
        setCounter();
        music.play();
        setShow(true);
      }}
    >
      <img alt={answer.id} src={answer.img} width={"auto"} height={"90%"} />
    </div>
  );
}

export default Button;

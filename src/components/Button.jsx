import { useEffect } from "react";
import { useState } from "react";
import "./Button.css";
import ButtonAnswer from "./ButtonAnswer";

function Button({ answer, setCounter }) {
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
        setShow(true);
      }}
    >
      <img alt={answer.id} src={answer.img} width={"auto"} height={"90%"} />
    </div>
  );
}

export default Button;

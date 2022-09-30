import Button from "./components/Button";
import Tablero from "./components/Tablero";
import { MdCancel } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import errorSound from "./assets/error.mp3";

import information from "./information";
import { useEffect, useState } from "react";

function App() {
  const [question, setQuestion] = useState(0);
  const [counter, setCounter] = useState(0);
  const [questions, setQuestions] = useState(information[0]);
  const [wrong, setWrong] = useState(0);
  const [toggleWrong, setToggleWrong] = useState(false);
  let error = new Audio(errorSound);

  useEffect(() => {
    setQuestions(information[question]);
    setCounter(0);
    setWrong(0);
  }, [question]);

  function showCross(params) {
    let cross = [];
    for (let i = 0; i < wrong; i++) {
      cross.push(<IoClose size={"100%"} color="red" />);
    }
    return cross;
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "45%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {questions.answers
          .filter((value) => value.id < 5)
          .map((answer) => (
            <Button
              key={answer.id}
              answer={answer}
              setCounter={() => setCounter(counter + answer.count)}
            />
          ))}
      </div>
      <div
        style={{
          height: "100%",
          width: "45%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {questions.answers
          .filter((value) => value.id > 4)
          .map((answer) => (
            <Button
              key={answer.id}
              answer={answer}
              setCounter={() => setCounter(counter + answer.count)}
            />
          ))}

        <Tablero
          lenght={information.length}
          setQuestion={setQuestion}
          questionNumber={question}
          counter={counter}
          question={questions.question}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "56%",
          left: "92%",
          color: "rgb(2, 66, 137)",
          fontFamily: "Arial",
          fontSize: 25,
          cursor: "pointer",
        }}
      >
        {wrong}
        <MdCancel
          style={{ marginLeft: "4%" }}
          size={30}
          color="rgb(2, 66, 137)"
          onClick={() => {
            if (wrong < 3) {
              setWrong(wrong + 1);
              error.play();
              setToggleWrong(true);
              setTimeout(() => {
                setToggleWrong(false);
              }, 1000);
            }
          }}
        />
      </div>
      {toggleWrong && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          {showCross().map((cross) => cross)}
        </div>
      )}
    </div>
  );
}

export default App;

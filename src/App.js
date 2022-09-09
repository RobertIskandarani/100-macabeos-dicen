import Button from "./components/Button";
import Tablero from "./components/Tablero";

import information from "./information";
import { useEffect, useState } from "react";

function App() {
  const [question, setQuestion] = useState(0);
  const [counter, setCounter] = useState(0);
  const [questions, setQuestions] = useState(information[0]);

  useEffect(() => {
    setQuestions(information[question]);
    setCounter(0);
  }, [question]);

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
    </div>
  );
}

export default App;

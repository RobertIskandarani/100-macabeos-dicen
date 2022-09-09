import Button from "./components/Button";
import Tablero from "./components/Tablero";

import information from "./information";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState(0);
  const [counter, setCounter] = useState(0);

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
        {information[question].answers
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
        {information[question].answers
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
          question={information[question].question}
        />
      </div>
    </div>
  );
}

export default App;

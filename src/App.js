import Button from "./components/Button";

import information from "./information";
// import { useState } from "react";

function App() {
  // const [question, setQuestion] = useState(0);
  const question = 0;

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
            <Button key={answer.id} answer={answer} />
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
            <Button key={answer.id} answer={answer} />
          ))}
        <div
          style={{
            height: "38%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgb(2, 66, 137)",
            borderRadius: 50,
            border: "4px solid white",
            color: "white",
            fontSize: 32,
            fontFamily: "Arial",
          }}
        >
          {information[question].question}
        </div>
      </div>
    </div>
  );
}

export default App;

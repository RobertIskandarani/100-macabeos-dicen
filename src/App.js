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
        {information[question]
          .filter((value) => value.id < 5)
          .map((answer) => (
            <Button
              key={answer.id}
              img={answer.img}
              number={answer.id}
              onClick={() => {
                console.log("hello");
              }}
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
        {information[question]
          .filter((value) => value.id > 4)
          .map((answer) => (
            <Button
              key={answer.id}
              img={answer.img}
              number={answer.id}
              onClick={() => {
                console.log("hello");
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default App;

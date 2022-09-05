import Button from "./components/Button";

import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";
import macabi from "./assets/macabi.png";
import information from "./information";
import { useState } from "react";

function App() {
  const [question, setQuestion] = useState(0);
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
            <Button img={answer.img} number={answer.id} />
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
            <Button img={answer.img} number={answer.id} />
          ))}
      </div>
    </div>
  );
}

export default App;

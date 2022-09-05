import Button from "./components/Button";

import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";
import macabi from "./assets/macabi.png";
import information from "./information";

function App() {
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
        <Button img={one} number={1} />
        <Button img={two} number={2} />
        <Button img={three} number={3} />
        <Button img={four} number={4} />
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
        <Button img={five} number={5} />
        <Button img={six} number={6} />
        <Button img={macabi} number={"macabi1"} />
        <Button img={macabi} number={"macabi2"} />
      </div>
      {information.map((answer) => {
        answer.map((a) => console.log(a));
        return 0;
      })}
    </div>
  );
}

export default App;

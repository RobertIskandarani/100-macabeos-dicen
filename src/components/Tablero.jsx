import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Tablero({ question, counter, questionNumber, setQuestion, lenght }) {
  return (
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
      }}
    >
      <div
        style={{
          width: "100%",
          height: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 32,
          fontFamily: "Arial",
        }}
      >
        {question}
      </div>
      <div
        style={{
          width: "100%",
          height: "30%",
          display: "flex",
          flexDirection: "row",
          borderTop: "2px solid white",
        }}
      >
        <div
          style={{
            width: "25%",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottomLeftRadius: 42,
          }}
          onClick={() => {
            questionNumber === 0
              ? setQuestion(0)
              : setQuestion(questionNumber - 1);
          }}
        >
          <IoIosArrowBack size={32} color="rgb(2, 66, 137)" />
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontFamily: "Arial",
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          {counter}
        </div>
        <div
          style={{
            width: "25%",
            height: "100%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderBottomRightRadius: 42,
          }}
          onClick={() => {
            questionNumber === lenght - 1
              ? setQuestion(lenght - 1)
              : setQuestion(questionNumber + 1);
          }}
        >
          <IoIosArrowForward size={32} color="rgb(2, 66, 137)" />
        </div>
      </div>
    </div>
  );
}

export default Tablero;

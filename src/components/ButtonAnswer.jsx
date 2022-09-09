import "./Button.css";

function ButtonAnswer({ answer }) {
  return (
    <div className="buttonAnswer">
      <div
        style={{
          width: "80%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {answer.answer}
      </div>
      <div
        style={{
          width: "20%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          borderTopRightRadius: 42,
          borderBottomRightRadius: 42,
          color: "rgb(2, 66, 137)",
          fontWeight: "bold",
          fontSize: 40,
        }}
      >
        {answer.count}
      </div>
    </div>
  );
}

export default ButtonAnswer;

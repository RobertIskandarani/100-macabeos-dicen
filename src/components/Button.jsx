function Button({ img, number, onClick }) {
  return (
    <div
      style={{
        height: "15%",
        width: "100%",
        backgroundColor: "rgb(2, 66, 137)",
        borderRadius: 50,
        border: "4px solid white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <img alt={number} src={img} width={"auto"} height={"90%"} />
    </div>
  );
}

export default Button;

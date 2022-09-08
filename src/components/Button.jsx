import "./Button.css";

function Button({ img, number, onClick }) {
  return (
    <div className="button" onClick={onClick}>
      <img alt={number} src={img} width={"auto"} height={"90%"} />
    </div>
  );
}

export default Button;

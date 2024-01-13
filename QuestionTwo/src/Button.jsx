function Button({text , Click }) {
  return (
    <>
      <button onClick={Click}>{text}</button>
    </>
  );
}

export default Button;
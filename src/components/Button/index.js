function Button({text, size, colour, textCol}) {
    return (
        <div className={size} style={{backgroundColor: `${colour}`, color: `${textCol}`, fontFamily: "Poppins, serif",
  fontWeight: 400}} >{text}</div>
    );
}

export default Button;
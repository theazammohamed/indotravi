// <button text="" size="" colour="" textCol=""/>

// SIZES:
// .btn-medium {
//     padding: 10px 25px;
//     border-radius: 20px;
//   }
//   .btn-big {
//     padding: 15px 30px;
//     border-radius: 25px;
//   }
//   .btn-small {
//     padding: 10px 20px;
//     border-radius: 20px;
//   }
//   .btn-long {
//     padding: 10px 45px;
//     border-radius: 20px;
//   }

function Btn({text, size, colour, textCol}) {
    return (
        <div className={size} style={{backgroundColor: `${colour}`, color: `${textCol}`, fontFamily: "Poppins, serif",
  fontWeight: 400, textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column"}} >{text}</div>
    );
}

export default Btn;
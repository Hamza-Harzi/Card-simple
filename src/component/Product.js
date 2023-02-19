import { useState } from "react";

const Product = (props) => {
  const [ammount, setAmmount] = useState(0);

  const handleIncrement = () => {
    setAmmount(ammount + 1);
    props.handleCart(props.id, ammount + 1);
  };

  const handleDectriment = () => {
    ammount && setAmmount(ammount - 1);
    props.handleCart(props.id, ammount - 1);
  };

  return (
    <div className="containt">
      <img
        src={props.img}
        alt={props.name}
        style={{ height: "100px", width: "100px" }}
      />
      <h3 className="UserInfo-name">{props.name}</h3>
      <p>{props.date}</p>
      <strong className="Comment-age"> ${props.price} </strong>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          height: "20px",
          textAlign: "center",
          justifyContent: "space-around",
        }}
      >
        <button onClick={handleIncrement}> + </button>
        {ammount}
        <button onClick={handleDectriment}> - </button>
      </div>

      <p>
        Total Price:
        <span>${ammount * props.price}</span>
      </p>
    </div>
  );
};

export default Product;

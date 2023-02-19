import React from "react";

const Card = (props) => {
  let totalAmmount = 0;
  let totalPrice = 0;
  props.cart.forEach((element) => {
    totalAmmount += element.ammount;
    totalPrice += element.price * element.ammount;
  });

  return (
    <div className="cardStyle">
      <h1 style={{ textAlign: "center" }}>Card</h1>
      <div></div>
      <div className="sum-quan">
        <div>Quantiti: {totalAmmount}</div>
        <div>
          Sum:
          {totalPrice}
        </div>
      </div>
      {props.cart.map((productData) => {
        return (
          <div
            style={{
              marginBottom: "20px",
              backgroundColor: "white",
              width: "200px",
              marginLeft: "20px",
              marginTop: "20px",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <img
              src={props.img}
              alt={props.name}
              style={{ height: "100px", width: "100px", marginTop: "20px" }}
            />
            <p>name:{productData.name}</p>
            <p>price:{productData.price}</p>
            <p>ammount:{productData.ammount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

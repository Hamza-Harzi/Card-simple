import Products from "./component/Products";
import Card from "./component/Card";
import { useState } from "react";
import { getProductData } from "./component/data";

function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (id, ammount) => {
    const productToHandle = getProductData(id);
    const exist = cart.find((cartProduct) => id === cartProduct.id);

    if (!exist) {
      if (ammount >= 0) {
        setCart([...cart, { ...productToHandle, ammount: ammount }]);
      }
    } else {
      if (ammount <= 0) {
        const newCart = cart.filter((element) => element.id !== id);
        setCart([...newCart]);
      } else {
        exist.ammount = ammount;
        setCart([...cart]);
      }
    }
  };

  return (
    <div>
      <Products handleCart={handleCart} />
      <Card cart={cart}></Card>
    </div>
  );
}

export default App;

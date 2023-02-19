import Product from "./Product";
import { productsArray } from "./data";

const Products = (props) => {
  return (
    <main className="Comment3">
      <h1 className="text">List Of products</h1>
      <div className="productContainte">
        {productsArray.map((productData) => {
          return (
            <Product
              handleCart={props.handleCart}
              key={productData.id}
              {...productData}
            ></Product>
          );
        })}
      </div>
    </main>
  );
};

export default Products;

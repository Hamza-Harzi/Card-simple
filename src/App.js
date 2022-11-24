import Product from "./component/Product";
import data from "./component/data";
import Card from "./component/Card";

function App() {
  return (
    <div>
      <Product list={data} text="List Of products" />
      <Card></Card>
    </div>
  );
}

export default App;

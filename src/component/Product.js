import Users from "./Users";

const Product = (props) => {
  return (
    <main className="Comment3">
      <h1 className="text">{props.text}</h1>
      <div className="productContainte">
        {props.list.map((user) => {
          return <Users key={user.id} {...user}></Users>;
        })}
      </div>
    </main>
  );
};

export default Product;

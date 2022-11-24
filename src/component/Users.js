const Users = (props) => {
  return (
    <div className="containt">
      <div className="UserInfo">
        <img
          src={props.img}
          alt={props.name}
          style={{ height: "100px", width: "100px" }}
        />
        <div className="UserInfo-name">{props.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-age">${props.price}</div>
      <div className="Comment-data">{props.num}</div>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          height: "20px",
          textAlign: "center",
          marginLeft: "30px",
          justifyContent: "space-around",
        }}
      >
        <button>+</button>
        <h3>0</h3>
        <button>-</button>
      </div>
      <div className="addRemove">
        <button>Add</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Users;

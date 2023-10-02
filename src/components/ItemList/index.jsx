import "./itemList.css";

const ItemList = ({ data }) => {
  return (
    <div className="contain">
      <div className="card">
        <img src={data.img} className="card-img-top " alt={data.name} />

        <div className="card-body">
          <h5 className="text card-title">Name: {data.name}</h5>
          <h5 className="text">Price: {data.price}</h5>
          <h5 className="text card-text">Product: {data.category}</h5>
          <button type="button" className="btn btn-outline-dark">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;

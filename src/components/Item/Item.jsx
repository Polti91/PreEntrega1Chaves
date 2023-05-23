import "./Item.css";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top mt-1 imgProducto" alt={nombre} />
        <div className="card-body flex-row m-3">
          <h5 className="card-title text-center">{nombre}</h5>
          <p className="card-text text-center m-1">ID: {id}</p>
          <p className="card-text text-center m-1">Precio: {precio}</p>
          <button className="btn btn-primary d-grid gap-2 col-6 mx-auto">
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

import "./Item.css";

const Item = ({id, nombre, precio, stock, img, description}) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top mt-1" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Descripción: {description}</p>
          <p className="card-text">ID: {id}</p>
          <p className="card-text">Precio: {precio}</p>
          <p className="card-text">Stock disponible: {stock}</p>
          <button href="#" className="btn btn-primary">
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

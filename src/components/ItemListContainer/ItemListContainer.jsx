import "./ItemListContainer.css";
import SombraLuna from "../../assets/imagenes/sombraluna.jpg";
import BovedaAzur from "../../assets/imagenes/bovedaazur.jpg"
import CorteEstrellas from "../../assets/imagenes/cortedeestrellas.jpg"
import Salones from "../../assets/imagenes/salones.jpg"

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <h1 className="text-center">{greeting}</h1>
    <section className="container text-center mt-5">
      <div className="row gap-5">
        <div className="card" style={{ width: "18rem" }}>
          <img src={SombraLuna} className="card-img-top mt-1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cementerios Sombraluna</h5>
            <p className="card-text">Carry +10 +16 y +20</p>
            <a href="#" className="btn btn-primary">
              Comprar
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={CorteEstrellas} className="card-img-top mt-1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Corte de Estrellas</h5>
            <p className="card-text">Carry +10 +16 y +20</p>
            <a href="#" className="btn btn-primary">
              Comprar
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={BovedaAzur} className="card-img-top mt-1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">La Bóveda Azur</h5>
            <p className="card-text">Carry +10 +16 y +20</p>
            <a href="#" className="btn btn-primary">
              Comprar
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={Salones} className="card-img-top mt-1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Salones del Valor</h5>
            <p className="card-text">Carry +10 +16 y +20</p>
            <a href="#" className="btn btn-primary">
              Comprar
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ItemListContainer;

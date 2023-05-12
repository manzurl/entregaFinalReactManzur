import { useCartContext } from "../../context/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function itemCart({ datos }) {
  const { id, name, img, price, cantidad } = datos;

  const { carrito, sumarCantidad, restarCantidad, eliminarRopa } = useCartContext();
  const navigate = useNavigate();

  function restar() {
    if (carrito.length == 1 && cantidad == 1) {
      restarCantidad(datos);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else restarCantidad(datos);
  }

  function eliminar() {
    if (carrito.length == 1) {
      eliminarRopa(datos);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else eliminarRopa(datos);
  }

  return (
    <>
      <div key={id} className="contenedor">
        <img className="contenedor-imagen" src={img} alt={`${name}`} />

        <div className="contenedor-detalle">
          <div>
            <h4 className="">{name}</h4>
            <p className="">{`Cantidad: ${cantidad}`}</p>
            <p className="">{`$ ${price}`}</p>
          </div>
          <div className="contenedor-botones">
            <div className="botones-operacion">
              <button onClick={() => sumarCantidad(datos)} className="">
                <FaPlus />
              </button>
              <button onClick={() => restar()} className="">
                <FaMinus />
              </button>
            </div>
            <button onClick={() => eliminar()} type="button" className="">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

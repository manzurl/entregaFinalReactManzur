import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../cartItem";
export default function cartList({ productos, btn }) {
  const { precioTotal } = useCartContext();

  return (
    <>
      <div className="">
        {productos.map((prod) => {
          return <ItemCart datos={prod} key={prod.id} />;
        })}
        <div className="contenedor-total">
          <div className="">
            <p className="ptotal">Total</p>
            <p>{`$ ${precioTotal}`}</p>
          </div>
          <NavLink to={"/checkout"} className={`${btn} `}>
            Finalizar compra
          </NavLink>
        </div>
      </div>
    </>
  );
}

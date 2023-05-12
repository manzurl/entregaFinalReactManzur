//importamos la imagen del carrito para poder mostrarla dentro de este componente
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import cart from "./assets/cart.svg";
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  const { contador } = useCartContext();
  //creamos el componente cartwidget para luego retornoarlo a la app
  return (
    <Link to={"/cart"}>
      <BsCart4 />
      <span>{contador}</span>
    </Link>
  );
};

export default CartWidget;

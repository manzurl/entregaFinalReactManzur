import CartList from "../cartList";

import { useCartContext } from "../../context/CartContext";

export default function cartContainer() {
  const { carrito } = useCartContext();
  return <CartList productos={carrito} />;
}

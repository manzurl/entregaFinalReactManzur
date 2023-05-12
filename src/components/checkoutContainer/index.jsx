import CheckoutList from "../checkoutList";

import { useCartContext } from "../../context/CartContext";

export default function checkoutContainer() {
  const { carrito } = useCartContext();
  return <CheckoutList carrito={carrito} />;
}

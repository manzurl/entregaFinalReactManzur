import { useEffect } from "react";
import { ProdContextProvider } from "../context/ProdContext";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { CartContextProvider } from "../context/CartContext";
import CheckoutContainer from "../components/checkoutContainer";

export default function checkout() {
  const params = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ProdContextProvider>
      <CartContextProvider>
        <NavBar />
        <CheckoutContainer />
      </CartContextProvider>
    </ProdContextProvider>
  );
}

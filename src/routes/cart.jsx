import { useEffect } from "react";
import { ProdContextProvider } from "../context/ProdContext";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "../context/CartContext";
import CartContainer from "../components/cartContainer";

export default function cart() {
  const params = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ProdContextProvider>
      <CartContextProvider>
        <NavBar />
        <CartContainer />
      </CartContextProvider>
    </ProdContextProvider>
  );
}

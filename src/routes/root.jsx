import { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import { ProdContextProvider } from "../context/ProdContext";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { CartContextProvider } from "../context/CartContext";

export default function root() {
  const params = useParams();
  const isRoute = Boolean(params.categoryId);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ProdContextProvider>
      <CartContextProvider>
        <NavBar />
        <ItemListContainer isRoute={isRoute} category={params.categoryId} />
      </CartContextProvider>
    </ProdContextProvider>
  );
}

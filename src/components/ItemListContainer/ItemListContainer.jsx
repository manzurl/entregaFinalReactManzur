//La funcion de este componente recibe la propiedad GREETING (Saludo) como parametro y lo muestra en la app

import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { useProdContext } from "../../context/ProdContext.jsx";

const ItemListContainer = ({ category, isRoute }) => {
  const { productos, filtroCategoria, AllProducts } = useProdContext();

  useEffect(() => {
    if (isRoute) {
      filtroCategoria(category);
    } else {
      AllProducts();
    }
  }, [category]);
  console.log(productos);
  return (
    <div>
      <ItemList products={productos} />
    </div>
  );
};

export default ItemListContainer;

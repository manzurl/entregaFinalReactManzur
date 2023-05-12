import { useState } from "react";
import "./ItemCount.css";
import { useCartContext } from "../../context/CartContext";

const ItemCount = ({ stock, initial, prod }) => {
  //el componente recibe el stock, el valor inicial y la funcion onAdd como props

  const { agregar } = useCartContext();

  return (
    //creamos el componente con los controles
    <div className="Counter">
      <div className="Controls"></div>
      {prod.stock == 0 ? (
        <button className="">No disponible</button>
      ) : (
        <>
          <button onClick={() => agregar(prod)} type="submit" className="Button">
            Agregar al carrito
          </button>
        </>
      )}
    </div>
  );
  //el ultimo boton ejecuta como callBack la funcion pasada por props, la propiedad disabled valida en caso que no haya estock para que no se ejecute
};

export default ItemCount;

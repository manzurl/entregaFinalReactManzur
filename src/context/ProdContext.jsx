import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { createContext, useContext, useState } from "react";

const ProdContext = createContext();

export const useProdContext = () => useContext(ProdContext);

export function ProdContextProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [originalProd, setOriginalProd] = useState([]);

  const db = getFirestore();

  const itemsCollection = collection(db, "items");
  const AllProducts = () => {
    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs;
        const prod = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(prod);
        setOriginalProd(prod);
      })
      .catch((error) => console.log(error));
  };
  const filtroCategoria = (category) => {
    const q = query(itemsCollection, where("category", "==", category));

    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs;
        const prod = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(prod);
        setOriginalProd(prod);
      })
      .catch((error) => console.log(error));
  };

  const buscar = (input) => {
    if (input) {
      let arrFiltrado = originalProd.filter((elemento) => {
        return (
          elemento.nombre.includes(input.toLowerCase()) ||
          elemento.categoria.includes(input.toLowerCase())
        );
      });
      setProductos(arrFiltrado);
    } else {
      setProductos(originalProd);
    }
  };

  return (
    <ProdContext.Provider
      value={{
        productos,
        filtroCategoria,
        AllProducts,
        buscar,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
}

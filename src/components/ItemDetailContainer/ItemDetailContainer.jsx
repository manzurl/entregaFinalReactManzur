import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = ({ idCategory }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", idCategory);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail producto={product} />
    </div>
  );
};

export default ItemDetailContainer;

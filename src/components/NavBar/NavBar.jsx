import { collection, getDocs, getFirestore } from "firebase/firestore";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../NavBar/assets/Logo-extintores.png";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";

//Creación de un componente
const NavBar = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "categories");

    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs;
        setCategorias(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.log(error));
  }, []);
  //importamos el componente del carrito
  return (
    //Retorna la parte visual del menu
    <nav className="NavBar">
      <Link to="/">
        <img src={logo} />
      </Link>

      <div className="nav-div-botones">
        {categorias.map((prod) => {
          return (
            <div key={prod.key} className="px-1 py-1 ">
              <div>
                <NavLink to={`/category/${prod.name}`}>
                  <button>{prod.name}</button>
                </NavLink>
              </div>
            </div>
          );
        })}
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar; //Exportamos el componente, para luego importarlo en el componente principal (app)

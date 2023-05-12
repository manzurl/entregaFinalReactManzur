import "./index.css";
import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

import CartList from "../cartList";

export default function CheckoutList({ carrito }) {
  const { enviarOrden } = useCartContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      alert("Ingrese un correo electrónico válido.");
      return;
    }
    if (email !== confirmEmail) {
      alert("Los correos electrónicos no coinciden.");
      return;
    }

    enviarOrden(formData);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const [formData, setFormData] = useState({
    nombreCompleto: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));

    if (e.target.id == "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <h2 className="">Información de envío</h2>
          <form onSubmit={handleSubmit} className="">
            <div className="">
              <label className="" htmlFor="nombreCompleto">
                Nombre completo
              </label>
              <input
                className=""
                id="nombreCompleto"
                type="text"
                placeholder="Nombre completo"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="" htmlFor="telefono">
                Número de teléfono
              </label>
              <input
                className=""
                id="telefono"
                type="tel"
                placeholder="Número de teléfono"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="" htmlFor="email">
                Correo electrónico
              </label>
              <input className="" id="email" type="email" placeholder="Correo electrónico" onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label className="" htmlFor="confirmEmail">
                Confirmar correo electrónico
              </label>
              <input
                className=""
                id="confirmEmail"
                type="email"
                placeholder="Confirmar correo electrónico"
                value={confirmEmail}
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="" htmlFor="direccion">
                Dirección de envío
              </label>
              <textarea
                className=""
                id="direccion"
                placeholder="Dirección de envío"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btnEnviar">
              Enviar
            </button>
          </form>
        </div>
        <div className="">
          <h2 className="">Resumen del pedido</h2>
          <CartList productos={carrito} btn={"hidden"} />
        </div>
      </div>
    </div>
  );
}

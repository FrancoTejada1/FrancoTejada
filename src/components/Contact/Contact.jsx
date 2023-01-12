import React from "react";

export default function Contact() {
    return(
        <section id="contacto">
            <h3 className="titulo-seccion">Contactame</h3>
            <div className="contenedor-form">
                <form action="">
                    <div className="fila">
                        <input type="text" placeholder="Nombre Completo" className="input-mitad"/>
                        <input type="text" placeholder="Direccion de Email" className="input-mitad"/>
                    </div>
                    <div className="fila">
                        <input type="text" placeholder="Tema..." className="input-full"/>
                    </div>
                    <div className="fila">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Tu Mensaje ..." className="input-full"/>
                    </div>
                    <input type="submit" value="Enviar Mensaje" className="btn-enviar"/>
                </form>
            </div>
        </section>
    )
}
import React from "react";
import "../css/bootstrap.min.css";
import "../css/style.css";

export function Nota({ props, eliminarNota }) {
    return (
        <li className="col-xs-12 post-it">
            <div>
                <h2>{props.titulo}</h2>
                <p>{props.descripcion}</p>
                <button onClick={() => eliminarNota(props.id)} className="btn btn-danger position-absolute top-0 end-0 m-2"><i className="bi bi-trash"></i>
                </button>
            </div>
        </li>
    );
}
import React, { Fragment, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Nota } from "./Nota"; 
import { v4 as uuid } from "uuid";
import "../css/style.css";

export function Contenido() { 
    const [listadoNotas, setListadoNotas] = useState([
        { id: 1, titulo: 'Jugar', descripcion: 'Pokemon' }, 
        { id: 2, titulo: 'Estudiar', descripcion: 'Estudiar  React' },
        { id: 3, titulo: 'Ver anime', descripcion: 'Inuyasha' }, 
        { id: 4, titulo: 'Cocinar', descripcion: 'empanadas' },
        { id: 5, titulo: 'Ver pelicula', descripcion: 'Demon slayer kimetsu no yaiba castillo infinito' }
    ]);

    const inputTitulo = useRef();
    const inputDescripcion = useRef();

    const agregarNota = () => {
        const inputTituloTexto = inputTitulo.current.value;
        const inputDescripcionTexto = inputDescripcion.current.value;

        setListadoNotas((prevNotas) => {
            const nuevaNota = {
                id: uuid(),
                titulo: inputTituloTexto,
                descripcion: inputDescripcionTexto
            }
            inputTitulo.current.value = '';
            inputDescripcion.current.value = '';
            return [...prevNotas, nuevaNota]
        });
    }

    const eliminarNota = (id) => {
        setListadoNotas((prevNotas) => {
            return prevNotas.filter((nota) => nota.id !== id);
        });
    }

    return (
        <Fragment>
            <div>
                <div className="row mb-4">
                     <h1> Post It Simulator!</h1>
                    <div className="col-md-3">
                        <input ref={inputTitulo} className="form-control" type="text" placeholder="Título"></input>
                    </div>
                    <div className="col-md-5">
                        <input ref={inputDescripcion} className="form-control" type="text" placeholder="Descripción"></input>
                    </div>
                    <div className="col-md-2">
                        <button onClick={agregarNota} className="btn btn-dark">AGREGAR</button>
                    </div>

                </div>
                <div className="row">
                    <ul>
                        {listadoNotas.map((notaActual) => (
                            <Nota
                                key={notaActual.id}
                                props={notaActual}
                                eliminarNota={eliminarNota}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

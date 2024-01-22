import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 d-flex align-items-center bg-light fixed-top p-2 px-4">
                    <h1>Artio</h1>
                    <Link to="/" className="mx-3">Inicio</Link>
                    <Link to="/artistas" className="mx-3">Artistas</Link>
                    <Link to="/contacto" className="mx-3">Contacto</Link>
                    <Link to="/lanzamientos" className="mx-3">Lanzamientos</Link>
                </div>
            </div>
        );
    }
}

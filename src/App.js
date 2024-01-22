import logo from './logo.svg';
import './App.css';

import InicioPagina from './paginas/InicioPagina';
import ContactoPagina from './paginas/ContactoPagina';
import ArtistasPagina from './paginas/ArtistasPagina';
import LanzamientosPagina from './paginas/LanzamientosPagina';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Menu from './componentes/Menu'

function App() {
    return (
        <>
            <Router>
            <Menu />
            <div className="Container pt-5 mt-5">

                    <Routes>
                        <Route path="/" element={<InicioPagina />} />
                        <Route path="/contacto" element={<ContactoPagina />} />
                        <Route path="/artistas" element={<ArtistasPagina />} />
                        <Route path="/lanzamientos" element={<LanzamientosPagina />} />

                    </Routes>
                    
            </div>
            </Router>
        </>
    );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import App from "../App";
import Contato from "../views/Contato/Contato";
import Casamentos from "../views/Casamentos/Casamentos";


const Rotas = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/contato" element={<Contato />} />
                <Route exact path="/casamentos" element={<Casamentos />} />
                <Route path="*" element={<p>Rota não encontrada</p>} />
            </Routes>
        </Router>

    );
};

export default Rotas;
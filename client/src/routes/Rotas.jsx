import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import App from "../App";
import Votos from "../views/Votos/Votos";
import Contato from "../views/Contato/Contato";


const Rotas = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route exact path="/votos" element={<Votos />} />
                <Route exact path="/contato" element={<Contato />} />
                <Route path="*" element={<p>Rota não encontrada</p>} />
            </Routes>
        </Router>

    );
};

export default Rotas;
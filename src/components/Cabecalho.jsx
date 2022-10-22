import React from "react"
import { Link } from "react-router-dom"
import '../assets/css/cabecalho.css'

const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <Link to="/" className="cabecalho__titulo">Comida de Viagem</Link>
        </header>
    )
}

export default Cabecalho

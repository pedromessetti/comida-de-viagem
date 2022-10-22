import React from "react"
import imagem from '../assets/img/sad_chef.png'
import "../assets/css/404.css"

const Pag404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna">
            <img src={imagem} className="naoencontrado-imagem" alt="Ilustração de chefe de cozinha confuso"/>
            <p className="naoencontrado-texto">Ops, essa página não existe!</p>
        </main>
    )
}

export default Pag404

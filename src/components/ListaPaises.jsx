import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { busca } from "../api/api"
import '../assets/css/post.css'

const ListaPaises = () => {


    const [paises, setPaises] = useState([])

    useEffect(() => {
        busca(`/paises`, setPaises)
    }, [])

    return (
        <ul className="lista-categorias container flex">
            {paises.map((pais) => (
                <Link to={`/pais/${pais.id}`}>
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${pais.id}`}>
                        <img className="lista-paises--imagem" src={ require(`../assets/img/bandeiras/${pais.id}.png`).default } alt={`Bandeira ${pais.nome}`}/>
                        <br/>
                        <span>{pais.nome}</span>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default ListaPaises

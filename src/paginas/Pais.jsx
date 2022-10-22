import React, { Fragment } from "react"
import { Route, useParams, useRouteMatch } from "react-router-dom"
import ListaPost from "../components/ListaPost"
import ListaPaises from "../components/ListaPaises"
import "../assets/css/post.css"


const Pais = () => {

    const { id } = useParams()
    const { path } = useRouteMatch()

    return (
        <Fragment>
            <div className="container">
                <div className="titulo-pagina">
                    <h2>País selecionado:</h2>
                    <img className="lista-paises--imagem titulo-imagem" src={ require(`../assets/img/bandeiras/${id}.png`).default } alt={`Bandeira ${id}`}/>
                </div>
            </div>

            <ListaPaises />

            <Route exact path={`${path}/`}>
                <ListaPost url={`/posts?pais=${id}`}/>
            </Route>

        </Fragment>
    )
}

export default Pais

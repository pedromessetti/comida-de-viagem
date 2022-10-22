import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { busca } from "../api/api"
import '../assets/css/cartao.css'


const ListaPost = ( { url } ) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        busca(url, setPosts)
    }, [url])

    return (
        <section className="posts container">
            {posts.map((post) => (
                <Link className="cartao-post" to={`/posts/${post.id}`}>
                    <article className="cartao-post__container" key={post.id}>
                        <img className="cartao-post__imagem" src={ require(`../assets/img/comidas/${post.id}.jpg`).default } alt="Imagem da comida"/>
                        <h3 className="cartao-post__titulo">{post.title}</h3>
                        <p className="cartao-post__meta">{post.metadescription}</p>
                    </article>
                </Link>
            ))}
        </section>
    )
}

export default ListaPost

import React from 'react'
import ListaPaises from '../components/ListaPaises'
import ListaPost from '../components/ListaPost'

const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Selecione o páis e veja as comidas mais típicas da região</h2>
      </div>

      <ListaPaises />
      <ListaPost url={'/posts'} />

    </main>
  )
}

export default Home

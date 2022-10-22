import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './assets/css/base/base.css'

import Home from './paginas/Home'
import Pag404 from './paginas/Pag404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import Pais from './paginas/Pais'


function App() {
  return (

    <BrowserRouter>

      <Cabecalho />
      
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/pais/:id'>
          <Pais />
        </Route>

        <Route path='/posts/:id'>
          <Post />
        </Route>

        <Route>
          <Pag404 />
        </Route>

      </Switch>

    </BrowserRouter>

  )
}

export default App

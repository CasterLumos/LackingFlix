import React from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
function Pagina404() {
    return (
      <PageDefault>
        <h1>
        Página 404- Não encontrado.
        </h1>
            
        <Link to="/">
          Ir para a Home
        </Link>

      </PageDefault>
    )
  }

export default Pagina404
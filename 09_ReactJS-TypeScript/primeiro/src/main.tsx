import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import Renderizacao from './renderizacao.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Renderizacao />
  </React.StrictMode>,
)

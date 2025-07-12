import React from 'react'
import ReactDOM from 'react-dom/client'
import { Filmes } from './pages/Filmes'
import './css/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Filmes />
  </React.StrictMode>,
)

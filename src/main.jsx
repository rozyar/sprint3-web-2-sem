import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import PainelAcidente from './routes/PainelAcidente/PainelAcidente.jsx'
import Error404 from './routes/Error/Error404.jsx'
import VizualizarVeiculo from './routes/VizualizarVeiculo/VizualizarVeiculo.jsx'
import VizualizarCategoria from './routes/VizualizarCategoria/VizualizarCategoria.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

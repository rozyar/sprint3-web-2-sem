import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import PainelAcidente from './routes/PainelAcidente/PainelAcidente.jsx'
import Error404 from './routes/Error/Error404.jsx'
import VizualizarVeiculo from './routes/VizualizarVeiculo/VizualizarVeiculo.jsx'
import VizualizarCategoria from './routes/VizualizarCategoria/VizualizarCategoria.jsx'


const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error404 />,
    children:[
      {path: '/', element: <Home />},
      {path: '/painelAcidente', element: <PainelAcidente />},
      {path: '/painelAcidente/:categoria', element: <VizualizarCategoria />},
      {path: '/painelAcidente/:categoria/:id', element: <VizualizarVeiculo />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

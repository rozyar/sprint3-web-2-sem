import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {

  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <>
      {!isHome && <Header />}

      <Outlet />
      
      {!isHome && <Footer /> }
    </>
  )
}

export default App
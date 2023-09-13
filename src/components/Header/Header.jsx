import 'react'
import './Header.css'
import Porto from '../../assets/PortoH.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="header-container"> 
                
                <div className="header-content">
                    <img src={Porto} alt="cart" width={60} height={60}/>
                    <h1>Painel de Acidente</h1>
                </div>
            
                
                
            </div>
            
            
    
        </>
    )
}
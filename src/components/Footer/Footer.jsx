import 'react'
import './Footer.css'
import Porto from '../../assets/Porto.svg'


export default function Footer() {
    return (
        <>
            <div className='footer-container'>
                
                <div className='footer-logo'>
                    <img src={Porto} alt="" width={138} height={32} />
                </div>
                    <p>@© 2023 Porto Seguro. Todos os direitos reservados.</p>
            </div>
        </>
    )
}

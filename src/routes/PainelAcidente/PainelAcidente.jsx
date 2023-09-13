import 'react'
import Carros from '../../components/Carros/Carros'
import './PainelAcidente.css'
import arrow from '../../assets/Arrow.png'
import  {ListCarros}  from '../../components/Carros/ListCarros'
import { Link } from 'react-router-dom'

export default function PainelAcidente() {

    return (
        <>
            <div className='painelAcidente-container'>
                <div className='painelAcidente-titulo'>
                    <h1>Escolha o tipo do Veículo</h1>
                </div>

                <div className="painelAcidente-categorias">

                {ListCarros.map((carro) => {
                    return (
                        <Carros
                        key={carro.categoria}
                        img={carro.img}
                        categoria={carro.categoria}
                        />
                        )
                    })}
                    </div>
                    <div className="painelAcidente-retorno">
                        <Link to={`/`}><img src={arrow} alt={arrow} height={92} width={92}/></Link>
                    </div>
            </div>
        </>
    )
}
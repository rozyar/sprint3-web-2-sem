import 'react'
import arrow from '../../assets/Arrow.png'
import { Link, useParams } from 'react-router-dom'
import { ListCarros as list} from '../../components/Carros/ListCarros'
import CarrosDetalhados from '../../components/Carros/CarrosDetalhados/CarrosDetalhados'
import './VizualizarCategoria.css'

export default function VizualizarCategoria() {
    const {categoria} = useParams()

    const carros = list.find((p) => p.categoria === categoria)
    
    return (
        <>
            <div className='vizualizarCategoria-container'>
                <div className='visualizarCategoria-titulo'>
                    <h1>Veículos na Categoria</h1>
                </div>
                <div className='visualizarCategoria-categoria'>
                    {carros.veiculos.map((cars) => {
                        return(
                            <CarrosDetalhados key={cars.id} categoria={categoria} {...cars}/>
                        )
                    })}
                </div>
                <div className="visualizarCategoria-retorno">
                        <Link to={`/painelAcidente`}><img src={arrow} alt={arrow} height={92} width={92}/></Link>
                </div>
            </div>
        </>
    )
}
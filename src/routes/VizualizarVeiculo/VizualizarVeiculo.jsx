import 'react'
import arrow from '../../assets/Arrow.png'
import { Link, useParams } from 'react-router-dom'
import { ListCarros  as list} from '../../components/Carros/ListCarros'
import './VizualizarVeiculo.css'
import Guincho from '../../components/Carros/Guincho/Guincho'
import CarrosDetalhados from '../../components/Carros/CarrosDetalhados/CarrosDetalhados'

export default function VizualizarVeiculo() {
    const {categoria, id} = useParams()

    const carros = list.find((p) => p.categoria === categoria)

    const carro = carros.veiculos.find((p) => p.id === parseInt(id));
    return (
        <>
            <div className='vizualizarVeiculo-container'>
                <div className="visualizarVeiculo-titulo">
                    <h1>Requisitar Guincho</h1>
                </div>
                <div className="visualizarVeiculo-veiculo">
                    <Guincho />
                </div>
                <div className="visualizarVeiculo-titulo-para">
                    <h1>Para</h1>
                </div>
                <div className='visualizarVeiculo-categoria'>
                    <CarrosDetalhados {...carro} showInputs={true}/>
                </div>
                <div className="visualizarVeiculo-retorno">
                        <Link to={`/painelAcidente/${categoria}`}><img src={arrow} alt={arrow} height={92} width={92}/></Link>
                </div>
            </div>
        </>
    )
}
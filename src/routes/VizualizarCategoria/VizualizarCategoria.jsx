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
            
        </>
    )
}
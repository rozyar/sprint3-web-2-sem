import 'react'
import './CarrosDetalhados.css'
import { Link, useLocation, useParams} from 'react-router-dom'

export default function CarrosDetalhados(props) {
    const { showInputs } = props;
    
    return(
        <>
            <div key={props.id} className='carrosDetalhados-container'>
                    <div className='carrosDetalhados-titulo'>
                        <h1>{props.modelo}</h1>
                    </div>

                    <div className='carrosDetalhados-content'>
                        <div className="carrosDetalhados-content-image">
                            <img src={props.img} alt={props.categoria} width={200} height={130}/>
                        </div>
                        <div className="carrosDetalhados-content-info">
                            <h3><strong>Modelo:</strong>{props.modelo}</h3>
                            <h3><strong>Peso:</strong>{props.peso}</h3>
                            <h3><strong>Altura:</strong>{props.altura}</h3>
                        </div>
                        <div className="carrosDetalhados-content-info">
                            <h3><strong>Ano:</strong>{props.ano}</h3>
                            <h3><strong>Largura</strong>{props.peso}</h3>
                            <h3><strong>Comprimento:</strong>{props.altura}</h3>
                        </div>
                    </div>
            
                {!showInputs && (
                    <div className='carrosDetalhados-buttons'>
                        <input className='carrosDetalhados-submit-editar' type="submit" value='Editar'/>
                       <Link to={`/painelAcidente/${props.categoria}/${props.id}`}> <input className='carrosDetalhados-submit' type="submit" value='Selecionar'/></Link> 
                    </div>
                    )}
            </div>
        </>
    )
}
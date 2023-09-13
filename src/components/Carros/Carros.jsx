import { Link } from "react-router-dom";
import './Carros.css';

export default function Carros(props) {
  return (

    <>
       <div className="carros-card">
          <div className="carros-card-image">
              <img src={props.img} alt={props.categoria}/>
          </div>
          <h3>{props.categoria}</h3>
            <Link to={`/painelAcidente/${props.categoria}`}><input className='carros-submit' type="submit"  readOnly value='Selecionar'/></Link>
       </div>
      
    </>
  );
}
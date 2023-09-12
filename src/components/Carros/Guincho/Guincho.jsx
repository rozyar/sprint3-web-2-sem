import './Guincho.css';
import tow from '../../../assets/tow-truck.jpg'
import { useState } from "react";
export default function Guincho(props) {
    const [buttonText, setButtonText] = useState('Requisitar');
    const [buttonColor, setButtonColor] = useState('');

  
    const handleButtonClick = () => {
        if (buttonText === 'Requisitar') {
          setButtonText('Requisitado!');
          setButtonColor('green');
        } else {
          setButtonText('Requisitar');
          setButtonColor('');
        }
      };
      return (
          
          <>
       <div className="guincho-card">
          <div className="guincho-card-image">
              <img src={tow} alt={tow}/>
          </div>
          <div className="guincho-card-content">
            <h3>Guincho do Alexandre</h3>
            <button
            className='guincho-submit'
            onClick={(e) => {
                e.preventDefault();
                handleButtonClick();
            }}
            style={{backgroundColor: buttonColor}}>
            {buttonText}
          </button>
          </div>
       </div>
      
    </>
  );
};
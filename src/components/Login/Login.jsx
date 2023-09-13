import 'react'
import './Login.css'
import { Link } from 'react-router-dom'

import Porto from '../../assets/Porto.svg'
import BackgroundLogin from './BackgroundLogin/BackgroundLogin'
import { useState } from 'react'

export default function Login() {
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')


    return (
        <>
            <div className='login-container'>

                <div className='login-area'>>
                    <div className='login-logo'>
                        <img src={Porto} alt="Porto Logo" width={138} height={32} />
                    </div>

                    <div className='login-form'>
                        <div className='login-form-title'>
                            <h1>Bem vindo a Porto Seguro</h1>
                            <p>Ainda não possui uma conta? </p>
                        </div>
                        <div className='login-form-input'>
                            <input className='login-user-input' type="text" name='cpf' value={cpf} onChange={(e) =>{e.preventDefault; setCpf(e.target.value)}} maxLength={11} placeholder='Digite seu cpf'/>
                            <input className='login-user-input' type="password" name='cpf' value={password} onChange={(e) => {e.preventDefault; setPassword(e.target.value)}} maxLength={11} placeholder='Digite sua senha'/>
                            <Link to={'/painelAcidente'}><input className='login-user-input-submit' type="submit" value='Login'/></Link>
                        </div>
                        <div className="login-form-terms">
                        <p>Ao se inscrever, você concorda com nossos <u>Termos</u> e <u>Política de Privacidade</u>.</p>
                        </div>
                    </div>
                </div>

            </div>
            <BackgroundLogin />
        </>
    )
}
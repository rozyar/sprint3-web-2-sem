import 'react'
import './Login.css'

export default function Login() {
    
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
                    </div>
                </div>

            </div>
        </>
    )
}
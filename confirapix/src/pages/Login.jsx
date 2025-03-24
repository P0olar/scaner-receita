import React from 'react'
import bancosconct from '../assets/img/banco.png';

const Login = () => {
    return (
        <>
            <div className='container'>
                <div className="banco-cad">
                    <img src={bancosconct} className="bancologin" />
                    <img src={bancosconct} className="bancologin" />
                    <img src={bancosconct} className="bancologin" />
                    <img src={bancosconct} className="bancologin" />
                </div>
            </div>
        </>
    )
}

export default Login
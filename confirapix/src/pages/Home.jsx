import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <>
        <p>Entre na sua Conta </p>
        <Link to="/Login">Aqui</Link>
        <p>Scaneamento</p>
        <Link to="/Index">Aqui</Link>
        
        </>
    )
}

export default Home
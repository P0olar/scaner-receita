import React from 'react'

const Form = () => {
    return (
        <>
            <p className="titlelogin">Login</p>
            <form className="form" action="login.php" method="POST">
                <div className="userlogin">
                    <span>Usuario</span><br />
                    <input type="text" name="username" placeholder="Digite o Usuário" id="username" required /><br />
                </div>
                <div className="userlogin">
                    <span>Senha</span><br />
                    <input type="password" name="password" id="password" placeholder="Digite a Senha" required /><br />
                </div>
                <div className="bnt-login">
                    <span><a href="reset.php">Esqueceu a Senha?</a></span><br />
                    <input className="submit" type="submit" value="Entrar" /><br />
                    <span><a href="Cadastro.html">Não tem Conta? Crie Aqui</a></span>
                </div>
            </form>
        </>
    )
}

export default Form
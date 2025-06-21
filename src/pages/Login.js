
import React, {useState} from "react";
import styled from "styled-components";
import Header from "../components/HeaderMain";
import Footer from "../components/Footer";

const Conteiner = styled.div`
    max-width: 400px;
    margin: 5rem auto;
    background-color: transparent;
    border: 2px solid #d0ebec;
    border-radius: 50px;
    padding: 10px 20px;
    color: #fffde9;
    text-align: center;
    font-size: 14px;
    box-shadow: 0px 4px 4px #00000040;
`;

const Login = ()=>{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {
        console.log('Login', {email, senha});
    };

    return (
        <>
            <Header />
            <Conteiner>
                <h2>Login</h2>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                <button onClick={handleLogin}>Entrar</button>
            </Conteiner>
            <Footer />
        </>
    );
};

export default Login;
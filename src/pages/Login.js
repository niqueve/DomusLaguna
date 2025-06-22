
import React, {useState, useEffect} from "react";
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

const Checkdiv = styled.div`
    display: flex;
    align-items: 'center';
    padding: 1rem;
    color: #00000050;
`;

const Login = ()=>{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrarEmail, setLembrarEmail] = useState(false);

    useEffect(() => {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail){
            setEmail(savedEmail);
            setLembrarEmail(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(lembrarEmail) {
            localStorage.setItem('userEmail', email);
        }else{
            localStorage.removeItem('userEmail');
        }
    };

    return (
        <>
            <Header />
            <Conteiner>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" required />
                <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} autoComplete="current-password" required/>
                <Checkdiv>
                    <input  type="checkbox" id="lembrarEmail" checked={lembrarEmail} onChange={(e) => setLembrarEmail(e.target.checked)}/>
                    <label htmlFor="lembrarEmail">Lembrar meu email</label>
                </Checkdiv>
                <button type="submit">Entrar</button>
                </form>
            </Conteiner>
            <Footer />
        </>
    );
};

export default Login;
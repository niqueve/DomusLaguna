
import React, {useState} from "react";
import styled from "styled-components";
import Header from "../components/HeaderMain";
import Footer from "../components/Footer";

const Conteiner = styled.div`
    max-width: 400;
    margin: 5rem auto;
`;

const Register = () => {
    const [form, setForm] = useState({nome: '', email: '',  senha: ''});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleRegister = () => {
        console.log('Cadastro', form);
    };

    return (
        <>  
            <Header />
            <Conteiner>
                <h2>Cadastro</h2>
                <input name="nome" placeholder="Nome" onChange={handleChange} />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} />
                <input name="senha" type="password" placeholder="Senha" onChange={handleChange} />
                <button onClick={handleRegister}>Cadastrar</button>
            </Conteiner>
            <Footer />
        </>
    );
};

export default Register;
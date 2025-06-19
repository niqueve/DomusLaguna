
import React, {useState} from "react";
import styled from "styled-components";

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
        <Conteiner>
            <h2>Cadastro</h2>
            <input name="nome" placeholder="Nome" onChange={handleChange} />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} />
            <input name="senha" type="password" placeholder="Senha" onChange={handleChange} />
            <button onClick={handleRegister}>Cadastrar</button>
        </Conteiner>
    );
};

export default Register;
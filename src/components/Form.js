
import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    overflow: hidden;
    padding: 3rem;
`;

const StyledH2 = styled.h2`
    color: #2E8B57;
    font-size: 2rem;
    padding: 0.25rem;
`;

const StyledP = styled.p`
    color: gray;
    font-size: 1.5rem;
    padding: 0.25rem;
`;

const StyledButton = styled.button`
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #2E8B57;
    color: white;
    font-size: 1em;
    transition: background-color 0.3s ease;
`;

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 2rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    margin: 1rem;
`;

const StyledInput = styled.input`
    font-size: 1rem;
    padding: 0.5rem;
`;

const Form = () => {
    const [form, setForm] = useState({nome: '', email: ''});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleRegister = () => {
        console.log('Cadastro', form);
    };

    return (
        <Container>
            <h1>Aqui ajudamos você a</h1>
            <StyledH2>escolher o seu lugar</StyledH2>
            <StyledP>Explore nosso marketplace...</StyledP>
            <StyledForm>
                <StyledInput name="nome" placeholder="Nome" onChange={handleChange} />
                <StyledInput name="email" type="email" placeholder="Email" onChange={handleChange} />
            </StyledForm>
            <StyledButton onClick={handleRegister}>Enviar</StyledButton>
        </Container>
    )
};

export default Form


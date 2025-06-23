import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../components/HeaderMain";
import Footer from "../components/Footer";

// NOVO: Wrapper para centralizar o Conteiner na tela
const LoginWrapper = styled.div`
  min-height: calc(100vh - 120px); // espaço total menos header/footer
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

// Bloco de login
const Conteiner = styled.div`
  background-color: #d4eef0;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: #1c1c1c;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 600;
  }

  input {
    padding: 0.75rem;
    border-radius: 10px;
    border: 1px solid #888;
    margin-bottom: 1.2rem;
    font-size: 1rem;
  }

  button {
    background-color: #284e5c;
    color: white;
    padding: 0.9rem;
    font-size: 1rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: 700;

    &:hover {
      background-color: #1e3c47;
    }
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 12px 0;
  border: none;
  border-radius: 10px;
  background-color: #f1f1f1;
  color: #333;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 2px solid #2575fc;
    background-color: #fff;
  }
`;

const Checkdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ddd;
  margin: 10px 0;
  font-size: 13px;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #2575fc;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a5edb;
  }
`;

// NOVO: Estilo dos links abaixo do botão
const ExtraLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.9rem;

  a {
    color: #284e5c;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrarEmail, setLembrarEmail] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setLembrarEmail(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (lembrarEmail) {
      localStorage.setItem("userEmail", email);
    } else {
      localStorage.removeItem("userEmail");
    }

    // login ou redirecionamento aqui
  };

  return (
    <>
      <Header />
      <LoginWrapper>
        <Conteiner>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <StyledInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
            <StyledInput
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
              required
            />
            <Checkdiv>
              <input
                type="checkbox"
                id="lembrarEmail"
                checked={lembrarEmail}
                onChange={(e) => setLembrarEmail(e.target.checked)}
              />
              <label htmlFor="lembrarEmail">Lembrar meu email</label>
            </Checkdiv>
            <StyledButton type="submit">Entrar</StyledButton>
            <ExtraLinks>
              <Link to="/recover">Esqueci minha senha</Link>
              <Link to="/register">Criar uma conta</Link>
            </ExtraLinks>
          </form>
        </Conteiner>
      </LoginWrapper>
      <Footer />
    </>
  );
};

export default Login;

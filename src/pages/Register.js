import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/HeaderMain";
import Footer from "../components/Footer";

// ENVOLVE tudo: header + main + footer
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color:rgb(249, 250, 250);
`;

// Centraliza o conteúdo principal
const CadastroWrapper = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

// Container do formulário
const Conteiner = styled.div`
 background-color: #d4eef0;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
`;

// Alternância comprador/vendedor
const Toggle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  button {
    flex: 1;
    padding: 10px;
    border: none;
    background: #ddd;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &.active {
      background: #284e5c;
      color: white;
    }
  }
`;

// Estilo do formulário
const FormSection = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  button {
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    background: #284e5c;
    color: white;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #284e5c;
    }
  }
`;

const Register = () => {
  const [tipo, setTipo] = useState("comprador");
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(`Cadastro (${tipo}):`, form);
    // Enviar dados para o backend aqui
  };

  return (
    <PageWrapper>
      <Header />
      <CadastroWrapper>
        <Conteiner>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Cadastro</h2>

          <Toggle>
            <button
              className={tipo === "comprador" ? "active" : ""}
              onClick={() => setTipo("comprador")}
              type="button"
            >
              Sou comprador
            </button>
            <button
              className={tipo === "vendedor" ? "active" : ""}
              onClick={() => setTipo("vendedor")}
              type="button"
            >
              Sou vendedor
            </button>
          </Toggle>

          <FormSection onSubmit={handleRegister}>
            <input
              name="nome"
              placeholder={tipo === "vendedor" ? "Nome da empresa" : "Nome completo"}
              value={form.nome}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="senha"
              type="password"
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange}
              required
            />
            <button type="submit">
              Cadastrar como {tipo}
            </button>
          </FormSection>
        </Conteiner>
      </CadastroWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default Register;

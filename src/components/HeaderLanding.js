import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Brand = styled(Link)`
  text-decoration: none;
  color: #2E8B57;
  display: flex;
  flex-direction: column;
  line-height: 1.1;

  h1 {
    font-size: 1.6rem;
    margin: 0;
    font-weight: 800;
  }
`;


const NavGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;

  li a {
    text-decoration: none;
    color: #333;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      color: #2E8B57;
      background-color: #f0f8f4;
      border-radius: 6px;
      padding: 0.2rem 0.4rem;
    }
  }
`;

const AuthLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    color: #2E8B57;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
      color: #205c3d;
    }
  }

  span {
    color: #2E8B57;
  }
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  span {
    width: 25px;
    height: 3px;
    background-color: #2E8B57;
    border-radius: 2px;
    transition: 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Header = () => {
  return (
    <Navbar>
      <Brand to="/home">
        <h1>Domus</h1>
        <h1>Laguna</h1>
      </Brand>

      <NavGroup>
        <Menu>
          <li><Link to="/home">Home</Link></li>
          <li><a href="#sobre">Sobre Nós</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><Link to="/login">Já tem uma conta?</Link></li>
        </Menu>

        <AuthLinks>
          <Link to="/login">Entrar</Link>
          <span>|</span>
          <Link to="/register">Cadastrar</Link>
        </AuthLinks>
      </NavGroup>

      <MenuButton aria-label="Abrir menu">
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
    </Navbar>
  );
};

export default Header;

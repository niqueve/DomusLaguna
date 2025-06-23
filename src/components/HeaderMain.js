
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fffde9;
    padding: 10px 40px;
    box-shadow: 0px 4px 4px #00000040;
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="navbar-left">
                <Link to='/home'><img src={`${process.env.PUBLIC_URL}/Logo.png`} alt="Logo" className="logo" /></Link>
                <Link to='/home'><span className="site-name">Domus Laguna</span></Link>
                </div>

                <nav className="navbar-right">
                    <div className="nav-links">
                        <a href="#alugar">Alugar</a>
                        <a href="#comprar">Comprar</a>
                        <a href="#anunciar">Anunciar</a>
                        <a href="#preco">Preço</a>
                        <a href="#links">Links úteis</a>
                        <Link to="/favorites">Favoritos</Link>
                        <a href="#ajuda">Ajuda</a>
                    </div>
                    <Link to='/login'>
                    <button className="login-button">Entrar</button>
                    </Link>

                    <div className="menu-toggle" id="menu-toggle">☰</div>
                </nav>

                <div className="mobile-menu" id="mobile-menu">
                    <a href="#alugar">Alugar</a>
                    <a href="#comprar">Comprar</a>
                    <a href="#anunciar">Anunciar</a>
                    <a href="#preco">Preço</a>
                    <a href="#links">Links úteis</a>
                    <Link to="/favoritos">Favoritos</Link>
                    <a href="#ajuda">Ajuda</a>
                <div className="login-button"><Link to='/login'>Entrar</Link></div>
            </div>
        </StyledHeader>
    );
};

export default Header;

import React from "react";
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color:rgb(227, 229, 228);
    color:rgb(0, 0, 0);
    text-align: center;
    padding: 0.8rem 0;
    margin-top: 0;
`;

const Footer = () => <StyledFooter>&copy; 2024 Domus Laguna. Todos os direitos reservados.</StyledFooter>;

export default Footer;
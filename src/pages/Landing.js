import React from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo'


const Main = styled.main `
    margin: 0;
`;

const Landing = () => {

    return(
        <>
            <Header />
            <Main>
                <ContactInfo />
            </Main>
            <Footer />
        </>    
    )
}

export default Landing;
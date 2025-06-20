
import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Carousel from "./Carousel";


const imagens = [
    require('../assets/images/casa.jpeg'),
    require('../assets/images/casa1.jpeg'),
    require('../assets/images/casa2.jpeg'),
    require('../assets/images/casa3.jpeg'),
];

const HeroDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const HeroSection = () => {
    return (
        <HeroDiv>
            <Form />
            <Carousel images={imagens} />
        </HeroDiv>    
    )
};

export default HeroSection;
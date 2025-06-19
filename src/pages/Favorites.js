import React, { useState, useEffect, useMemo} from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';

const Main = styled.main `
    padding: 2rem;
`;

const Favorites = () => {
    const [properties, setProperties] = useState([]);

    useEffect (()=> {
        
    })
}
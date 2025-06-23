import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 1rem auto;
  position: relative;
  border: 2px solid #2E8B57;
  border-radius: 8px;
  overflow: hidden;
  font-family: Arial, sans-serif;
`;

const MapArea = styled.div`
  width: 100%;
  height: 60vh;
`;

const Controls = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #2E8B57;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ToggleButton = styled.button`
  background-color: ${({ active }) => (active ? "#fff" : "#2E8B57")};
  color: ${({ active }) => (active ? "#2E8B57" : "#fff")};
  border: 2px solid #fff;
  padding: 8px 10px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? "#e6fff0" : "#1f6b46")};
  }
`;

const Label = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: white;
  text-align: center;
`;

const SelecaoContainer = styled.div`
  padding: 15px;
  background: #f4fff7;
  border-top: 1px solid #ccc;
`;

const BairroButton = styled.button`
  margin: 5px;
  padding: 6px 12px;
  border-radius: 20px;
  border: 2px solid #2E8B57;
  background-color: ${({ selected }) => (selected ? "#2E8B57" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#2E8B57")};
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#1a5edb" : "#dff5e6")};
  }
`;

const ListaFavoritos = styled.ul`
  padding: 10px 20px;
  list-style: disc;
  margin: 0;
`;

const Mensagem = styled.p`
  margin: 0;
  color: #333;
`;

const bairrosLista = [
  "Centro",
  "Flamengo",
  "Itapeba",
  "Mumbuca",
  "São jose",
  "Itaipuaçu",
  "Caju",
  "Caxito",
];

const Map = ({ lat = -22.93592061, lng = -42.8249576, zoom = 12 }) => {
  const mapRef = useRef(null);
  const [mostrarBairros, setMostrarBairros] = useState(false);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosSalvos = localStorage.getItem("bairrosFavoritos");
    if (favoritosSalvos) {
      setFavoritos(JSON.parse(favoritosSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bairrosFavoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (bairro) => {
    if (favoritos.includes(bairro)) {
      setFavoritos(favoritos.filter((b) => b !== bairro));
    } else {
      setFavoritos([...favoritos, bairro]);
    }
  };

  useEffect(() => {
    const loadMapScript = () => {
      if (window.google) {
        initMap();
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBlUeJOvuMtpbQBN6nZFhTd0q2G3hUWbD4";
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom,
      });

      const cityMarkers = [
        { lat: -22.95, lng: -42.9, title: "Espraiado" },
        { lat: -22.87, lng: -42.78, title: "Ubatiba" },
        { lat: -22.93, lng: -42.82, title: "Centro" },
      ];

      cityMarkers.forEach((loc) => {
        new window.google.maps.Marker({
          position: { lat: loc.lat, lng: loc.lng },
          map,
          title: loc.title,
        });
      });
    };

    loadMapScript();
  }, [lat, lng, zoom]);

  return (
    <Container>
      <MapArea ref={mapRef} />

      <Controls>
        <Label>Bairros</Label>
        <ToggleButton
          active={mostrarBairros}
          onClick={() => setMostrarBairros(!mostrarBairros)}
        >
          {mostrarBairros ? "Ocultar Seleção" : "Selecionar Bairros"}
        </ToggleButton>

        <ToggleButton
          active={mostrarFavoritos}
          onClick={() => setMostrarFavoritos(!mostrarFavoritos)}
        >
          {mostrarFavoritos ? "Ocultar Favoritos" : "Ver Favoritos"}
        </ToggleButton>
      </Controls>

      {mostrarBairros && (
        <SelecaoContainer>
          {bairrosLista.map((bairro) => (
            <BairroButton
              key={bairro}
              selected={favoritos.includes(bairro)}
              onClick={() => toggleFavorito(bairro)}
            >
              {bairro}
            </BairroButton>
          ))}
        </SelecaoContainer>
      )}

      {mostrarFavoritos && (
        <SelecaoContainer>
          {favoritos.length === 0 ? (
            <Mensagem>Você ainda não selecionou nenhum bairro favorito.</Mensagem>
          ) : (
            <ListaFavoritos>
              {favoritos.map((bairro) => (
                <li key={bairro}>{bairro}</li>
              ))}
            </ListaFavoritos>
          )}
        </SelecaoContainer>
      )}
    </Container>
  );
};

export default Map;

import React from "react";

import { FiLogIn } from "react-icons/fi";

import {
  Container,
  ContainerCentral,
  Image,
  ContainerInformation,
  Title,
  StyledLink,
  ContainerTitle,
  ContainerButton,
  ContainerImage,
} from "./styles";

const Home = () => {
  return (
    
    <Container>      
      <Image style={{width:"180px" , marginBottom: "35%"}}className=''src="images/logo-verde.png"></Image>      
      <ContainerCentral>
        <ContainerImage>
          <Image src="/images/hire.svg"></Image>
        </ContainerImage>

        <ContainerInformation>
          <ContainerTitle>
            <Title>Gerenciamento de Funcionários</Title>
          </ContainerTitle>

          <ContainerButton>
            <StyledLink to="/funcionarios">
              Entrar <FiLogIn />
            </StyledLink>
          </ContainerButton>
        </ContainerInformation>
      </ContainerCentral>
    </Container>
  );
};

export default Home;

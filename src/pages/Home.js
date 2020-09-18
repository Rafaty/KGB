import React from "react";

import {
  Container,
  ContainerCentral,
  Image,
  ContainerInformation,
  Title,
  Button,
} from "../components/Home/styles";

const Home = () => {
  return (
    <Container>
      <ContainerCentral>
        <Image src="/images/women.svg"></Image>

        <ContainerInformation>
          <Title>Gerenciamento de Funcionários</Title>

          <Button>Entrar</Button>
        </ContainerInformation>
      </ContainerCentral>
    </Container>
  );
};

export default Home;

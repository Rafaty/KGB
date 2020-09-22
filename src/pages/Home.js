import React from "react";
import {Link} from 'react-router-dom';


import { FiLogIn } from "react-icons/fi";

import {
  Container,
  ContainerCentral,
  Image,
  ContainerInformation,
  Title,
  SubTitle,
  Button,
  ContainerTitle,
  ContainerButton,
  ContainerImage,
} from "../components/Home/styles";

const Home = () => {
  return (
    <Container>
      <ContainerCentral>
        <ContainerImage>
          <Image src="/images/hire.svg"></Image>
        </ContainerImage>

        <ContainerInformation>
          <ContainerTitle>
            <Title>Gerenciamento de Funcionários</Title>
           
          </ContainerTitle>

          <ContainerButton>
            <Link to='/funcionarios'>
            <Button>
              Entrar <FiLogIn />{" "}
            </Button>
            </Link>
          </ContainerButton>
        </ContainerInformation>
      </ContainerCentral>
    </Container>
  );
};

export default Home;

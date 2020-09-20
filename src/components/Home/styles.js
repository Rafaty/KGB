import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #1c9add;
  font-family: "Roboto", sans-serif;
`;

export const ContainerCentral = styled.div`
  width: 85%;
  height: 80%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    height: auto;
    width: auto;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  width:70%;
`;
export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ContainerInformation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerTitle = styled.div`
  padding-top: 10%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 50%;
  width: 100%;
`;

export const ContainerButton = styled.div`
 padding-top: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 3rem;
  color: #fdf8f8;
`;

export const Button = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: space-around;
  align-content: space;
  margin-left: 10;
  margin-right: 0;
  width: 50%;
  height: 25%;

  cursor: pointer;

  border: 0;
  border-radius: 10px;
  font-size: 30px;
  background-color: #27cea7;
  color: #fffcfc;

  &:hover {
    background-color: #009c73;
  }
`;

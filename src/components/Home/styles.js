import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #1c9add;
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
  width: 50%;
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
  padding: 10%;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction:column;
  height: 50%;
  width: 100%;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
  @media (max-width: 800px) {
    padding: 1%;
    height: 100%;
  }
`;

export const Title = styled.span`
  font-size: 3.2rem;
  color: #fdf8f8;
`;
export const SubTitle = styled.span`
  margin-top:4%;
  font-size: 1.2rem;
  color: #CEE7F4;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  height: 30%;
  border: 0;
  border-radius: 10px;
  @media (max-width: 800px) {
    padding: 3%;
  }
  font-size: 30px;
  background-color: #27cea7;
  color: #fffcfc;

  &:hover {
    background-color: #009c73;
  }
`;

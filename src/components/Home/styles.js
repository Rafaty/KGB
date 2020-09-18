import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: #2c7cf2;
`;

export const ContainerCentral = styled.div`
  width: 85%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  height: 100%;
`;

export const ContainerInformation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-top:45%;
  font-family: Roboto;

  font-style: normal;

  font-weight: normal;

  font-size: 50px;

  line-height: 90%;

  text-align: center;

  color: #fdf8f8;
`;

export const Button = styled.button`

  width: 197px;
  margin-top:20%;

  height: 80px;

  left: 496px;

  top: 336px;

  font-family: Roboto;

  font-style: normal;

  font-weight: normal;

  font-size: 30px;

  line-height: 35px;

  text-align: center;
  background-color: #12584C;
  color: #fffcfc;
`;

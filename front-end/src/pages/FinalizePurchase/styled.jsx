import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10vh;
  text-align: center;
  color: #091338;
`;
export const TitleTable = styled.table`
  display: flex;
  margin: 0 auto;
  width: 90vw;
  font-size: 25px;
  color: #091338;
  @media screen and (min-device-width: 320px) and (max-device-width: 580px) {
    font-size: 16px;
    align-items: center;
  }
`;

export const ContainValues = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Produtos = styled.td`
  width: 43vw;
  margin-left: 15px;
`;

export const Values = styled.td`
  display: flex;
  width: 15vw;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
`;

export const TableProducts = styled.table`
  margin: 0 auto;
  width: 90vw;
`;

export const Amount = styled.p`
  display: flex;
  gap: 10px;
  color: #15244f;
  font-size: 25px;
  margin: 20px 0 0 30px;
`;

export const CheckPurchase = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  @media screen and (min-device-width: 320px) and (max-device-width: 580px) {
    flex-direction: column;
    font-size: 10px;
  }
`;
export const Form = styled.form`
  display: flex;
  gap: 20px;
  input {
    width: 200px;
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 1040px) {
    flex-direction: column;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 580px) {
    flex-direction: column;
    margin: 30px;
  }
`;

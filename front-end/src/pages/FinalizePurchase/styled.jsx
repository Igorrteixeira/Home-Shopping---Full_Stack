import styled from "styled-components";

export const Container = styled.div``;

export const TitleTable = styled.table`
  display: flex;
  margin: 0 auto;
  width: 90vw;
  font-size: 25px;
  color: #091338;
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
`;
export const Form = styled.form`
  display: flex;
  gap: 20px;

  input {
    width: 200px;
  }
`;

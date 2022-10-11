import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StockItens = styled.tr`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  border: 1px solid #525456;
  border-radius: 10px;
  padding: 10px;
`;
export const TitleProduct = styled.td`
  display: flex;
  justify-content: flex-start;
  width: 30vw;
  color: #525456;
`;

export const Values = styled.td`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30vw;
  color: ${(props) => {
    if (props.color > 0) {
      return "#33ae33";
    } else if (props.color <= 0) {
      return "red";
    }
  }};
`;

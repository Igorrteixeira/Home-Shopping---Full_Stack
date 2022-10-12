import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #081f4f;
`;

export const StockItens = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  border: 1px solid #525456;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
`;
export const TitleProduct = styled.td`
  display: flex;
  justify-content: flex-start;
  width: 30vw;
  color: #525456;
  justify-content: space-around;
`;

export const Values = styled.td`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  color: #f8f5f5;
  width: 40px;
  height: 40px;
  margin-right: 13vw;
  border-radius: 100%;
  background-color: ${(props) => {
    if (props.color === 0) {
      return "red";
    } else if (props.color > 0 && props.color <= 30) {
      return "#eb5a20";
    } else {
      return "#33ae33";
    }
  }};
`;

export const Legend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 40px;
  p {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #676b6b;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
  width: 340px;
  right: 1px;
  top: 8vh;
  position: fixed;
  color: #060606;
  border-radius: 0 0 10px 10px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid #9d9d9e;
  border-radius: 5px;
  padding: 5px;
  width: 90%;
`;
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Price = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

export const Product = styled.p`
  color: #4b4b4b;
  font-weight: bold;
`;
export const Values = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #181817;
  font-weight: bold;
`;

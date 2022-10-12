import styled from "styled-components";

export const Container = styled.div`
    margin-top: 9vh;
    text-align: center;
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  justify-items: center;
  gap: 1em;

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

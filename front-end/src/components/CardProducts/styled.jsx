import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  width: 18vw;
  height: 30vh;
  border: solid 1px black;
  border-radius: 10px;
  font-size: 14px;

  @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
    width: 30vw;
    height: 35vh;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 45vw;
    height: 35vh;
  }
`;
export const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  word-wrap: break-word;
  margin: 6px;
  height: 20vh;
`;

export const Price = styled.p`
  margin: 4px;
  height: 5vh;
`;

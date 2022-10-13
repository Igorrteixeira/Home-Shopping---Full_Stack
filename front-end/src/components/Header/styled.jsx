import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  background-image: linear-gradient(#1567a4, #1c8adb, #30a0f0, #0b5287);
  width: 100vw;
  height: 8vh;
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2vw;
  width: 250px;
  height: 7vh;
  gap: 10px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border: none;
  background-color: white;
  color: #0b5287;
  border-radius: 20px;
  padding: 5px 6px;
  width: 150px;
  :hover {
    background-color: #0b2940bb;
    color: white;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  position: absolute;
  left: 1px;
  height: 50px;
  margin-left: 40px;
  img {
    height: 55px;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 580px) {
    font-size: 0px;
  }
`;

export const Icon = styled.button`
    width:25px;
    height: 25px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    :hover {
      transform: scale(1.3);
      cursor: pointer;
    }
`

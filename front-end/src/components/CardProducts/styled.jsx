import styled from "styled-components";
// import fundoCard from "../../assets/img/.png"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  width: 18vw;
  height: 30vh;
  border: solid 1px #d3cece;
  border-radius: 10px;
  font-size: 14px;
  box-shadow: 5px 5px #f3eeee;

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
  width: 9em;
  margin-bottom: 10px;
  padding: 8px 15px;
  border: none;
  background-color: ${(props) => {
    if (props.color > 0) {
      return "#1567A4";
    } else if (props.color <= 0) {
      return "#545454bf";
    }
  }};
  color: #ffffff;
  border-radius: 5px;
`;
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
`;
export const Quantity = styled.p`
  font-weight: bold;
  font-size: 18px;
`;
export const Title = styled.p`
  display: flex;
  align-items: center;
  word-wrap: break-word;
  margin: 6px;
  height: 20vh;
  color: #423e3e;
  font-size: 14px;
`;

export const Price = styled.p`
  margin: 4px;
  height: 5vh;
  font-size: 20px;
  color: #1567A4;
  font-weight: bolder;
  span {
    font-size: 14px;
    color: #8a8e92;
    
  }
`;



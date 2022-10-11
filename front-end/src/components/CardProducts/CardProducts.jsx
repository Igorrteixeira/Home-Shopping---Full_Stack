import {
  Container,
  Button,
  Title,
  Price,
  ContainerButtons,
  Quantity,
} from "./styled";
import { BsFillBagPlusFill, BsFillBagDashFill } from "react-icons/bs";
import { useEffect } from "react";

export const CardProduct = (props) => {

  
  return (
    <Container key={props.id}>
      <Title>{props.name}</Title>
      <Price>
        <span>R$</span> {props.price}
      </Price>

      {props.quantity < 1 ? (
        <Button type={"button"} onClick={props.buttonAdd}>
          ADICIONAR
        </Button>
      ) : (
        <ContainerButtons>
          <BsFillBagDashFill
            size={"25px"}
            color={"#f56161"}
            onClick={props.buttonRemove}
            onMouseOver={({ target }) => (target.style.color = "red")}
            onMouseOut={({ target }) => (target.style.color = "#f56161")}
          />
          <Quantity>{props.quantity}</Quantity>
          <BsFillBagPlusFill
            size={"25px"}
            color={"#3b8531"}
            onClick={props.buttonAdd}
            onMouseOver={({ target }) => (target.style.color = "green")}
            onMouseOut={({ target }) => (target.style.color = "#3b8531")}
          />
        </ContainerButtons>
      )}
    </Container>
  );
};

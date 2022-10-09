import { Container, Button, Title, Price,ContainerButtons,Quantity } from "./styled";
import {BsFillBagPlusFill,BsFillBagDashFill} from "react-icons/bs"


export const CardProduct = (props) => {
  return (
    <Container key={props.id}>
      <Title>{props.name}</Title>
      <Price><span>R$</span> {props.price}</Price>

      {props.quantity < 1 ? (
        <Button type={"button"} onClick={props.buttonAdd}>
          ADICIONAR
        </Button>
      ) : (
        <ContainerButtons>
          {" "}
          <BsFillBagDashFill size={"25px"} color={"red"} onClick={props.buttonRemove}/>
          <Quantity>{props.quantity}</Quantity>
          <BsFillBagPlusFill size={"25px"} color={"green"} onClick={props.buttonAdd}/>
        </ContainerButtons>
      )}
    </Container>
  );
};

import { CartShopping } from "../../services/CartShoppingRequest";
import { Container, Button, Title, Price } from "./styled";

export const CardProduct = (props) => {
  return (
    <Container key={props.id}>
      <Title>{props.name}</Title>
      <Price>R$ {props.price}</Price>

      <Button onClick={()=>CartShopping(props.id)}>Adicionar</Button>
    </Container>
  );
};

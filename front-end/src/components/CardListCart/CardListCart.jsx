import { Container, Value, NameProduct  } from "./style";

export const CardListCart = (props) => {
  return (
    <Container>
      <NameProduct>{props.name}</NameProduct>
      <Value>R$ {props.price}</Value>
      <td>{props.quantity}</td>
      <Value>R$ {props.total}</Value>
    </Container>
  );
};

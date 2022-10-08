import { Container, Button, Title, Price } from "./styled";


export const CardProduct = (props) => {
  
  return (
    <Container key={props.id}>
      <Title>{props.name}</Title>
      <Price>R$ {props.price}</Price>
     {props.quantity === 0 ?<Button type={"button"} onClick={props.button}>
        Adicionar
      </Button>:<div> <button>-</button>{props.quantity}<button>+</button></div> }
    </Container>
  );
};

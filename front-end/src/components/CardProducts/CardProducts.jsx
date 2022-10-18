import { BsFillBagPlusFill, BsFillBagDashFill } from "react-icons/bs";
import {Loader} from "../../components/Loader/Loader"
import {
  Container,
  Button,
  Title,
  Price,
  ContainerButtons,
  Quantity,
} from "./styled";

export const CardProduct = (props) => {
  return (
    <>{!props.loader ? <Loader/> :
    <Container key={props.id}>
      <Title>{props.name}</Title>
      <Price>
        <span>R$</span> {props.price}
      </Price>
      {props.quantity < 1 ? (
        <Button color={props.qtyStock} type={"button"} onClick={props.buttonAdd}>
         {props.qtyStock >= 1 ? "ADICIONAR" : "INDISPONIVEL"}
        </Button>
      ) : (
        <ContainerButtons>  
          <BsFillBagDashFill
            cursor={"pointer"}
            size={"25px"}
            color={"#f56161"}
            onClick={props.buttonRemove}
            onMouseOver={({ target }) => (target.style.color = "red")}
            onMouseOut={({ target }) => (target.style.color = "#f56161")}
          />
         
         <Quantity>{props.quantity}</Quantity>
        <BsFillBagPlusFill
            cursor={"pointer"}
            size={"25px"}
            color={"#3b8531"}
            onClick={props.buttonAdd}
            onMouseOver={({ target }) => (target.style.color = "green")}
            onMouseOut={({ target }) => (target.style.color = "#3b8531")}
          />
        </ContainerButtons>
      )}
      
    </Container>}</>
  );
};

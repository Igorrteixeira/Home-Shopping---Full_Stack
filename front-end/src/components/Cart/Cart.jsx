import { useContext } from "react";
import {
  Container,
  ContainerButtons,
  Price,
  Card,
  Product,
  Values,
} from "./styled";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { BsFillBagDashFill, BsFillBagPlusFill } from "react-icons/bs";
import { Button } from "@mui/material";
import { goToFianlizaPuchase } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { addCart, removeCart } from "../../services/cartShoppingRequest";

export const Cart = (props) => {
  const { cart } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  let amount = 0;
  const listCart = cart?.map((product) => {
    amount += product.total;
    return (
      <Card>
        <Product>{product.list.name}</Product>
        <Values>
          <Price>R$ {product.list.price}</Price>
          <ContainerButtons>
            <BsFillBagDashFill
              size={"20px"}
              color={"#f56161"}
              onClick={() => removeCart(product.list.id)}
              onMouseOver={({ target }) => (target.style.color = "red")}
              onMouseOut={({ target }) => (target.style.color = "#f56161")}
            />
            <p>{product.list.quantity}</p>
            <BsFillBagPlusFill
              size={"20px"}
              color={"#3b8531"}
              onClick={() => addCart(product.list.id_product)}
              onMouseOver={({ target }) => (target.style.color = "green")}
              onMouseOut={({ target }) => (target.style.color = "#3b8531")}
            />
          </ContainerButtons>
        </Values>
      </Card>
    );
  });

  return (
    <>
      {props.cart === true ? (
        <Container>
          {listCart}
          <h2>TOTAL: R$ {amount}</h2>
          <Button
            variant="outlined"
            onClick={() => goToFianlizaPuchase(navigate)}
          >
            Finalizar
          </Button>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

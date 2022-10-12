import { CardListCart } from "../../components/CardListCart/CardListCart";
import {ButtonRoll} from "../../components/ButtonRoll/ButtonRoll"
import { Header } from "../../components/Header/Header";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useForm } from "../../hooks/useForm";
import {useProtectedPage} from "../../hooks/useProtectPage"
import { createOrder } from "../../services/orderRequest";
import { Getcart } from "../../services/CartShoppingRequest";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useContext } from "react";
import {
  Container,
  TableProducts,
  Amount,
  CheckPurchase,
  Form,
  TitleTable,
  Values,
  Produtos,
  ContainValues,
} from "./styled";

export const FinalizePurchase = () => {
  useProtectedPage()
  const { cart } = useContext(GlobalStateContext);
  Getcart();
  const { form, onChange, clean } = useForm({
    userName: "",
    deliveryDate: "",
  });

  const submit = (event) => {
    event.preventDefault();
    createOrder(form, clean);
  };

  let total = 0;
  const listaitensCart = cart.map((product) => {
    total += product.total;
    return (
      <CardListCart
        name={product.list.name}
        price={product.list.price.toFixed(2)}
        quantity={product.list.quantity}
        total={product.total.toFixed(2)}
      />
    );
  });

  return (
    <Container>
      <Header />
      <CheckPurchase>
        <Amount>
          <BsFillCartCheckFill /> Valor total: R$ {total.toFixed(2)}
        </Amount>
        <Form onSubmit={submit}>
          <TextField
            type={"text"}
            id="name"
            label="Nome"
            variant="outlined"
            name={"userName"}
            onChange={onChange}
            value={form.userName}
            required
          />

          <TextField
            type={"date"}
            id="date"
            variant="outlined"
            name={"deliveryDate"}
            onChange={onChange}
            value={form.deliveryDate}
            required
          />
          <Button variant="contained" type="submit">
            Finalizar compra
          </Button>
        </Form>
      </CheckPurchase>
      {listaitensCart.length < 1 ? <h2>Você ainda não possui itens no carrinho.</h2>:
      <TitleTable>
        <Produtos>Produtos</Produtos>
        <ContainValues>
          <Values>Preço</Values>
          <Values>Qtd</Values>
          <Values>Valor total</Values>
        </ContainValues>
      </TitleTable>}
      <TableProducts>{listaitensCart}</TableProducts>
      <ButtonRoll/>
    </Container>
  );
};

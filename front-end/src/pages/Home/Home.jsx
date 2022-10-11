import { Container, Products } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { CardProduct } from "../../components/CardProducts/CardProducts";
import { Header } from "../../components/Header/Header";
import { addCart, Getcart } from "../../services/cartShoppingRequest";
import { removeCart } from "../../services/cartShoppingRequest";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { ButtonRoll } from "../../components/ButtonRoll/ButtonRoll";

export const Home = () => {
  const { cart } = useContext(GlobalStateContext);
  const productData = useRequestData([], "/products");

  Getcart();

  const listProducts = productData?.data?.map((produto) => {
    let quantity = 0;
    let id = "";
    for (const newCart of cart) {
      if (newCart.list.id_product === produto.id) {
        quantity = newCart.list.quantity;
        id = newCart.list.id;
      }
    }
    return (
      <CardProduct
        id={produto.id}
        name={produto.name}
        price={produto.price}
        quantity={quantity}
        buttonAdd={() => addCart(produto.id)}
        buttonRemove={() => removeCart(id)}
        qtyStock={produto.qty_stock}
      />
    );
  });

  return (
    <Container>
       <ButtonRoll/>
      <Header />
      <Products> {listProducts}</Products>
    </Container>
  );
};

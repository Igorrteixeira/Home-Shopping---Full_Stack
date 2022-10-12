import { Container, Products } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { addCart, Getcart,removeCart } from "../../services/CartShoppingRequest";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { ButtonRoll } from "../../components/ButtonRoll/ButtonRoll";
import { CardProduct } from "../../components/CardProducts/CardProducts";
import { Header } from "../../components/Header/Header";
import {Loader} from "../../components/Loader/Loader"

export const Home = () => {
  const { cart,loader } = useContext(GlobalStateContext);
  const productData = useRequestData([], "/products");

  Getcart();

  const listProducts = productData?.data?.map((product) => {
    let quantity = 0;
    let id = "";
    for (const newCart of cart) {
      if (newCart.list.id_product === product.id) {
        quantity = newCart.list.quantity;
        id = newCart.list.id;
      }
    }

    return (
      <CardProduct key={product.id}
        id={product.id}
        name={product.name}
        price={product.price}
        quantity={quantity}
        buttonAdd={() => addCart(product.id)}
        buttonRemove={() => removeCart(id)}
        qtyStock={product.qty_stock}
        loader={loader}
        
      />
    );
  });

  return (
    <Container>
      <Header />
      <Products>{listProducts}</Products>
      <ButtonRoll />
      
    </Container>
  );
};

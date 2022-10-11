import { Container, Products } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { CardProduct } from "../../components/CardProducts/CardProducts";
import { Header } from "../../components/Header/Header";
import { addCart } from "../../services/cartShoppingRequest";
import { removeCart } from "../../services/cartShoppingRequest";


export const Home = () => {
  const productData = useRequestData([], "/products");
  const cart = useRequestData([],"/list").data

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
      />
    );
  });

  return (
    <Container>
      <Header />
      <Products> {listProducts}</Products>
    </Container>
  );
};

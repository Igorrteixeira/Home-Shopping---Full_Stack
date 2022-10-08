import { Container, Products } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { CardProduct } from "../../components/CardProducts/CardProducts";
import { Header } from "../../components/Header/Header";
import { cartShopping } from "../../services/cartShoppingRequest";

export const Home = () => {
  const navigate = useNavigate();
  const itensCart = useRequestData([], "/list");
  const productData = useRequestData([], "/products");

  const listProducts = productData?.data?.map((produto) => {
    let quantity = 0;
    for (const cart of itensCart.data) {
      if (cart.list.id_product === produto.id) {
        quantity = cart.list.quantity;
      }
    }
    return (
      <CardProduct
        id={produto.id}
        name={produto.name}
        price={produto.price}
        quantity={quantity}
        button={()=>cartShopping(produto.id)}
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

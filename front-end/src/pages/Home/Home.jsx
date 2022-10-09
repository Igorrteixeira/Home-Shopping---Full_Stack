import { Container, Products } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { CardProduct } from "../../components/CardProducts/CardProducts";
import { Header } from "../../components/Header/Header";
import { addCart } from "../../services/cartShoppingRequest";
import { removeCart } from "../../services/cartShoppingRequest";


export const Home = () => {
    
  const navigate = useNavigate();
  const itensCart = useRequestData([], "/list");
  const productData = useRequestData([], "/products");
  

// const add = (id)=>{
//     cartShopping(id)
//     navigate("/home")
// }
  
  const listProducts = productData?.data?.map((produto) => {
    let quantity = 0;
    let id = ""
    for (const cart of itensCart.data) {
      if (cart.list.id_product === produto.id) {
        quantity = cart.list.quantity;
        id = cart.list.id
      }
    }
    return (
      <CardProduct
        id={produto.id}
        name={produto.name}
        price={produto.price}
        quantity={quantity}
        buttonAdd={()=>addCart(produto.id)}
        buttonRemove={()=>removeCart(id)}
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

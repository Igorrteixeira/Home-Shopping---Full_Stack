import { Container, TableProducts, Amount } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { CardListCart } from "../../components/CardListCart/CardListCart";
import { Header } from "../../components/Header/Header";
import { BsFillCartCheckFill } from "react-icons/bs";

export const Cart = () => {
  const itensCart = useRequestData([], "/list");
  let total = 0;
  const listaitensCart = itensCart?.data?.map((product) => {
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
      <div>
      <Amount>
        <BsFillCartCheckFill /> Valor total: R$ {total.toFixed(2)}
      </Amount>
      <form action="">
      </form>
      </div>
      
      <TableProducts>{listaitensCart}</TableProducts>
    </Container>
  );
};

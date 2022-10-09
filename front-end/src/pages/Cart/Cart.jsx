import { Container } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { CardProduct } from "../../components/CardProducts/CardProducts";

export const Cart = () => {
  const itensCart = useRequestData([], "/list");
  const listaitensCart = itensCart?.data?.map((produto) => {
    return (
      <div key={produto.list.id}>
        <p>{produto.list.name}</p>
        <p>{produto.list.price}</p>
        <p>{produto.list.quantity}</p>
        <p>{produto.total}</p>
      </div>
    );
  });

  return (
    <Container>
      {listaitensCart}
      <p>total: R$</p>
    </Container>
  );
};

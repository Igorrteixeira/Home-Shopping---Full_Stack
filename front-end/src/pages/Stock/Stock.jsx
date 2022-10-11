import { Container, StockItens, Values, TitleProduct } from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { Header } from "../../components/Header/Header";

export const Stock = () => {
  const productData = useRequestData([], "/products");

  return (
    <>
      <Header />
      <Container>
        <h1>Controle de estoque</h1>
        <table>
          <StockItens>
            <TitleProduct>Produtos</TitleProduct>
            <Values>Quantidade em estoque</Values>
          </StockItens>
          {productData?.data?.map((product) => {
            return (
              <StockItens>
                <TitleProduct>{product.name}</TitleProduct>
                <Values color={product.qty_stock}>{product.qty_stock}</Values>
              </StockItens>
            );
          })}
        </table>
      </Container>
    </>
  );
};

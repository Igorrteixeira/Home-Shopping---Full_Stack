import { useRequestData } from "../../hooks/useRequestData";
import { useProtectedPage } from "../../hooks/useProtectPage";
import { Header } from "../../components/Header/Header";
import {ButtonRoll} from "../../components/ButtonRoll/ButtonRoll"
import {AiFillCheckCircle,AiFillCloseCircle,AiFillClockCircle} from "react-icons/ai"
import { Container, StockItens, Values, TitleProduct,Legend} from "./styled";

export const Stock = () => {
  
  useProtectedPage()
  const productData = useRequestData([], "/products");

  return (
    <>
      <Header />
      <Container>
        <h1>Estoque</h1>
        <Legend>
          <p>Em falta <AiFillCloseCircle color="red"/></p>
          <p>Em estoque <AiFillCheckCircle color="green"/></p>
          <p>Pedir <AiFillClockCircle color="#eb5a20"/></p>
        </Legend>
        <table>
          <StockItens>
            <TitleProduct>Produtos</TitleProduct>
            <TitleProduct>Quantidade em estoque</TitleProduct>
          </StockItens>
          {productData?.data?.map((product) => {
            return (
              <StockItens key={product.id}>
                <TitleProduct>{product.name}</TitleProduct>
                <Values color={product.qty_stock}>{product.qty_stock}</Values>
              </StockItens>
            );
          })}
        </table>
        <ButtonRoll/>
      </Container>
    </>
  );
};

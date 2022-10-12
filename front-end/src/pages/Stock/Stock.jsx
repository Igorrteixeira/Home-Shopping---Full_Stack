import { Container, StockItens, Values, TitleProduct,Indice} from "./styled";
import { useRequestData } from "../../hooks/useRequestData";
import { Header } from "../../components/Header/Header";
import {AiFillCheckCircle,AiFillCloseCircle,AiFillClockCircle} from "react-icons/ai"
import {ButtonRoll} from "../../components/ButtonRoll/ButtonRoll"

 
export const Stock = () => {
  const productData = useRequestData([], "/products");

  return (
    <>
      <Header />
      <Container>
        <h1>Estoque</h1>
        <Indice>
          <p>Em falta <AiFillCloseCircle color="red"/></p>
          <p>Em estoque <AiFillCheckCircle color="green"/></p>
          <p>Pedir <AiFillClockCircle color="#eb5a20"/></p>
        </Indice>
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

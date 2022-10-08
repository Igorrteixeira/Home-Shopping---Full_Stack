import { Container,Products } from "./styled";
import {useRequestData} from "../../hooks/useRequestData"
import {useNavigate} from "react-router-dom"
import { CardProduct } from "../../components/CardProducts/CardProducts";
import { Header } from "../../components/Header/Header";


export const Home = () => {
    const navigate = useNavigate()
    const productData = useRequestData([],"/products")
    console.log(productData)
    const ListProducts = productData?.data?.map(produto => {
        return <CardProduct 
        id={produto.id}
        name={produto.name}
        price={produto.price}
        />
    })
    return (
        <Container>
            <Header/>
            <Products>{ListProducts}</Products>
        </Container>
    )
}
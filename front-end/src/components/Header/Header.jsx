import { BsCart2 } from "react-icons/bs";
import { MdOutlineInventory, MdKeyboardBackspace } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { Cart } from "../Cart/Cart";
import { goToHome, goToStock } from "../../router/Coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container, Nav, Button, Logo } from "./styled";
import logo from "../../assets/img/cart.png";

export const Header = () => {
  const navigate = useNavigate();
  const locate = useLocation();
  const [sidebar, setSidebar] = useState(false);

  return (
    <Container>
      <Logo onClick={()=>goToHome(navigate)}>
        <h1>Home Shopping</h1>
        <img src={logo} alt="" />
      </Logo>
      <Nav>
        <AiOutlineHome
          size={"25px"}
          color={"white"}
          onClick={() => goToHome(navigate)}
        />
        <MdOutlineInventory
          size={"25px"}
          color={"white"}
          onClick={() => goToStock(navigate)}
        />
        {locate.pathname !== "/finalizepurchase" ? (
          <BsCart2
            size={"25px"}
            color={"white"}
            onClick={() => setSidebar(!sidebar)}
          />
        ) : (
          <Button onClick={() => goToHome(navigate)}>
            <MdKeyboardBackspace /> Voltar as compras{" "}
          </Button>
        )}
        <Cart cart={sidebar} />
      </Nav>
    </Container>
  );
};

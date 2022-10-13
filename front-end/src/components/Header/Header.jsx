import logo from "../../assets/img/cart.png";
import { Cart } from "../Cart/Cart";
import { goToHome, goToLogin, goToStock } from "../../router/Coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Tooltip } from "@mui/material";
import { Container, Nav, Button, Logo, Icon } from "./styled";
import {BsCart3 } from "react-icons/bs";
import { BiStore} from "react-icons/bi";
import {
  MdOutlineInventory,
  MdKeyboardBackspace,
  MdLogout,
} from "react-icons/md";

export const Header = () => {
  const navigate = useNavigate();
  const locate = useLocation();
  const [sidebar, setSidebar] = useState(false);

  const logout = () =>{
    localStorage.clear()
    goToLogin(navigate)
  }

  return (
    <Container>
      <Logo onClick={() => goToHome(navigate)}>
        <h1>Home Shopping</h1>
        <img src={logo} alt="" />
      </Logo>
      <Nav>
        <Tooltip title="Comprar">
          <Icon onClick={() => goToHome(navigate)}>
            <BiStore size={"25px"} color={"white"}/>
          </Icon >
        </Tooltip>
        <Tooltip title="Estoque">
          <Icon onClick={() => goToStock(navigate)}>
            <MdOutlineInventory size={"25px"} color={"white"}/>
          </Icon>
        </Tooltip>
        {locate.pathname !== "/finalizepurchase" ? (
          <Tooltip title="Carrinho">
            <Icon onClick={() => setSidebar(!sidebar)}>
              <BsCart3 size={"24px"} color={"white"}/>
            </Icon>
          </Tooltip>
        ) : (
          <Button onClick={() => goToHome(navigate)}>
            <MdKeyboardBackspace /> Voltar as compras
          </Button>
        )
        }
        <Tooltip title="Logout">
          <Icon onClick={()=>logout()}>
            <MdLogout size={"25px"} color={"white"} />
          </Icon>
        </Tooltip>
        <Cart cart={sidebar} />
      </Nav>
    </Container>
  );
};

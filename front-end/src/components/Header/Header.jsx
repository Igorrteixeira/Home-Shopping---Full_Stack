import { Container, Nav } from "./styled";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";
import { goToHome, goToStock } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import {Cart} from "../Cart/Cart"
import { useState } from "react";

export const Header = (props) => {
  const navigate = useNavigate();
  const[sidebar,setSidebar] = useState(false)

  return (
    <Container>
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
        <BsCart2  size={"25px"} color={"white"} onClick={() =>setSidebar(!sidebar)} />
        <Cart cart={sidebar}/>
      </Nav>
    </Container>
  );
};

import { Container, Nav } from "./styled";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";
import { goToHome, goToStock } from "../../router/Coordinator";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export const Header = (props) => {
  const navigate = useNavigate();

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
        <BsCart2 size={"25px"} color={"white"} onClick={() => ""} />
      </Nav>
    </Container>
  );
};

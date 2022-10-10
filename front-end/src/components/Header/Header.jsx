import { Container,Nav } from "./styled";
// import logo from "../../assets/img/cart.png"
import { HiUserCircle } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";


export const Header = (props) => {
    
  return (
    <Container>
      <Nav>
          <HiUserCircle size={"25px"}  />
          <FaShoppingCart size={"25px"} onClick={() => ""} />
      </Nav>
    </Container>
  );
};

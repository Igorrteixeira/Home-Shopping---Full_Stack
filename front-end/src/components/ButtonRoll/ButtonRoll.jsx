import styled from "styled-components";
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const ButtonNavigate = styled.div`
    position: fixed;    
    right: 5px;
    bottom: 40px;
    border:none;
    
   
`

export const ButtonRoll = () => {
 return(
  <ButtonNavigate
  onClick={() => {
    window.scrollTo(0, 0);
  }}
>
  <BsFillArrowUpCircleFill 
  size={"30px"} 
  color={"#1567A4"}
  cursor={"pointer"} />
</ButtonNavigate>
 )
};

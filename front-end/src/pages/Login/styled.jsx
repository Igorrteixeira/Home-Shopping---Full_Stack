import styled from "styled-components"
import fundo from "../../assets/img/online.png"

export const Container = styled.div`
    height: 92vh;
     background-image: url(${fundo});
     background-repeat: no-repeat, repeat;
     background-size:100vw 100vh;
     margin-top: 8vh;
     h1{
        text-align: center;
     }
`
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    background-color: #f6eeeea8;
    width: 350px;
    height: 300px;
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: 5px 5px  #00000014;  
    input{
      width: 300px;
    }
`
export const Img = styled.img`
    margin: 30px auto;
    width: 200px;
`
export const Logo = styled.div`
    display: flex;
   
`
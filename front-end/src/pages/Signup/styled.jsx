import styled from "styled-components"
import fundo from "../../assets/img/online.png"

export const Container = styled.div`
    height: 92vh;
     background-image: url(${fundo});
     background-repeat: no-repeat, repeat;
     background-size:100vw 100vh;
     background-color: opacity;
    margin-top: 8vh;
    text-align: center;
`
export const Title = styled.h1`
    padding-top: 30px;
`
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    margin: 70px auto;
    width: 340px;
    height: 300px;
    background-color: #eadcdceb;
    border-radius: 5px;
    
    input{
        width: 300px;
    }

`
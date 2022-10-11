import { Container,Form,Img,Logo } from "./styled";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { goToSignup } from "../../router/Coordinator";
import { login } from "../../services/userRequest";
import {Header} from "../../components/Header/Header"
import logo from "../../assets/img/home.png"

export const Login = () => {
  const navigate = useNavigate();
  const { form, onChange, clean } = useForm({
    email: "",
    password: "",
  });

  const submit = (event) => {
    event.preventDefault();
    login(form, clean, navigate);
  };
  return (
    <Container>
      <Header/>
      <Logo><Img src={logo} alt="" /></Logo>
      <h1>BEM-VINDO !</h1>
      <Form onSubmit={submit}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          name={"email"}
          onChange={onChange}
          value={form.email}
          required
        />

        <TextField
          id="password"
          label="Senha"
          variant="outlined"
          type="password"
          name={"password"}
          onChange={onChange}
          value={form.password}
          required
        />

        <Button variant="contained" type={"submit"}>Login</Button>
        <p>Ainda não e cliente ?</p>
        <Button variant="outlined" onClick={() => goToSignup(navigate)}>Crie uma conta</Button>
      </Form>
    </Container>
  );
};

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {useUnProtectedPage} from "../../hooks/useUnProtected"
import { signUp } from "../../services/userRequest";
import {Header} from "../../components/Header/Header"
import { Container,Form,Title } from "./styled";

export const Signup = () => {
  useUnProtectedPage()
  const navigate = useNavigate();
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const submit = (event) => {
    event.preventDefault();
    signUp(form, clean, navigate);
  };
  return ( 
    <Container>
      <Header/>
      <Title>BEM-VINDO !</Title>
      <Form onSubmit={submit}>
        <TextField
          type="text"
          id="name"
          label="Nome"
          variant="outlined"
          name={"name"}
          onChange={onChange}
          value={form.name}
          required
        />
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
          type="password"
          id="password"
          label="Senha"
          variant="outlined"
          name={"password"}
          onChange={onChange}
          value={form.password}
          required
        />
        <Button variant="contained" type={"submit"}>Signup</Button>
      </Form>
    </Container>    
  );
};

import { Container } from "./styled";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { signUp } from "../../services/userRequest";

export const Signup = () => {
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
      <h1>Bem vindo</h1>
      <form onSubmit={submit}>
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

        <Button type={"submit"}>Signup</Button>
      </form>
    </Container>
  );
};

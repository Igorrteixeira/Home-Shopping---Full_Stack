import { Container } from "./styled";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { goToSignup } from "../../router/Coordinator";
import { login } from "../../services/userRequest";

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
      <form onSubmit={submit}>
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

        <Button type={"submit"}>Login</Button>
        <Button onClick={() => goToSignup(navigate)}>Crie uma conta</Button>
      </form>
    </Container>
  );
};

import Input from "../../components/Input";
import Button from "../../components/Button";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { FormContainer } from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <FormContainer>
        <form action="submit">
          <label>Login</label>
          <Input
            placeholder="Digitar usuário"
            label="Usuário"
            type="text"
            register={() => null}
            registerName="string"
          />
          <Input
            placeholder="Digitar senha"
            label="Senha"
            type="text"
            register={() => null}
            registerName="string"
          />
          <p>Esqueci minha senha</p>
          <Button type="submit">Entrar</Button>
          <p>Ainda não possui conta?</p>
          <Button type="submit">Cadastrar</Button>
        </form>
      </FormContainer>
      <Footer />
    </>
  );
};

export default Login;

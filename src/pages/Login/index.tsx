import Input from "../../components/Input";
import Button from "../../components/Button";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "./styles";
import { ILoginFunction } from "../../Contexts/User";
import { useUser } from "../../Contexts/User";
import loginSchema from "../../validations/LoginValidator";

const Login = () => {
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFunction>({ resolver: yupResolver(loginSchema()) });

  return (
    <>
      <Header />
      <FormContainer>
        <form onSubmit={handleSubmit(loginUser)}>
          <label className="titleForm">Login</label>
          <Input
            placeholder="Digitar usuário"
            label="Usuário"
            type="text"
            register={register}
            registerName="username"
          />
          <Input
            placeholder="Digitar senha"
            label="Senha"
            type="text"
            register={register}
            registerName="password"
          />
          <p>Esqueci minha senha</p>
          <Button type="submit">Entrar</Button>
          <div className="newUser">
            <p>Ainda não possui conta?</p>
            <Button type="submit" onClick={() => navigate("/register")}>
              Cadastrar
            </Button>
          </div>
        </form>
      </FormContainer>
      <Footer />
    </>
  );
};

export default Login;

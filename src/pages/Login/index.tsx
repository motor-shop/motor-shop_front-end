import Input from "../../components/Input";
import Button from "../../components/Button";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "./styles";
import { UserContext, ILoginFunction } from "../../Contexts/User";
import loginSchema from "../../validators/loginValidator";

const Login = () => {
  const { loginUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFunction>({ resolver: yupResolver(loginSchema) });

  return (
    <>
      <Header />
      <FormContainer>
        <form action="submit" onSubmit={handleSubmit(loginUser)}>
          <label className="titleForm">Login</label>
          <Input
            placeholder="Digitar usuário"
            label="Usuário"
            type="text"
            register={() => "username"}
            registerName="string"
            {...register("username")}
          />
          <Input
            placeholder="Digitar senha"
            label="Senha"
            type="text"
            register={() => "password"}
            registerName="string"
            {...register("password")}
          />
          <p>Esqueci minha senha</p>
          <Button type="submit">Entrar</Button>
          <div className="newUser">
            <p>Ainda não possui conta?</p>
            <Button type="submit" onClick={() => navigate("/")}>
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

import Input from "../../components/Input";
import Button from "../../components/Button";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Div, FormContainer } from "./styles";
import { ILoginFunction } from "../../Contexts/User";
import { useUser } from "../../Contexts/User";
import loginSchema from "../../validations/LoginValidator";
import ModalSendEmail from "../../components/ModalSendEmail";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser } = useUser();
  const navigate = useNavigate();
  const [closeModal, setCloseModal] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFunction>({ resolver: yupResolver(loginSchema()) });

  const submit = (data: ILoginFunction) => {
    toast.promise(loginUser(data), {
      pending: "Realizando login...",
      success: "Logado com sucesso!",
      error: "Ocorreu um erro ao logar!",
    });
  };

  return (
    <Div>
      <Header />
      <FormContainer>
        <form onSubmit={handleSubmit(submit)}>
          <label className="titleForm">Login</label>
          <Input
            placeholder="Digitar usuário"
            label="Usuário"
            type="text"
            register={register}
            registerName="username"
          />
          <span> {errors.username?.message}</span>
          <Input
            placeholder="Digitar senha"
            label="Senha"
            type="text"
            register={register}
            registerName="password"
          />
          <span> {errors.password?.message}</span>
          <div className="containerButtonResetPassword">
            <button
              className="buttonResetPassword"
              onClick={() => {
                setCloseModal(false);
              }}
            >
              Esqueci minha senha
            </button>
          </div>
          <Button type="submit">Entrar</Button>
          <div className="newUser">
            <p>Ainda não possui conta?</p>
            <Button type="submit" onClick={() => navigate("/register")}>
              Cadastrar
            </Button>
          </div>
        </form>
      </FormContainer>
      <ModalSendEmail closeModal={closeModal} setCloseModal={setCloseModal} />
      <Footer />
    </Div>
  );
};

export default Login;

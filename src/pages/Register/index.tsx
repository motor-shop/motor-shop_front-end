import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { IUserRequest, useUser } from "../../Contexts/User";
import { Container, FormStyled } from "./styles";
import ModalSuccess from "../../components/ModalSuccess";

const Register = () => {
  const [isSeller, setIsSeller] = useState<boolean>(true);
  const { setCloseModalSuccess } = useUser();

  const formSchema = yup.object().shape({
    username: yup.string().required("Nome obrigatório!"),
    email: yup.string().required("Email obrigatório!").email("E-mail inválido!"),
    cpf: yup.string().required("CPF obrigatório!"),
    cellphone: yup.string().required("Celular obrigatório!"),
    birth_at: yup.string().required("Data de nascimento obrigatória!"),
    description: yup.string().required("Descrição obrigatória!"),
    password: yup.string().required("Senha obrigatória!"),
    confirm_password: yup
      .string()
      .required("Senha obrigatório!")
      .oneOf([yup.ref("password")], "Senhas diferentes!"),
    zip_code: yup.string(),
    state: yup.string().required("Estado obrigatório!"),
    city: yup.string().required("Cidade obrigatório!"),
    street: yup.string().required("Rua obrigatório!"),
    house_number: yup.string().required("Número obrigatório!"),
    complement: yup.string().required("Complemento obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRequest>({ resolver: yupResolver(formSchema) });

  function userRegister(data: any) {
    data.is_seller = isSeller;
    data.adress = {
      zip_code: data.zip_code,
      state: data.state,
      city: data.city,
      street: data.street,
      house_number: data.house_number,
      complement: data.complement,
    };

    api
      .post("/users", data)
      .then((response) => {
        console.log(response.data);
        setCloseModalSuccess(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header />
      <Container>
      <FormStyled onSubmit={handleSubmit(userRegister)}>
        <h1>Cadastro</h1>
        <div className="containerPersonalInfo">
          <p> Informações pessoais</p>
          <Input
            label="Nome"
            placeholder="Ex: Samuel Leaõ"
            type="text"
            register={register}
            registerName="username"
          />
          <span> {errors.username?.message}</span>
          <Input
            label="Email"
            placeholder="Ex: samuel@kenzie.com.br"
            type="text"
            register={register}
            registerName="email"
          />
          <span> {errors.email?.message}</span>
          <Input
            label="CPF"
            placeholder="000.000.000-00"
            type="text"
            register={register}
            registerName="cpf"
          />
          <span> {errors.cpf?.message}</span>
          <Input
            label="Celular"
            placeholder="(DDD) 90000-0000"
            type="text"
            register={register}
            registerName="cellphone"
          />
          <span> {errors.cellphone?.message}</span>
          <Input
            label="Data de Nascimento"
            placeholder="0000/00/00"
            type="text"
            register={register}
            registerName="birth_at"
          />
          <span> {errors.birth_at?.message}</span>
          <Input
            label="Descrição"
            placeholder="Digitar descrição"
            type="text"
            register={register}
            registerName="description"
          />
          <span> {errors.description?.message}</span>
        </div>
        <div className="containerAddressInfo">
          <p> Informações de Endereço</p>
          <Input
            label="CEP"
            placeholder="00000.000"
            type="text"
            register={register}
            registerName="zip_code"
          />
          <span> {errors.zip_code?.message}</span>
          <div className="addressInfo2">
            <div className="errors">
              <Input
                label="Estado"
                placeholder="Digitar Estado"
                type="text"
                register={register}
                registerName="state"
              />
              <span> {errors.state?.message}</span>
            </div>
            <div className="errors">
              <Input
                label="Cidade"
                placeholder="Digitar cidade"
                type="text"
                register={register}
                registerName="city"
              />
              <span> {errors.city?.message}</span>
            </div>
          </div>
          <Input
            label="Rua"
            placeholder="Digitar rua"
            type="text"
            register={register}
            registerName="street"
          />
          <span> {errors.street?.message}</span>
          <div className="addressInfo2">
            <div className="errors">
              <Input
                label="Número"
                placeholder="Digitar número"
                type="text"
                register={register}
                registerName="house_number"
              />
              <span> {errors.house_number?.message}</span>
            </div>
            <div className="errors">
              <Input
                label="Complemento"
                placeholder="Ex: apart 307"
                type="text"
                register={register}
                registerName="complement"
              />
              <span> {errors.complement?.message}</span>
            </div>
          </div>
          <p> Tipo de conta</p>
          <div className="isSellerButton">
            {!isSeller ? (
              <Button
                type="button"
                background="#4529E6"
                width="152px"
                fontSize="16px"
                minButton={true}
              >
                Comprador
              </Button>
            ) : (
              <Button
                type="button"
                background=" #FFFFFF"
                backgroundHover="#212529"
                borderColorHover="#212529"
                borderColor="#ADB5BD"
                width="152px"
                fontSize="16px"
                color="#0B0D0D"
                minButton={true}
                onClick={() => setIsSeller(false)}
              >
                Comprador
              </Button>
            )}
            {isSeller ? (
              <Button
                type="button"
                background="#4529E6"
                width="152px"
                fontSize="16px"
                minButton={true}
              >
                Anunciante
              </Button>
            ) : (
              <Button
                type="button"
                background=" #FFFFFF"
                backgroundHover="#212529"
                borderColorHover="#212529"
                borderColor="#ADB5BD"
                width="152px"
                fontSize="16px"
                color="#0B0D0D"
                minButton={true}
                onClick={() => setIsSeller(true)}
              >
                Anunciante
              </Button>
            )}
          </div>
          <Input
            label="Senha"
            placeholder="Digitar senha"
            type="text"
            register={register}
            registerName="password"
          />
          <span> {errors.password?.message}</span>
          <Input
            label="Confirmar Senha"
            placeholder="Digitar senha"
            type="text"
            register={register}
            registerName="confirm_password"
          />
          <span> {errors.confirm_password?.message}</span>
        </div>
        <div className="finalButton">
          <Button
            type="submit"
            background=" #4529E6"
            backgroundHover="#4529E6"
            borderColorHover="#4529E6"
            borderColor="##4529E6"
            width="315px"
            fontSize="16px"
            color="#FFFFFF"
          >
            Finalizar cadastro
          </Button>
        </div>
      </FormStyled>
      </Container>
      <ModalSuccess />
      <Footer />
    </>
  );
};

export default Register;

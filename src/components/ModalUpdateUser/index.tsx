import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { IUserUpdate } from "../../Contexts/User";
import { FormStyled } from "./styles";
import ModalGlobal from "../ModalGlobal";

const ModalUpdateProfile = () => {
  const [closeModal, setCloseModal] = useState<boolean>(true);

  const formSchema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email("E-mail inválido"),
    cpf: yup.string(),
    cellphone: yup.string(),
    birth_at: yup.string(),
    description: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserUpdate>({ resolver: yupResolver(formSchema) });

  function userUpdate(data: IUserUpdate){

    const id = localStorage.getItem('@id')

    api
      .patch(`/users/${id}`, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem(id!)
      });
  }

  return (
    <>
      <ModalGlobal
        title="Editar perfil"
        closeModal={closeModal}
        setCloseModal={setCloseModal}
      >
        <FormStyled onSubmit={handleSubmit(userUpdate)}>
          <p> Informações pessoais</p>
          <Input
            label="Nome"
            placeholder="Ex: Samuel Leaõ"
            type="text"
            register={register}
            registerName="username"
          />
          <Input
            label="Email"
            placeholder="Ex: samuel@kenzie.com.br"
            type="text"
            register={register}
            registerName="email"
          />
          <Input
            label="CPF"
            placeholder="000.000.000-00"
            type="text"
            register={register}
            registerName="cpf"
          />
          <Input
            label="Celular"
            placeholder="(DDD) 90000-0000"
            type="text"
            register={register}
            registerName="cellphone"
          />
          <Input
            label="Data de Nascimento"
            placeholder="0000/00/00"
            type="text"
            register={register}
            registerName="birth_at"
          />
          <div className="containerDescription">
            <Input
              label="Descrição"
              placeholder="Digitar descrição"
              type="text"
              register={register}
              registerName="description"
            />
          </div>
          <div className="finalButton">
            <Button
              type="button"
              background=" #DEE2E6"
              borderColor="#DEE2E6"
              backgroundHover="#CED4DA"
              borderColorHover="#CED4DA"
              width="100px"
              fontSize="16px"
              color="#495057"
              onClick={() => setCloseModal(true)}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              background=" #4529E6"
              backgroundHover="#4529E6"
              borderColorHover="#4529E6"
              borderColor="##4529E6"
              width="196px"
              fontSize="16px"
              color="#FFFFFF"
            >
              Salvar alterações
            </Button>
          </div>
        </FormStyled>
      </ModalGlobal>
      <Button onClick={() => setCloseModal(false)} type={"button"}>
        botão abrir modal atualizar perfil
      </Button>
    </>
  );
};

export default ModalUpdateProfile;

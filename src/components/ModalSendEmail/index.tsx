import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import ModalGlobal from "../ModalGlobal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import sendEmailResetPasswordSchema from "../../validations/SendEmailValidator";
import { Container, MessageError, MessageSucess } from "./style";
import { api } from "../../services/api";
import LoadingPage from "../LoadingPage";

interface IRequestSendEmail {
  email: string;
}

interface IPropsModalSendEmail {
  closeModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSendEmail = ({
  closeModal,
  setCloseModal,
}: IPropsModalSendEmail) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSucess, setIsSucess] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [isNotFoundUser, setIsNotFoundUser] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestSendEmail>({
    resolver: yupResolver(sendEmailResetPasswordSchema()),
  });

  const registerIn = (data: IRequestSendEmail) => {
    setIsLoading(true);
    api
      .post("/users/sendResetPassword", data)
      .then((res) => {
        setIsSucess(true);
      })
      .catch((err) => {
        if (err.response.data.message === "User not found") {
          setIsNotFoundUser(true);
        } else {
          setIsFail(true);
        }

        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ModalGlobal
      title="Redefinir senha"
      closeModal={closeModal}
      setCloseModal={setCloseModal}
    >
      <Container>
        {isLoading && <LoadingPage type="cubes" color="var(--color-brand-2)" />}
        {isLoading === false &&
          isSucess === false &&
          isFail === false &&
          isNotFoundUser === false && (
            <form onSubmit={handleSubmit(registerIn)}>
              <Input
                label="Email"
                placeholder="Digite o email da conta cadastrada"
                register={register}
                type="text"
                registerName="email"
              ></Input>
              <span>{errors.email?.message}</span>

              <Button type="submit" width="60%">
                Enviar
              </Button>
            </form>
          )}
        {isLoading === false && isFail === false && isSucess && (
          <MessageSucess>
            Olá, enviamos com sucesso um email para que você possa redefinir sua
            senha, verifique a caixa de entrada do seu email. Caso não encontre,
            confira na caixa de spam!
          </MessageSucess>
        )}
        {isLoading === false && isSucess === false && isFail && (
          <MessageError>
            Algo deu errado, tente novamente mais tarde!
          </MessageError>
        )}
        {isLoading === false &&
          isSucess === false &&
          isFail === false &&
          isNotFoundUser && (
            <MessageError>
              Email não cadastrado em nosso banco de dados
            </MessageError>
          )}
      </Container>
    </ModalGlobal>
  );
};

export default ModalSendEmail;

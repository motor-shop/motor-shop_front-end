import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, CotainerForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import resetPasswordSchema from "../../validations/ResetPasswordValidator";
import { useParams } from "react-router";
import { api } from "../../services/api";
import LoadingPage from "../../components/LoadingPage";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

interface IDataResetPasswordForm {
  newPassword: string;
  confirmPassword?: string;
  token?: string;
}

const ResetPassword = () => {
  const { token } = useParams();

  const [isTokenValid, setIsTokenValid] = useState(true);
  const [isResetedPassword, setIsResetdPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      let decode: any = jwtDecode(token!);
      if (decode.exp < Math.round(new Date().getTime() / 1000)) {
        setIsTokenValid(false);
      }
    } catch (error) {
      setIsTokenValid(false);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataResetPasswordForm>({
    resolver: yupResolver(resetPasswordSchema()),
  });

  const registerIn = (data: IDataResetPasswordForm) => {
    setIsLoading(true);

    data.token = `${token}`;
    delete data.confirmPassword;

    api
      .post("http://localhost:3001/users/resetPassword", data)
      .then((res) => {
        setIsResetdPassword(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <CotainerForm>
        {isLoading && (
          <LoadingPage type="cubes" color="var(--color-whiteFixed)" />
        )}
        {isTokenValid === false && isLoading === false && <p>Link expirado!</p>}
        {isTokenValid === true &&
          isResetedPassword === false &&
          isLoading === false && (
            <form onSubmit={handleSubmit(registerIn)}>
              <Input
                label="Nova senha"
                placeholder="Digite a senha"
                register={register}
                registerName="newPassword"
                type="password"
              />
              <span>{errors.newPassword?.message}</span>
              <Input
                label="Confirmação de senha"
                placeholder="Digite a senha"
                register={register}
                registerName="confirmPassword"
                type="password"
              />
              <span>{errors.confirmPassword?.message}</span>
              <Button type="submit" width="120px">
                Enviar
              </Button>
            </form>
          )}
        {isTokenValid === true &&
          isResetedPassword === true &&
          isLoading === false && <p>Senha alterada com sucesso!</p>}
      </CotainerForm>
    </Container>
  );
};

export default ResetPassword;

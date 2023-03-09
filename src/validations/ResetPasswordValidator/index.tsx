import * as yup from "yup";

const resetPasswordSchema = () => {
  return yup.object().shape({
    newPassword: yup.string().required("Senha obrigatória!"),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória!")
      .oneOf([yup.ref("newPassword")], "Confirmação deve ser igual a senha!"),
  });
};

export default resetPasswordSchema;

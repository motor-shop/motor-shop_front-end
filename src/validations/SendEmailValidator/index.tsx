import * as yup from "yup";

const sendEmailResetPasswordSchema = () => {
  return yup.object().shape({
    email: yup.string().required("Email obrigatório!"),
  });
};

export default sendEmailResetPasswordSchema;

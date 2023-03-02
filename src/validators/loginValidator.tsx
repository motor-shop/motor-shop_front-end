import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup.string().required("Nome obrigatório!"),
  password: yup.string().required("Senha obrigatória!"),
});

export default loginSchema;

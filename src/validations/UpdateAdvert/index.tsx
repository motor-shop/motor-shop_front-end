import * as yup from "yup";

const UpdateAdvertSchema = () => {
  return yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup
      .string()
      .required("Email Obrigatório")
      .email("Informe um email válido"),
    password: yup
      .string()
      .required("Senha Obrigatória")
      .min(8, "Senha deve ter ao menos 8 caracteres")
      .matches(/(?=.*\d)/g, "A senha deve conter ao menos um número")
      .matches(/(?=.*[a-zA-Z])/g, "A senha deve conter ao menos uma letra")
      .matches(
        /(?=.*[$*&@#])/g,
        "A senha deve conter ao menos um caractere especial"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de Senha Obrigatória")
      .oneOf([yup.ref("password")], "Confirmção Deve Ser Igual a Senha"),
    bio: yup.string().required("Bio Obrigatória"),
    contact: yup.string().required("Contato Obrigatório"),
  });
};

export default UpdateAdvertSchema;

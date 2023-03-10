import { ContainerInputStyled } from "./styles";

interface IPropsButton {
  placeholder: string;
  label: string;
  type: "text" | "password";
  register: any; //register do yup, caso não use passe:  () => null
  registerName: string; //name do input que será utilizado no register
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const Input = (props: IPropsButton) => {
  const { label, register, registerName, ...restProps } = props;

  return (
    <ContainerInputStyled>
      <label>{label}</label>
      <input {...restProps} {...register(registerName)} />
    </ContainerInputStyled>
  );
};

export default Input;

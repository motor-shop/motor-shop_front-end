import { ContainerInputStyled } from "./styles";

interface IPropsButton {
  placeholder: string;
  label: string;
}

const Input = (props: IPropsButton) => {
  const { label, ...restProps } = props;

  return (
    <ContainerInputStyled>
      <label>{label}</label>
      <input type="text" {...restProps} />
    </ContainerInputStyled>
  );
};

export default Input;

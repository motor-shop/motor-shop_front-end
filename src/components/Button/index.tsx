import { ButtonStyled } from "./styles";

interface IPropsButton {
  children: React.ReactNode;
  background?: string;
  backgroundHover?: string;
  width?: string;
  color?: string;
  borderColor?: string;
  borderColorHover?: string;
  fontSize?: string;
}

const Button = (props: IPropsButton) => {
  const { children, ...restProps } = props;

  return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};

export default Button;

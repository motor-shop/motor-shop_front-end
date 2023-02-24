import { FooterContainer } from "./styles";
import logo from "../../assets/logo.svg";
import angleUp from "../../assets/angle-up.svg";
import Button from "../Button";

const Footer = () => {
  const scrollTop = function () {
    window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <img src={logo} alt="logo" />
      <p>© 2022 - Todos os direitos reservados.</p>
      <Button onClick={() => scrollTop()} type="button">
        <img src={angleUp} alt="angle up" />
      </Button>
    </FooterContainer>
  );
};

export default Footer;

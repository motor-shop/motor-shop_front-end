import { FooterContainer } from "./styles";
import logo from "../../assets/logo.svg";
import angleUp from "../../assets/angle-up.svg";

const Footer = () => {
  const scrollTop = function () {
    window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <img src={logo} alt="logo" />
      <p>© 2022 - Todos os direitos reservados.</p>
      <button onClick={() => scrollTop()}>
        <img src={angleUp} alt="angle up" />
      </button>
    </FooterContainer>
  );
};

export default Footer;

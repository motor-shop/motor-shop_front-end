import logo from "../../assets/logoHeader.svg";
import bars from "../../assets/bars.svg";
import x from "../../assets/x.svg";
import profile from "../../assets/profile.svg";
import { HeaderStyled } from "./style";
import { useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const openMenu = () => setIsActive(!isActive);

  const [isLogged, setIsLogged] = useState(false);

  return (
    <HeaderStyled>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="btnMenu">
          <button onClick={openMenu} className="headerDropDown">
            <img src={!isActive ? bars : x} alt="" />
          </button>
        </div>
      </div>
      <div className="menu">
        <ul className={`menu ${isActive ? "nav-menu active" : "nav-menu"}`}>
          <div className="options">
            <li>
              <button> Carros</button>
            </li>
            <li>
              <button> Motos </button>
            </li>
            <li>
              <button> Leilão </button>
            </li>
          </div>
          {isLogged ? (
            <HeaderLogged />
          ) : (
            <div className="login">
              <li>
                <button className="btnLogin"> Fazer Login </button>
              </li>
              <li>
                <button className="btnRegister"> Cadastrar </button>
              </li>
            </div>
          )}
        </ul>
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderLogged = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const openProfile = () => setIsProfileOpen(!isProfileOpen);
  const isSeller = true;

  return (
    <div className="profile">
      <div className="menuProfile">
        <li>
          <img src={profile} alt="imagem de perfil" />
        </li>
        <li>
          <button className="btnProfile" onClick={openProfile}>
            user.name
          </button>
        </li>
      </div>
      <div className="profileOptionsContainer">
        <ul className={`menu ${isProfileOpen ? "open" : "close"}`}>
          {isSeller ? <SellerProfile /> : <NotSellerProfile />}
        </ul>
      </div>
    </div>
  );
};

const SellerProfile = () => {
  return (
    <div className="profileOptions">
      <li>
        <button> Editar Perfil </button>
      </li>
      <li>
        <button> Editar endereço </button>
      </li>
      <li>
        <button> Meus anúncios </button>
      </li>
      <li>
        <button> Sair </button>
      </li>
    </div>
  );
};

const NotSellerProfile = () => {
  return (
    <div className="profileOptions">
      <li>
        <button> Editar Perfil </button>
      </li>
      <li>
        <button> Editar endereço </button>
      </li>
      <li>
        <button> Sair </button>
      </li>
    </div>
  );
};

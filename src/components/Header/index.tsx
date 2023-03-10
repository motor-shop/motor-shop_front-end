import logo from "../../assets/logoHeader.svg";
import bars from "../../assets/bars.svg";
import x from "../../assets/x.svg";
import profile from "../../assets/profile.svg";
import { HeaderStyled } from "./style";
import { useState } from "react";
import { useUser } from "../../Contexts/User";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const openMenu = () => setIsActive(!isActive);
  const navigate = useNavigate();
  const { isLogged } = useUser();


  return (
    <HeaderStyled>
      <div className="header">
        <div className="logo" onClick={() => navigate("/home")}>
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
              <a href="#car"> 
              <button onClick={() => navigate("/home")}> 
              Carros</button>
              </a>
            </li>
            <li>
            <a href="#moto"> 
              <button onClick={() => navigate("/home")}> Motos </button>
              </a>
            </li>
            <li>
             <a href="#leilao"> 
              <button onClick={() => navigate("/home")}> Leilão </button>
              </a>
            </li>
          </div>
          {isLogged ? (
            <HeaderLogged />
          ) : (
            <div className="login">
              <li>
                <button
                  className="btnLogin"
                  onClick={() => navigate("/login", { replace: true })}
                >
                  Fazer Login
                </button>
              </li>
              <li>
                <button
                  className="btnRegister"
                  onClick={() => navigate("/register", { replace: true })}
                >
                  Cadastrar
                </button>
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
  const { user } = useUser();

  return (
    <div className="profile">
      <div className="menuProfile">
        <li>
          <img src={profile} alt="imagem de perfil" />
        </li>
        <li>
          <button className="btnProfile" onClick={openProfile}>
            {user.username}
          </button>
        </li>
      </div>
      <div className="profileOptionsContainer">
        <ul className={`menu ${isProfileOpen ? "open" : "close"}`}>
          {user.is_seller ? <SellerProfile /> : <NotSellerProfile />}
        </ul>
      </div>
    </div>
  );
};

const SellerProfile = () => {
  const { setCloseModalUpdate } = useUser();
  const navigate = useNavigate();

  return (
    <div className="profileOptions">
      <li>
        <button onClick={() => setCloseModalUpdate(false)}>
          Editar Perfil
        </button>
      </li>
      <li>
        <button onClick={() => setCloseModalUpdate(false)}>
          Editar endereço
        </button>
      </li>
      <li>
        <button onClick={() => navigate("/allAdverts", { replace: true })}>
          Meus anúncios
        </button>
      </li>
      <li>
        <button onClick={() => navigate("/login", { replace: true })}>
          Sair
        </button>
      </li>
    </div>
  );
};

const NotSellerProfile = () => {
  const { setCloseModalUpdate, setCloseModalUpdateProfile } = useUser();
  const navigate = useNavigate();

  return (
    <div className="profileOptions">
      <li>
        <button onClick={() => setCloseModalUpdateProfile(false)}>
          Editar Perfil
        </button>
      </li>
      <li>
        <button onClick={() => setCloseModalUpdate(false)}>
          Editar endereço
        </button>
      </li>
      <li>
        <button onClick={() => navigate("/login", { replace: true })}>
          Sair
        </button>
      </li>
    </div>
  );
};

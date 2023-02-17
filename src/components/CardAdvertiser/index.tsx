import { useUser } from "../../Contexts/User";
import Button from "../Button";
import profile from "../assets/profile.svg";
import { CardAdvertiserStyled } from "./style";

const CardAdvertiser = () => {
  const { userMocked } = useUser();

  return (
    <CardAdvertiserStyled>
      <img src={profile} alt="imagem de perfil" />
      <p className="username"> {userMocked.username} </p>
      <p className="description"> {userMocked.description}</p>
      <Button
        type="button"
        background="var(--color-gray-0)"
        width="200px"
        fontSize="16px"
        borderColor="#0B0D0D"
      >
        Ver todos anuncios
      </Button>
    </CardAdvertiserStyled>
  );
};

export default CardAdvertiser;

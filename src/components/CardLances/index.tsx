import profile from "../../assets/profile.svg";
import point from "../../assets/point.svg";

import { CardLancesContainer } from "./styles";

import Input from "../Input";
import Button from "../Button";

const CardLances = () => {
  return (
    <CardLancesContainer>
      <p className="titleLances">Lances</p>
      <ul>
        <li>
          <div>
            <img src={profile} alt="imagem de perfil" />
            <p>Samuel Leão</p>
            <img src={point} alt="ponto" />
            <p>há 3 dias</p>
          </div>
          <span>R$ 58.000</span>
        </li>
        <li>
          <div>
            <img src={profile} alt="imagem de perfil" />
            <p>Samuel Leão</p>
            <img src={point} alt="ponto" />
            <p>há 3 dias</p>
          </div>
          <span>R$ 58.000</span>
        </li>
        <li>
          <div>
            <img src={profile} alt="imagem de perfil" />
            <p>Samuel Leão</p>
            <img src={point} alt="ponto" />
            <p>há 3 dias</p>
          </div>
          <span>R$ 58.000</span>
        </li>
      </ul>
      <div>
        <img src={profile} alt="imagem de perfil" />
        <p>Samuel Leão</p>
      </div>
      <p>Lance</p>
      <div className="inputContainer">
        <Input
          placeholder="Inserir valor do lance"
          label=""
          type="text"
          register={() => null}
          registerName="string"
        />
        <Button type="submit">Inserir Proposta</Button>
      </div>
    </CardLancesContainer>
  );
};

export default CardLances;

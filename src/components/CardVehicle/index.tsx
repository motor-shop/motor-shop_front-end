import { IVehicle } from "../../Contexts/Adverts";
import { CardVehicleStyled } from "./styles";

interface IPropsCardVehicle {
  vehicle: IVehicle;
}

const CardVehicle = ({ vehicle }: IPropsCardVehicle) => {
  return (
    <CardVehicleStyled>
      <figure className="containerImgVehicle">
        <img src={vehicle.vehicleImg} alt="teste" />
      </figure>
      <div className="containerVehicleTexts">
        <h2 className="title">{vehicle.title}</h2>
        <p className="description">`{vehicle.description}</p>
      </div>
      <div className="containerAdvertiserInfos">
        <div className="containerImgAdvertiser">
          {vehicle.advertiserImage ? (
            <img src={vehicle.advertiserImage} alt="vehicle" />
          ) : (
            <span>{vehicle.advertiserName[0].toUpperCase()}</span>
          )}
        </div>
        <p className="advertiserName">{vehicle.advertiserName}</p>
      </div>
      <div className="containerAdvertInfos">
        <div className="containerAdvertTags">
          <span className="advertTag">{vehicle.tags[0]}</span>
          <span className="advertTag">{vehicle.tags[1]}</span>
        </div>
        <p className="advertValue">R$ {vehicle.value}</p>
      </div>
    </CardVehicleStyled>
  );
};

export default CardVehicle;

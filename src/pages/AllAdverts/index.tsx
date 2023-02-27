import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carrousel from "../../components/Carrousel";
import CardVehicle from "../../components/CardVehicle";

import { AllAdvertStyled } from "./styles";
import { AdvertsStyled } from "./styles";
import profile from "../../assets/profile.svg";

import { useUser } from "../../Contexts/User";
import { useAdvert } from "../../Contexts/Adverts";

const AllAdverts = () => {
  const { userMocked } = useUser();
  const { vehiclesMocked } = useAdvert();

  return (
    <>
      <Header />
      <AllAdvertStyled>
        <div className="profileContainer">
          <img src={profile} alt="imagem de perfil" />
          <div className="name">
            <p className="profileName"> {userMocked.username}</p>
            <div className="isSeller">
              <p> Anunciante</p>
            </div>
          </div>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </AllAdvertStyled>
      <AdvertsStyled>
        <div className="cars">
          <Carrousel
            carrouselTitle="Carros"
            gapBetweenItems="48px"
            autoScroll={false}
          >
            <CardVehicle vehicle={vehiclesMocked[0]} />
            <CardVehicle vehicle={vehiclesMocked[1]} />
            <CardVehicle vehicle={vehiclesMocked[2]} />
            <CardVehicle vehicle={vehiclesMocked[0]} />
            <CardVehicle vehicle={vehiclesMocked[1]} />
            <CardVehicle vehicle={vehiclesMocked[2]} />
            <CardVehicle vehicle={vehiclesMocked[0]} />
          </Carrousel>
        </div>

        <div className="motorcycles">
          <Carrousel
            carrouselTitle="Motos"
            gapBetweenItems="48px"
            autoScroll={false}
          >
            <CardVehicle vehicle={vehiclesMocked[0]} />
            <CardVehicle vehicle={vehiclesMocked[1]} />
            <CardVehicle vehicle={vehiclesMocked[2]} />
            <CardVehicle vehicle={vehiclesMocked[0]} />
            <CardVehicle vehicle={vehiclesMocked[1]} />
            <CardVehicle vehicle={vehiclesMocked[2]} />
            <CardVehicle vehicle={vehiclesMocked[0]} />
          </Carrousel>
        </div>
      </AdvertsStyled>
      <Footer />
    </>
  );
};

export default AllAdverts;

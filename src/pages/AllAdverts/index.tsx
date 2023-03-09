import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carrousel from "../../components/Carrousel";
import CardVehicle from "../../components/CardVehicle";

import { AllAdvertStyled } from "./styles";
import { AdvertsStyled } from "./styles";
import profile from "../../assets/profile.svg";

import { useUser } from "../../Contexts/User";
import { useAdvert } from "../../Contexts/Adverts";
import Button from "../../components/Button";
import ModalCreateAdvert from "../../components/ModalCreateAdvert";
import MessageNotAdvert from "../../components/MessageNotAdverts";

const AllAdverts = () => {
  const { user } = useUser();
  const { setCloseModalCreateAdvert, vehiclesByUser } = useAdvert();
  const carVehicles = vehiclesByUser
    ? vehiclesByUser.filter(
        (vehiclesByUser: any) => vehiclesByUser.isCar === true
      )
    : [];
  const bikeVehicles = vehiclesByUser
    ? vehiclesByUser.filter(
        (vehiclesByUser: any) => vehiclesByUser.isCar === false
      )
    : [];

  return (
    <>
      <Header />
      <AllAdvertStyled>
        <div className="profileContainer">
          <img src={profile} alt="imagem de perfil" />
          <div className="name">
            <p className="profileName"> {user.username}</p>
            {user.is_seller ? (
              <div className="isSeller">
                <p> Anunciante</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          <p className="description">{user.description}</p>
          {user.is_seller ? (
            <Button
              type="button"
              background=" #FFFFFF"
              borderColor="##4529E6"
              backgroundHover="#EDEAFD"
              borderColorHover="##4529E6"
              width="150px"
              fontSize="16px"
              color="#4529E6"
              minButton={true}
              onClick={() => setCloseModalCreateAdvert(false)}
            >
              Criar anuncio
            </Button>
          ) : (
            <> </>
          )}
        </div>
      </AllAdvertStyled>
      <AdvertsStyled>
        <div className="cars">
          {user.is_seller ? (
            <Carrousel
              carrouselTitle="Carros"
              gapBetweenItems="48px"
              autoScroll={false}
            >
              <>*listar anuncios do usuário*</>
            </Carrousel>
          ) : (
            <Carrousel
              carrouselTitle="Carros"
              gapBetweenItems="48px"
              autoScroll={false}
            >
              {carVehicles.length > 0 ? (
                carVehicles.map((vehicle: any) => (
                  <CardVehicle vehicle={vehicle} id={vehicle.id} />
                ))
              ) : (
                <MessageNotAdvert />
              )}
            </Carrousel>
          )}
        </div>

        <div className="motorcycles">
          {user.is_seller ? (
            <Carrousel
              carrouselTitle="Motos"
              gapBetweenItems="48px"
              autoScroll={false}
            >
              <>*listar anuncios do usuário*</>
            </Carrousel>
          ) : (
            <Carrousel
              carrouselTitle="Motos"
              gapBetweenItems="48px"
              autoScroll={false}
            >
              {bikeVehicles.length > 0 ? (
                bikeVehicles.map((vehicle: any) => (
                  <CardVehicle vehicle={vehicle} id={vehicle.id} />
                ))
              ) : (
                <MessageNotAdvert />
              )}
            </Carrousel>
          )}
        </div>
      </AdvertsStyled>
      <ModalCreateAdvert />
      <Footer />
    </>
  );
};

export default AllAdverts;

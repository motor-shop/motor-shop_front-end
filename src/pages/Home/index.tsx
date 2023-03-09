import { HomeStyled, CardFilter } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import CardVehicle from "../../components/CardVehicle";
import Carrousel from "../../components/Carrousel";
import { useAdvert } from "../../Contexts/Adverts";
import ModalGlobal from "../../components/ModalGlobal";
import { useState } from "react";
// import CardAuctionCar from "../../components/CardAuctionCar";
import ModalUpdateAdvert from "../../components/ModalUpdateAdvert";
import ModalCreateAdvert from "../../components/ModalCreateAdvert";
import ModalUpdateProfile from "../../components/ModalUpdateUser";
import ModalUpdateAddress from "../../components/ModalUpdateAddress";
import MessageNotAdvert from "../../components/MessageNotAdverts";

const Home = () => {
  const { vehicles } = useAdvert();

  const [closeModalTest, setCloseModalTest] = useState<boolean>(true);
  const carVehicles = vehicles.filter(
    (vehicles: any) => vehicles.isCar === true
  );
  const bikeVehicles = vehicles.filter(
    (vehicles: any) => vehicles.isCar === false
  );

  return (
    <HomeStyled>
      <Header />
      <CardFilter>
        <p className="text1">
          Velocidade e experiência em um lugar feito para você
        </p>
        <p className="text2">
          Um ambiente feito para você explorar o seu melhor
        </p>
        <div>
          <Button type="submit">Carros</Button>
          <Button type="submit">Motos</Button>
        </div>
      </CardFilter>
      <Carrousel
        carrouselTitle="Leilão"
        gapBetweenItems="48px"
        autoScroll={true}
        autoScrollTime="slow"
        paddingBottom="200px"
        paddingTop="100px"
      >
        <MessageNotAdvert />
      </Carrousel>
      <Carrousel
        carrouselTitle="Carros"
        gapBetweenItems="48px"
        autoScroll={true}
        autoScrollTime="slow"
        paddingBottom="220px"
      >
        {carVehicles.length > 0 ? (
          carVehicles.map((vehicle: any) => (
            <CardVehicle vehicle={vehicle} id={vehicle.id} />
          ))
        ) : (
          <MessageNotAdvert />
        )}
      </Carrousel>
      <Carrousel
        carrouselTitle="Motos"
        gapBetweenItems="48px"
        autoScroll={true}
        autoScrollTime="slow"
        paddingBottom="120px"
      >
        {bikeVehicles.length > 0 ? (
          bikeVehicles.map((vehicle: any) => (
            <CardVehicle vehicle={vehicle} id={vehicle.id} />
          ))
        ) : (
          <MessageNotAdvert />
        )}
      </Carrousel>
      <ModalGlobal
        title="teste"
        closeModal={closeModalTest}
        setCloseModal={setCloseModalTest}
      >
        <p>teste</p>
      </ModalGlobal>
      <ModalUpdateAdvert />
      <ModalCreateAdvert />
      <ModalUpdateProfile />
      <ModalUpdateAddress />
      <Footer />
    </HomeStyled>
  );
};

export default Home;

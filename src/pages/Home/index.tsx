import { HomeStyled, CardFilter } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import CardVehicle from "../../components/CardVehicle";
import Carrousel from "../../components/Carrousel";
import { useAdvert } from "../../Contexts/Adverts";
import ModalGlobal from "../../components/ModalGlobal";
import { useRef, useState } from "react";
import CardAuctionCar from "../../components/CardAuctionCar";
import ModalUpdateAdvert from "../../components/ModalUpdateAdvert";
import ModalCreateAdvert from "../../components/ModalCreateAdvert";
import ModalUpdateProfile from "../../components/ModalUpdateUser";
import ModalUpdateAddress from "../../components/ModalUpdateAddress";

const Home = () => {
  const { vehicles } = useAdvert();

  const [closeModalTest, setCloseModalTest] = useState<boolean>(true);

  const carRef = useRef<HTMLDivElement>(null);
  const motoRef = useRef<HTMLDivElement>(null);

  const scrollToCar: any = () => {
    if (carRef.current !== null) {
      carRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMoto: any = () => {
    if (motoRef.current !== null) {
      motoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  
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
          <Button type="submit" onClick={scrollToCar}>
            Carros
          </Button>
          <Button type="submit" onClick={scrollToMoto}>
            Motos
          </Button>
        </div>
      </CardFilter>
      <div id="leilao">
      <Carrousel
        carrouselTitle="Leilão"
        gapBetweenItems="48px"
        autoScroll={true}
        autoScrollTime="slow"
        paddingBottom="200px"
        paddingTop="100px"
      >
        <CardAuctionCar />
      </Carrousel>
      </div>
      <div ref={carRef} id="car">
        <Carrousel
          carrouselTitle="Carros"
          gapBetweenItems="48px"
          autoScroll={true}
          autoScrollTime="slow"
          paddingBottom="220px"
        >
          {vehicles
            .filter((vehicles: any) => vehicles.isCar === true)
            .map((vehicle: any) => (
              <CardVehicle vehicle={vehicle} id={vehicle.id} />
            ))}
        </Carrousel>
      </div>
      <div ref={motoRef} id="moto">
        <Carrousel
          carrouselTitle="Motos"
          gapBetweenItems="48px"
          autoScroll={true}
          autoScrollTime="slow"
          paddingBottom="120px"
        >
          {vehicles
            .filter((vehicle: any) => vehicle.isCar === false)
            .map((vehicle: any) => (
              <CardVehicle vehicle={vehicle} id={vehicle.id} />
            ))}
        </Carrousel>
      </div>
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

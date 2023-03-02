import { HomeStyled, CardFilter } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import CardVehicle from "../../components/CardVehicle";
import Carrousel from "../../components/Carrousel";
import { useAdvert } from "../../Contexts/Adverts";
import ModalGlobal from "../../components/ModalGlobal";
import { useState } from "react";
import CardAuctionCar from "../../components/CardAuctionCar";
import ModalUpdateAdvert from "../../components/ModalUpdateAdvert";

const Home = () => {
  const { vehiclesMocked } = useAdvert();

  const [closeModalTest, setCloseModalTest] = useState<boolean>(true);

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
        <CardAuctionCar />
      </Carrousel>
      <Carrousel
        carrouselTitle="Carros"
        gapBetweenItems="48px"
        autoScroll={true}
        autoScrollTime="slow"
        paddingBottom="220px"
      >
        <CardVehicle vehicle={vehiclesMocked[0]} />
        <CardVehicle vehicle={vehiclesMocked[1]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[0]} />
        <CardVehicle vehicle={vehiclesMocked[1]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[0]} />
      </Carrousel>
      <Carrousel
        carrouselTitle="Motos"
        gapBetweenItems="48px"
        autoScroll={true}
        autoScrollTime="slow"
        paddingBottom="120px"
      >
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
      </Carrousel>
      {/* <ModalGlobal
        title="teste"
        closeModal={closeModalTest}
        setCloseModal={setCloseModalTest}
      >
        <p>teste</p>
      </ModalGlobal> */}
      <ModalUpdateAdvert close={closeModalTest} setClose={setCloseModalTest} />
      <Button onClick={() => setCloseModalTest(false)} type={"button"}>
        Abrir modal editar anúncio
      </Button>
      <Footer />
    </HomeStyled>
  );
};

export default Home;

import { HomeStyled } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import CardVehicle from "../../components/CardVehicle";
import Input from "../../components/Input";
import Carrousel from "../../components/Carrousel";
import { useAdvert } from "../../Contexts/Adverts";

const Home = () => {
  const { vehiclesMocked } = useAdvert();

  return (
    <HomeStyled>
      <Header />
      <div></div>
      <Button type="button">text button</Button>
      <Input
        placeholder="test"
        label="teste"
        type="text"
        register={() => null}
        registerName="string"
      />
      <Carrousel
        carrouselTitle="Carros"
        gapBetweenItems="48px"
        autoScroll={true}
        autoScrollTime="slow"
      >
        <CardVehicle vehicle={vehiclesMocked[0]} />
        <CardVehicle vehicle={vehiclesMocked[1]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[0]} />
        <CardVehicle vehicle={vehiclesMocked[1]} />
        <CardVehicle vehicle={vehiclesMocked[2]} />
        <CardVehicle vehicle={vehiclesMocked[0]} />
      </Carrousel>
      <Footer />
    </HomeStyled>
  );
};

export default Home;

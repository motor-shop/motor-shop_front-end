import { HomeStyled, CardFilter } from "./styles";
import Header from "../../components/header";
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
      {/* <Button type="button">text button</Button> */}
      {/* <Input
        placeholder="test"
        label="teste"
        type="text"
        register={() => null}
        registerName="string"
      /> */}
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

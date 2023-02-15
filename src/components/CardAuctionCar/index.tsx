import {
  Container,
  ContainerInfoSeller,
  ContainerTime,
  CardInfoCar,
  ContainerInfoCar,
  ContainerImageBackground,
} from "./styles";
import { BiTimeFive } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import CarAudiction from "../../assets/imgs/car-auction.png";

const CardAuctionCar = () => {
  return (
    <Container>
      <ContainerImageBackground>
        <img src={CarAudiction} alt="Carro da Chevrolet" />
      </ContainerImageBackground>
      <ContainerTime>
        <BiTimeFive />
        <p>01:58:00</p>
      </ContainerTime>
      <h3>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem...
      </p>
      <ContainerInfoSeller>
        <img
          src="https://akamai.sscdn.co/uploadfile/cifraclub/avatar/3/9/46us9rfnmj4.jpg"
          alt=""
        />
        <p>Rodrigo Tavares</p>
      </ContainerInfoSeller>
      <ContainerInfoCar>
        <CardInfoCar>
          <span>2013</span>
          <span>0 KM</span>
        </CardInfoCar>
        <p>R$ 78.500,00</p>
      </ContainerInfoCar>
      <Link to={"/home"}>
        <p>Acessar página do leilão</p>
        <BsArrowRight />
      </Link>
    </Container>
  );
};

export default CardAuctionCar;

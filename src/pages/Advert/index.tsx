import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

import { AdvertStyled } from "./styles";

import CarAudiction from "../../assets/imgs/car-auction.png";
import CardPhoto from "../../components/CardPhoto";
import CardAdvertiser from "../../components/CardAdvertiser";
import CardLances from "../../components/CardLances";
import { useState } from "react";
import ModalGlobal from "../../components/ModalGlobal";

const Advert = () => {
  const [closeModalImage, setCloseModalImage] = useState<boolean>(true);
  const [imageModal, setImageModal] = useState<string>("");

  return (
    <>
      <Header />
      <AdvertStyled>
        <div className="container1">
          <div className="imgContainer">
            <img src={CarAudiction} alt="car auction" />
          </div>
          <div className="infos">
            <div className="carContainer">
              <p className="carTitle">
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
              </p>
              <div className="carValues">
                <div>
                  <span>2013</span> <span>0 KM</span>
                </div>
                <p>R$ 00.000,00</p>
              </div>
              <Button type="submit">Comprar</Button>
            </div>
            <div className="carContainer">
              <p className="carTitle">Descrição</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="container2">
          <CardPhoto
            setCloseModalImage={setCloseModalImage}
            setImageModal={setImageModal}
          />
          <CardAdvertiser />
          <CardLances />
        </div>
        <ModalGlobal
          title="Imagem do veículo"
          closeModal={closeModalImage}
          setCloseModal={setCloseModalImage}
        >
          <figure className="imageModal">
            <img src={imageModal} alt="" />
          </figure>
        </ModalGlobal>
      </AdvertStyled>
      <Footer />
    </>
  );
};

export default Advert;

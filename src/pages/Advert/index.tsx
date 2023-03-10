import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

import { AdvertStyled } from "./styles";

import CardPhoto from "../../components/CardPhoto";
import CardAdvertiser from "../../components/CardAdvertiser";
import CardLances from "../../components/CardLances";
import { useEffect, useState } from "react";
import ModalGlobal from "../../components/ModalGlobal";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import CardComent, { IComment } from "../../components/CardComent";
import CardAddComent from "../../components/CardAddComent";
import { useUser } from "../../Contexts/User";

interface IAdvert {
  id: string;
  is_selling: boolean;
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  is_car: boolean;
  cover_image: string;
  is_active: boolean;
  images: Array<string>;
  comments: Array<IComment>;
}

const Advert = () => {
  const [closeModalImage, setCloseModalImage] = useState<boolean>(true);
  const [imageModal, setImageModal] = useState<string>("");

  const { advertId } = useParams();

  const { isLogged } = useUser();

  const [advert, setAdvert] = useState<null | IAdvert>(null);

  useEffect(() => {
    api
      .get(`/adverts/${advertId}`)
      .then(({ data }) => setAdvert(data[0]))
      .catch((err) => console.log("erro", err));
  }, [advertId]);

  if (!advert) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />
      <AdvertStyled>
        <div className="container1">
          <div className="imgContainer">
            <img src={advert.cover_image} alt="car auction" />
          </div>
          <div className="infos">
            <div className="carContainer">
              <p className="carTitle">{advert.title}</p>
              <div className="carValues">
                <div>
                  <span>{advert.year}</span> <span>{advert.km} KM</span>
                </div>
                <p>R$ {advert.price}</p>
              </div>
              <Button type="submit">Comprar</Button>
            </div>
            <div className="carContainer">
              <p className="carTitle">Descrição</p>
              <p>{advert.description}</p>
            </div>
            <CardComent comments={advert.comments} />
            {isLogged && <CardAddComent advertId={advertId!} />}
          </div>
        </div>
        <div className="container2">
          <CardPhoto
            images={advert.images}
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

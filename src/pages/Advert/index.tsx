import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

import { AdvertStyled, ConfirmDeleteAdvertStyled } from "./styles";

import CardPhoto from "../../components/CardPhoto";
import CardAdvertiser from "../../components/CardAdvertiser";
import CardLances from "../../components/CardLances";
import { useEffect, useState } from "react";
import ModalGlobal from "../../components/ModalGlobal";
import { useAdvert } from "../../Contexts/Adverts";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

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
}

const Advert = () => {
  const [closeModalImage, setCloseModalImage] = useState<boolean>(true);
  const [imageModal, setImageModal] = useState<string>("");

  const [closeConfirmDeleteAdvert, setCloseConfirmDeleteAdvert] =
    useState<boolean>(true);
  const { deleteAdvertById } = useAdvert();

  const { advertId } = useParams();

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
        <ModalGlobal
          title="Excluir anúncio"
          closeModal={closeConfirmDeleteAdvert}
          setCloseModal={setCloseConfirmDeleteAdvert}
        >
          <ConfirmDeleteAdvertStyled>
            <h3>Tem certeza que deseja remover este anúncio?</h3>
            <p>
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </p>
            <div>
              <Button
                type="button"
                width="126px"
                color="var(--color-gray-2)"
                borderColor="var(--color-gray-6)"
                background="var(--color-gray-6)"
                backgroundHover="var(--color-gray-3)"
                borderColorHover="var(--color-gray-3)"
                onClick={() => setCloseConfirmDeleteAdvert(true)}
              >
                Cancelar
              </Button>
              <Button
                type="button"
                width="211px"
                color="var(--color-alert-1)"
                borderColor="var(--color-alert-2)"
                background="var(--color-alert-2)"
                backgroundHover="var(--color-alert-3)"
                borderColorHover="var(--color-alert-1)"
                onClick={() => deleteAdvertById(advert.id)}
              >
                Sim, excluir anúncio
              </Button>
            </div>
          </ConfirmDeleteAdvertStyled>
        </ModalGlobal>
      </AdvertStyled>
      <Footer />
    </>
  );
};

export default Advert;

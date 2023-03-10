import { useState } from "react";
import { IAdvertRequest, useAdvert } from "../../Contexts/Adverts";
import Button from "../Button";
import Input from "../Input";
import ModalGlobal from "../ModalGlobal";
import { CreateFormStyled } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api, config } from "../../services/api";
import ModalSuccessAdvert from "../ModalSucessAdvert";
import { useNavigate } from "react-router-dom";

const ModalCreateAdvert = () => {
  const { closeModalCreateAdvert, setCloseModalCreateAdvert } = useAdvert();
  const [isCar, setIsCar] = useState<boolean>(true);
  const [isSelling, setIsSelling] = useState<boolean>(true);
  const [countMap, setCountMap] = useState<Array<number>>([]);
  const [closeModalSucess, setcloseModalSucess] = useState<boolean>(true);
  let count = 1;
  const navigate= useNavigate()

  function createAdvert(data: any) {
    data.images = [];
    for (let i = 1; i <= count; i++) {
      data.images.push(data[`image${count}`]);
    }

    data.is_car = isCar;
    data.is_active = true;
    data.is_selling = isSelling;
    console.log(data);

    api
      .post("/adverts", data, config())
      .then((response) => {
        console.log(response.data);
        setcloseModalSucess(false);
        setCloseModalCreateAdvert(true)
        navigate(`/advert/${response.data.id}`)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function AddImage() {
    count += 1 / 2;
    console.log(count);
    return (
      <Input
        placeholder="Inserir URL da imagem"
        label={` ${count}° Imagem da galeria`}
        type="text"
        register={register}
        registerName={`image${count}`}
      />
    );
  }

  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório"),
    year: yup.string().required("Ano obrigatório"),
    km: yup.string().required("Km obrigatório"),
    price: yup.string().required("Preço obrigatório"),
    description: yup.string().required("Descrição obrigatório"),
    cover_image: yup.string().required("Imagem de capa obrigatório"),
    image1: yup.string().required("Imagem obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdvertRequest>({ resolver: yupResolver(formSchema) });

  return (
    <>
      <ModalGlobal
        title="Criar anúncio"
        closeModal={closeModalCreateAdvert}
        setCloseModal={setCloseModalCreateAdvert}
      >
        <CreateFormStyled onSubmit={handleSubmit(createAdvert)}>
          <label>Tipo de anuncio</label>
          <div className="containerSeller">
            {isSelling ? (
              <Button
                type="button"
                background="#4529E6"
                width="228px"
                fontSize="16px"
                minButton={true}
              >
                Venda
              </Button>
            ) : (
              <Button
                type="button"
                background=" #FFFFFF"
                backgroundHover="#212529"
                borderColorHover="#212529"
                borderColor="#ADB5BD"
                width="228px"
                fontSize="16px"
                color="#0B0D0D"
                minButton={true}
                onClick={() => setIsSelling(true)}
              >
                Venda
              </Button>
            )}
            {!isSelling ? (
              <Button
                type="button"
                background="#4529E6"
                width="228px"
                fontSize="16px"
                minButton={true}
              >
                Leilão
              </Button>
            ) : (
              <Button
                type="button"
                background=" #FFFFFF"
                backgroundHover="#212529"
                borderColorHover="#212529"
                borderColor="#ADB5BD"
                width="228px"
                fontSize="16px"
                color="#0B0D0D"
                minButton={true}
                onClick={() => setIsSelling(false)}
              >
                Leilão
              </Button>
            )}
          </div>
          <label>Informações do veículo</label>

          <Input
            placeholder="Digitar título"
            label="Título"
            type="text"
            register={register}
            registerName="title"
          />
          <span> {errors.title?.message}</span>
          <div className="info">
            <div className="errors">
              <Input
                placeholder="Digitar ano"
                label="Ano"
                type="text"
                register={register}
                registerName="year"
              />
              <span> {errors.year?.message}</span>
            </div>
            <div className="errors">
              <Input
                placeholder="0"
                label="Quilometragem"
                type="text"
                register={register}
                registerName="km"
              />
              <span> {errors.km?.message}</span>
            </div>
            <div className="errors">
              <Input
                placeholder="Digitar preço"
                label="Preço"
                type="text"
                register={register}
                registerName="price"
              />
              <span> {errors.price?.message}</span>
            </div>
          </div>
          <div className="containerDescription">
            <Input
              placeholder="Digitar descrição"
              label="Descrição"
              type="text"
              register={register}
              registerName="description"
            />
            <span> {errors.description?.message}</span>
          </div>
          <p>Tipo de veículo</p>
          <div className="containerCar">
            {isCar ? (
              <Button
                type="button"
                background="#4529E6"
                width="228px"
                fontSize="16px"
                minButton={true}
              >
                Carro
              </Button>
            ) : (
              <Button
                type="button"
                background=" #FFFFFF"
                backgroundHover="#212529"
                borderColorHover="#212529"
                borderColor="#ADB5BD"
                width="228px"
                fontSize="16px"
                color="#0B0D0D"
                minButton={true}
                onClick={() => setIsCar(true)}
              >
                Carro
              </Button>
            )}
            {!isCar ? (
              <Button
                type="button"
                background="#4529E6"
                width="228px"
                fontSize="16px"
                minButton={true}
              >
                Moto
              </Button>
            ) : (
              <Button
                type="button"
                background=" #FFFFFF"
                backgroundHover="#212529"
                borderColorHover="#212529"
                borderColor="#ADB5BD"
                width="228px"
                fontSize="16px"
                color="#0B0D0D"
                minButton={true}
                onClick={() => setIsCar(false)}
              >
                Moto
              </Button>
            )}
          </div>
          <Input
            placeholder="Inserir URL da imagem"
            label="Imagem de capa"
            type="text"
            register={register}
            registerName="cover_image"
          />
          <span> {errors.cover_image?.message}</span>
          <Input
            placeholder="Inserir URL da imagem"
            label="1° Imagem da galeria"
            type="text"
            register={register}
            registerName="image1"
          />
          <span> {errors.image1?.message}</span>
          {countMap.map(() => (
            <AddImage />
          ))}

          <div className="addImage">
            <Button
              type="button"
              background=" #EDEAFD"
              backgroundHover="#4529E6"
              borderColorHover="#4529E6"
              borderColor="#EDEAFD"
              width="315px"
              fontSize="14px"
              color="#4529E6"
              minButton={true}
              onClick={() => {
                setCountMap((oldCounter) => [...oldCounter, 1]);
                count += 1;
              }}
            >
              Adicionar campo para imagem da galeria
            </Button>
          </div>
          <div className="finalButton">
            <Button
              type="button"
              background=" #DEE2E6"
              borderColor="#DEE2E6"
              backgroundHover="#CED4DA"
              borderColorHover="#CED4DA"
              width="100px"
              fontSize="16px"
              color="#495057"
              minButton={true}
              onClick={() => setCloseModalCreateAdvert(true)}
            >
              Cancelar
            </Button>

            <Button
              type="submit"
              background=" #B0A6F0"
              backgroundHover="#B0A6F0"
              borderColorHover="#B0A6F0"
              borderColor="#EDEAFD"
              width="196px"
              fontSize="16px"
              color="#EDEAFD"
              minButton={true}
            >
              Criar Anuncio
            </Button>
          </div>
        </CreateFormStyled>
      </ModalGlobal>

      <ModalSuccessAdvert
        title="Seu anúncio foi criado com sucesso!"
        text="Agora você poderá ver seus negócios crescendo em grande escala"
        closeModal={closeModalSucess}
        setCloseModal={setcloseModalSucess}
      />
    </>
  );
};

export default ModalCreateAdvert;

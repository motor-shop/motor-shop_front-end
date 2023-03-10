import { IAdvertUpdate, IImage, useAdvert } from "../../Contexts/Adverts";
import { useState, useEffect } from "react";
import Button from "../Button";
import Input from "../Input";
import ModalGlobal from "../ModalGlobal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import UpdateAdvertSchema from "../../validations/UpdateAdvert";
import { Container, ContainerButtons, ContainerInputs } from "./style";
import ModalDeleteAdvert from "../ModalDeleteAdvert";
import { api, config } from "../../services/api";

interface IPropsModalUpdate {
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalUpdateAdvert = () => {
  const { advertMocked, setCloseModalUpdateAdvert, closeModalUpdateAdvert } = useAdvert();
  const [arrayImages, setArrayImages] = useState<IImage[]>([]);
  const [isSeller, setIsSeller] = useState<boolean>(advertMocked.is_selling);
  const [isCar, setIsCar] = useState<boolean>(advertMocked.is_car);
  const [isActive, setIsActive] = useState<boolean>(advertMocked.is_active);
  const [closeModalDeleteAdvert, setCloseModalDeleteAdvert] = useState(true);

  //const token = localStorage.getItem("@TOKEN");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkMjAyMGp1bmlvckBnbWFpbC5jb20iLCJpYXQiOjE2NzgzOTEzNzQsImV4cCI6MTY3ODQ3Nzc3NCwic3ViIjoiMDk5ZjcxMjktZDllMy00YTAyLWE2ZjMtODMzNTZmYzM0Mjc1In0.5c6o6YEm02-7ZUxvZJ_KiHSdaT3ZHJverveh-WQ_FTo";

  useEffect(() => {
    setArrayImages([...advertMocked.images]);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdvertUpdate>({
    resolver: yupResolver(UpdateAdvertSchema()),
  });

  const registerIn = (data: any) => {
    const formatedPrice = (string: string) => Number(string.replace(",", "."));

    data.title = data.title !== "" ? data.title : advertMocked.title;
    data.year = data.year !== "" ? Number(data.year) : advertMocked.year;
    data.km = data.km !== "" ? Number(data.km) : advertMocked.km;
    data.price =
      data.price !== "" ? formatedPrice(data.price) : advertMocked.price;
    data.description =
      data.description !== "" ? data.description : advertMocked.description;
    data.is_car = isCar;
    data.cover_image =
      data.cover_image !== "" ? data.cover_image : advertMocked.cover_image;
    data.is_active = isActive;
    data.is_selling = isSeller;

    const imagensFull = arrayImages
      .map((img, i) => {
        let imagem: string = data[`imagem${i + 1}`];
        delete data[`imagem${i + 1}`];

        if (imagem !== "") {
          return imagem;
        }

        try {
          imagem = advertMocked.images[i].url;
          return imagem;
        } catch (error) {
          return undefined;
        }
      })
      .filter((elem) => elem !== undefined);

    data.images = imagensFull;

    api
      .patch(
        `/adverts/${"31bb4b9b-d0e1-42c9-9e1f-1355cf3259e3"}`,
        data,
        config()
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ModalGlobal
        title="Editar anúncio"
        closeModal={closeModalUpdateAdvert}
        setCloseModal={setCloseModalUpdateAdvert}
      >
        <Container>
          <form onSubmit={handleSubmit(registerIn)}>
            <h4>tipo de anuncio</h4>
            <ContainerButtons>
              <Button
                type="button"
                width="48%"
                minButton={true}
                color={
                  isSeller ? "var(--color-brand-4)" : "var(--color-gray-1)"
                }
                background={
                  isSeller ? "var(--color-brand-2)" : "var(--color-whiteFixed)"
                }
                borderColor={isSeller ? "#5126EA" : "#868E96"}
                backgroundHover={
                  isSeller ? "var(--color-brand-3)" : "var(--color-gray-3)"
                }
                borderColorHover={isSeller ? "#B0A6F0" : "var(--color-gray-2)"}
                onClick={() => setIsSeller(true)}
              >
                Venda
              </Button>
              <Button
                type="button"
                width="48%"
                color={
                  isSeller ? "var(--color-gray-1)" : "var(--color-brand-4)"
                }
                background={
                  isSeller ? "var(--color-whiteFixed)" : "var(--color-brand-2)"
                }
                borderColor={isSeller ? "#868E96" : "#5126EA"}
                backgroundHover={
                  isSeller ? "var(--color-gray-3)" : "var(--color-brand-3)"
                }
                borderColorHover={isSeller ? "var(--color-gray-2)" : "#B0A6F0"}
                minButton={true}
                onClick={() => setIsSeller(false)}
              >
                Leilão
              </Button>
            </ContainerButtons>
            <h4>Informações do veículo</h4>
            <Input
              placeholder={advertMocked.title}
              label="Título"
              type="text"
              register={register}
              registerName="title"
            />
            <span>{errors.title?.message}</span>
            <ContainerInputs>
              <Input
                placeholder={`${advertMocked.year}`}
                label="Ano"
                type="text"
                register={register}
                registerName="year"
              />
              <span>{errors.year?.message}</span>
              <Input
                placeholder={`${advertMocked.km}`}
                label="Quilometragem"
                type="text"
                register={register}
                registerName="km"
              />
              <span>{errors.km?.message}</span>
              <Input
                placeholder={`${advertMocked.price}`}
                label="Preço"
                type="text"
                register={register}
                registerName="price"
              />
            </ContainerInputs>
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              placeholder={advertMocked.description}
              autoFocus={false}
              {...register("description")}
            ></textarea>
            <h4>Tipo de veículo</h4>
            <ContainerButtons>
              <Button
                type="button"
                width="48%"
                minButton={true}
                color={isCar ? "var(--color-brand-4)" : "var(--color-gray-1)"}
                background={
                  isCar ? "var(--color-brand-2)" : "var(--color-whiteFixed)"
                }
                borderColor={isCar ? "#5126EA" : "#868E96"}
                backgroundHover={
                  isCar ? "var(--color-brand-3)" : "var(--color-gray-3)"
                }
                borderColorHover={isCar ? "#B0A6F0" : "var(--color-gray-2)"}
                onClick={() => setIsCar(true)}
              >
                Carro
              </Button>
              <Button
                type="button"
                width="48%"
                minButton={true}
                color={isCar ? "var(--color-gray-1)" : "var(--color-brand-4)"}
                background={
                  isCar ? "var(--color-whiteFixed)" : "var(--color-brand-2)"
                }
                borderColor={isCar ? "#868E96" : "#5126EA"}
                backgroundHover={
                  isCar ? "var(--color-gray-3)" : "var(--color-brand-3)"
                }
                borderColorHover={isCar ? "var(--color-gray-2)" : "#B0A6F0"}
                onClick={() => setIsCar(false)}
              >
                Moto
              </Button>
            </ContainerButtons>
            <h4>Publicado</h4>
            <ContainerButtons>
              <Button
                type="button"
                width="48%"
                minButton={true}
                color={
                  isActive ? "var(--color-brand-4)" : "var(--color-gray-1)"
                }
                background={
                  isActive ? "var(--color-brand-2)" : "var(--color-whiteFixed)"
                }
                borderColor={isActive ? "#5126EA" : "#868E96"}
                backgroundHover={
                  isActive ? "var(--color-brand-3)" : "var(--color-gray-3)"
                }
                borderColorHover={isActive ? "#B0A6F0" : "var(--color-gray-2)"}
                onClick={() => setIsActive(true)}
              >
                Sim
              </Button>
              <Button
                type="button"
                width="48%"
                minButton={true}
                color={
                  isActive ? "var(--color-gray-1)" : "var(--color-brand-4)"
                }
                background={
                  isActive ? "var(--color-whiteFixed)" : "var(--color-brand-2)"
                }
                borderColor={isActive ? "#868E96" : "#5126EA"}
                backgroundHover={
                  isActive ? "var(--color-gray-3)" : "var(--color-brand-3)"
                }
                borderColorHover={isActive ? "var(--color-gray-2)" : "#B0A6F0"}
                onClick={() => setIsActive(false)}
              >
                Não
              </Button>
            </ContainerButtons>
            <Input
              placeholder={advertMocked.cover_image}
              label="Imagem da capa"
              type="text"
              register={register}
              registerName="cover_image"
            />
            {arrayImages.map((image, i) => (
              <Input
                key={i}
                placeholder={image.url}
                label={`${i + 1}º imagem`}
                type="text"
                register={register}
                registerName={`imagem${i + 1}`}
              />
            ))}
            <Button
              type="button"
              width="70%"
              minButton={true}
              fontSize="14px"
              color="var(--color-brand-1)"
              background="var(--color-brand-4)"
              borderColor="#EDEAFD"
              borderColorHover="var(--color-brand-3)"
              backgroundHover="var(--color-brand-3)"
              onClick={() => {
                const newImage = {
                  id: "",
                  url: "Inserir URL da imagem",
                };
                setArrayImages((oldImages) => [...oldImages, newImage]);
              }}
            >
              Adicionar campo para imagem da galeria
            </Button>

            <div className="containerFinalButtons">
              <Button
                type="button"
                width="57%"
                minButton={true}
                color="var(--color-gray-2)"
                background="var(--color-gray-6)"
                borderColor="#DEE2E6"
                backgroundHover="var(--color-gray-4)"
                borderColorHover="var(--color-gray-4)"
                onClick={() => setCloseModalDeleteAdvert(false)}
              >
                Excluir anúncio
              </Button>
              <Button
                type="submit"
                width="41%"
                minButton={true}
                color="var(--color-brand-4)"
                background="var(--color-brand-3)"
                borderColor="#EDEAFD"
                borderColorHover="var(--color-brand-2)"
                backgroundHover="var(--color-brand-2)"
              >
                Salvar alterações
              </Button>
            </div>
          </form>
        </Container>
      </ModalGlobal>
      <ModalDeleteAdvert
        closeModal={closeModalDeleteAdvert}
        setCloseModal={setCloseModalDeleteAdvert}
        advertId={"1234"}
      />
    </>
  );
};

export default ModalUpdateAdvert;

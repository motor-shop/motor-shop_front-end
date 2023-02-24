import { useAdvert } from "../../Contexts/Adverts";
import Button from "../Button";
import { Container } from "./styles";

interface IPropsCardPhoto {
  setCloseModalImage: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModal: React.Dispatch<React.SetStateAction<string>>;
}

const CardPhoto = ({ setCloseModalImage, setImageModal }: IPropsCardPhoto) => {
  const { imagesCar } = useAdvert();
  return (
    <Container>
      <h3>Fotos</h3>
      <div className="listImages">
        {imagesCar.map((elem) => (
          <Button
            type="button"
            onClick={() => {
              setCloseModalImage(false);
              setImageModal(elem);
            }}
          >
            <img src={elem} alt="Card car" />
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default CardPhoto;

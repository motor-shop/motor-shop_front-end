import Button from "../Button";
import { Container } from "./styles";

interface IPropsCardPhoto {
  setCloseModalImage: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModal: React.Dispatch<React.SetStateAction<string>>;
  images: Array<string>;
}

const CardPhoto = ({
  setCloseModalImage,
  setImageModal,
  images,
}: IPropsCardPhoto) => {
  return (
    <Container>
      <h3>Fotos</h3>
      <div className="listImages">
        {images.map((elem, index) => (
          <Button
            key={index}
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

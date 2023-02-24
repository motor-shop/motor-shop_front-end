import { useAdvert } from "../../Contexts/Adverts";
import Button from "../Button";
import { Container } from "./styles";

const CardPhoto = () => {
  const { imagesCar } = useAdvert();
  return (
    <Container>
      <h3>Fotos</h3>
      <div className="listImages">
        {imagesCar.map((elem) => (
          <Button type="button">
            <img src={elem} alt="Card car" />
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default CardPhoto;

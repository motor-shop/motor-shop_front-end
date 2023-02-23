import { useAdvert } from "../../Contexts/Adverts";
import { Container } from "./styles";

const CardPhoto = () => {
  const { imagesCar } = useAdvert();
  return (
    <Container>
      <h3>Fotos</h3>
      <div>
        {imagesCar.map((elem) => (
          <img src={elem} alt="Card car" />
        ))}
      </div>
    </Container>
  );
};

export default CardPhoto;

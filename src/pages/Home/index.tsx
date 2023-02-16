import { HomeStyled } from "./styles";
import Footer from "../../components/Footer";

const Home = () => {
  const vehicleExample = {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing",
    title: "Product title stays here - max 1 line",
    tags: ["0 KM", "2019"],
    value: "00.000,00",
    advertiserName: "Victor",
    advertiserImage: "https://cdn-icons-png.flaticon.com/512/20/20863.png",
  };

  return (
    <HomeStyled>
      <Footer />
    </HomeStyled>
  );
};

export default Home;

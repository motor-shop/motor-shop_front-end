import { useUser } from "../../Contexts/User";
import ModalGlobal from "../ModalGlobal";
import { DivStyled } from "./styles";

interface IPropsModalSucessAdvert {
  title: string;
  text: string;
  closeModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalSuccessAdvert = ({
  title,
  text,
  closeModal,
  setCloseModal,
}: IPropsModalSucessAdvert) => {
  return (
    <>
      <ModalGlobal
        title="Sucesso!"
        closeModal={closeModal}
        setCloseModal={setCloseModal}
      >
        <DivStyled>
          <h1>{title}</h1>
          <p>{text}</p>
        </DivStyled>
      </ModalGlobal>
    </>
  );
};

export default ModalSuccessAdvert;

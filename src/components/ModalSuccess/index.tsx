import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useUser } from "../../Contexts/User";
import ModalGlobal from "../ModalGlobal";
import { DivStyled } from "./styles";

const ModalSuccess = () => {
  const { closeModalSuccess, setCloseModalSuccess } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <ModalGlobal
        title="Sucesso!"
        closeModal={closeModalSuccess}
        setCloseModal={setCloseModalSuccess}
      >
        <DivStyled>
          <h1>Sua conta foi criada com sucesso!</h1>
          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>
          <Button
            type="button"
            background="#4529E6"
            width="150px"
            fontSize="14px"
            minButton={true}
            onClick={() => navigate("/login", { replace: true })}
          >
            Ir para login
          </Button>
        </DivStyled>
      </ModalGlobal>     
    </>
  );
};

export default ModalSuccess;

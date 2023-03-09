import ModalGlobal from "../ModalGlobal";
import Button from "../Button";
import { ConfirmDeleteAdvertStyled } from "./style";
import { useAdvert } from "../../Contexts/Adverts";

interface IPropsModalDeleteAdvert {
  closeModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
  advertId?: string;
}

const ModalDeleteAdvert = ({
  closeModal,
  setCloseModal,
  advertId,
}: IPropsModalDeleteAdvert) => {
  const { deleteAdvertById } = useAdvert();

  return (
    <ModalGlobal
      title="Excluir anúncio"
      closeModal={closeModal}
      setCloseModal={setCloseModal}
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
            onClick={() => setCloseModal(true)}
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
            onClick={() => deleteAdvertById(advertId!)}
          >
            Sim, excluir anúncio
          </Button>
        </div>
      </ConfirmDeleteAdvertStyled>
    </ModalGlobal>
  );
};

export default ModalDeleteAdvert;

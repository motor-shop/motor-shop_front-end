import { useUser } from "../../Contexts/User";
import Button from "../Button";
import ModalGlobal from "../ModalGlobal";
import { ConfirmDeleteUserStyled } from "./styles";

interface IPropsConfirmDeleteUser {
  userId: string | null;
}

const ConfirmDeleteUser = ({ userId }: IPropsConfirmDeleteUser) => {
  const { closeConfirmDeleteUser, setCloseConfirmDeleteUser, deleteUserById } =
    useUser();
  return (
    <ModalGlobal
      title="Confirmar deleção"
      closeModal={closeConfirmDeleteUser}
      setCloseModal={setCloseConfirmDeleteUser}
    >
      <ConfirmDeleteUserStyled>
        <h3>Tem certeza que deseja remover seu usuário?</h3>
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
            onClick={() => setCloseConfirmDeleteUser(true)}
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
            onClick={() => (userId ? deleteUserById(userId) : "")}
          >
            Sim, excluir conta
          </Button>
        </div>
      </ConfirmDeleteUserStyled>
    </ModalGlobal>
  );
};

export default ConfirmDeleteUser;

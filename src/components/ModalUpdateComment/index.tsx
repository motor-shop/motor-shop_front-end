import Button from "../../components/Button";
import ModalGlobal from "../ModalGlobal";
import { Container } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IComment } from "../CardComent";
import { useEffect, useState } from "react";
import { api, config } from "../../services/api";

import { toast } from "react-toastify";

interface IPropsModalUpdateComment {
  closeModal: boolean;
  setCLoseModal: React.Dispatch<React.SetStateAction<boolean>>;
  comment: IComment;
  updatedList: () => Promise<void>;
}

interface IRequestUpdateComment {
  comment: string;
}
const ModalUpdateComment = ({
  closeModal,
  setCLoseModal,
  comment,
  updatedList,
}: IPropsModalUpdateComment) => {
  const [valueCommet, setValueComment] = useState("");

  useEffect(() => {
    setValueComment(comment.comment);
  }, [comment]);

  const formSchema = yup.object().shape({
    comment: yup.string().required("Comentário obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestUpdateComment>({ resolver: yupResolver(formSchema) });

  function createComment(data: IRequestUpdateComment) {
    api

      .patch(`/comments/${comment.id}`, data, config())
      .then((res) => {
        toast.success("Comentário editado com sucesso", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          className: "modal",
        });
        updatedList();
        setCLoseModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function deleteComment() {
    await api
      .delete(`/comments/${comment.id}`, config())
      .then((res) => {
        console.log(res);
        toast.error("Comentário deletado com sucesso!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          className: "modal",
        });
        updatedList();
        setCLoseModal(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo deu errado, tente novamente", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          className: "modal",
        });
      });
  }

  function onError() {
    toast.error("É obrigatório escrever algo para comentar!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      className: "modal",
    });
  }

  return (
    <>
      <ModalGlobal
        title="Editar comentário"
        closeModal={closeModal}
        setCloseModal={setCLoseModal}
      >
        <Container>
          <form onSubmit={handleSubmit(createComment, onError)}>
            <label htmlFor="comment">Comentário</label>
            <textarea
              id="comment"
              value={valueCommet}
              autoFocus={false}
              {...register("comment")}
              onChange={(e) => setValueComment(e.target.value)}
            ></textarea>
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
                onClick={() => deleteComment()}
              >
                Excluir comentário
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
    </>
  );
};

export default ModalUpdateComment;

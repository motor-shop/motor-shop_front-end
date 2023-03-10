import { useUser } from "../../Contexts/User";
import { Container } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import { toast } from "react-toastify";
import { useState } from "react";
import { api, config } from "../../services/api";

interface IRequestComment {
  comment: string;
  advertId: string;
}

interface IPropsCardAddComment {
  advertId: string;
}

const CardAddComent = ({ advertId }: IPropsCardAddComment) => {
  const { user } = useUser();
  const [valueComment, setValueComment] = useState("");

  const formSchema = yup.object().shape({
    comment: yup.string().required("Comentário obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestComment>({ resolver: yupResolver(formSchema) });

  function createComment(data: IRequestComment) {
    data.comment = valueComment;
    data.advertId = advertId;

    api
      .post("/comments", data, config())
      .then((res) => {
        console.log(res);
        toast.success("Comentário adicionado com sucesso!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          className: "modal",
        });

        setValueComment("");
      })
      .catch((err) => {
        console.log(err);
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
    <Container>
      <div className="containerDataUser">
        <div className="containerImgUser">
          <p className="imgUser">{user.username[0].toUpperCase()}</p>
        </div>
        <p>{user.username}</p>
      </div>
      <form onSubmit={handleSubmit(createComment, onError)}>
        <textarea
          placeholder="Comente aqui!!"
          {...register("comment")}
          value={valueComment}
          onChange={(e) => setValueComment(e.target.value)}
        ></textarea>
        <Button type="submit" width="20%">
          Comentar
        </Button>
      </form>
      <div className="containerButtos">
        <button onClick={() => setValueComment(`${valueComment}Gostei muito!`)}>
          Gostei muito!
        </button>
        <button onClick={() => setValueComment(`${valueComment}Incrível!`)}>
          Incrível!
        </button>
        <button
          onClick={() =>
            setValueComment(`${valueComment}Recomendarei para meus amigos!`)
          }
        >
          Recomendarei para meus amigos!
        </button>
      </div>
    </Container>
  );
};

export default CardAddComent;

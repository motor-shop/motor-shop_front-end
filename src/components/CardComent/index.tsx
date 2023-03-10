import { useEffect, useState } from "react";
import { IUserResponse } from "../../Contexts/User";
import { api } from "../../services/api";
import ModalUpdateComment from "../ModalUpdateComment";
import { CardComentStyled, ContainerDataCard } from "./styles";

export interface IComment {
  id: string;
  comment: string;
  created_at: Date;
  adverts_id: string;
  user: IUserResponse;
}

interface ICommentsProps {
  comments: Array<IComment>;
  advertId: string;
}

const CardComent = ({ comments, advertId }: ICommentsProps) => {
  const [closeModalUpdate, setCLoseModalUpdate] = useState(true);
  const [clickedComment, setCLickedComment] = useState<IComment>(
    {} as IComment
  );
  const [listComment, setListComment] = useState<IComment[]>([]);

  useEffect(() => {
    setListComment(comments);
  }, [comments]);

  const updatedComments = async () => {
    await api
      .get(`/comments/${advertId}`)
      .then((res) => {
        console.log(res);
        setListComment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formatedData = (date: string) => {
    const getDays = date.split("T")[0];
    const date2 = new Date();
    const date1 = new Date(getDays);
    const timeDiff = Math.abs(date1.getTime() - date2.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (diffDays - 1 === 0) {
      return "hoje";
    }

    return `há ${diffDays - 1} dias`;
  };

  return (
    <CardComentStyled>
      <p className="cardTitle">Comentários</p>
      <ul>
        {listComment.map((comment) => {
          return (
            <ContainerDataCard
              key={comment.id}
              onClick={() => {
                setCLickedComment(comment);
                setCLoseModalUpdate(false);
              }}
            >
              <div className="commentUserInfos">
                <div className="containerImgUser">
                  <p className="imgUser">
                    {comment.user.username[0].toUpperCase()}
                  </p>
                </div>
                <p className="nameUser">{comment.user.username}</p>
                <span className="datePublication">{`${formatedData(
                  `${comment.created_at}`
                )}`}</span>
              </div>
              <div className="commentText">{comment.comment}</div>
            </ContainerDataCard>
          );
        })}
        <ModalUpdateComment
          closeModal={closeModalUpdate}
          setCLoseModal={setCLoseModalUpdate}
          comment={clickedComment}
          updatedList={updatedComments}
        />
      </ul>
    </CardComentStyled>
  );
};

export default CardComent;

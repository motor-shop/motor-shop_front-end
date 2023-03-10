import { IUserResponse } from "../../Contexts/User";
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
}

const CardComent = ({ comments }: ICommentsProps) => {
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
        {comments.map((comment) => {
          return (
            <ContainerDataCard key={comment.id}>
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
      </ul>
    </CardComentStyled>
  );
};

export default CardComent;

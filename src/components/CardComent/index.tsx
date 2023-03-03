import React from "react";
import { IUserResponse } from "../../Contexts/User";
import { CardComentStyled } from "./styles";

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
  return (
    <CardComentStyled>
      <p className="cardTitle">Comentários</p>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <div className="commentUserInfos">
                <p className="imgUser">
                  {comment.user.username[0].toUpperCase()}
                </p>
                <p className="nameUser">{comment.user.username}</p>
                <span className="datePublication">{`{comment.created_at}`}</span>
              </div>
              <div className="commentText">{comment.comment}</div>
            </li>
          );
        })}
      </ul>
    </CardComentStyled>
  );
};

export default CardComent;

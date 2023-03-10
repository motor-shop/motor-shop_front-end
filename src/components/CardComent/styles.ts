import styled from "styled-components";

export const CardComentStyled = styled.div`
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-gray-10);
  padding: 3rem;

  p {
    font-weight: 600;
    font-family: var(--font-Lexend);
  }

  .commentUserInfos {
    display: flex;
    align-items: center;
    gap: 10px;

    margin-bottom: 10px;
  }

  .cardTitle {
    font-size: 1.17rem;
    font-weight: bold;
  }

  .nameUser {
    color: var(--color-gray-1);
    font-family: var(--fontDefault-Inter);
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
  }

  .datePublication {
    color: var(--color-gray-3);
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
  }

  .commentText {
    color: var(--color-gray-2);
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
  }
`;

export const ContainerDataCard = styled.li`
  min-height: 100px;

  margin-bottom: 18px;

  .containerImgUser {
    background-color: var(--color-brand-2);
    width: 32px;
    height: 32px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    .imgUser {
      color: var(--color-whiteFixed);
      font-weight: 200;
      font-size: 18px;
      line-height: 0px;
      font-family: var(--font-Lexend);
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
  }

  form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  form > span {
    color: red;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const MessageSucess = styled.p`
  color: var(--color-sucess-1);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const MessageError = styled.p`
  color: var(--color-alert-1);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

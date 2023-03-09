import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-brand-3);
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CotainerForm = styled.div`
  background-color: #fff;
  width: 95%;
  height: 320px;
  max-width: 450px;

  padding: 5px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: var(--color-brand-2);
    font-size: 20px;
    font-weight: 600;
  }

  form {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  form > div {
    width: 100%;
  }

  form > span {
    color: red;
    font-weight: 500;
    font-size: 14px;
  }
`;

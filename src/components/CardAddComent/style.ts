import styled from "styled-components";

export const Container = styled.div`
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-gray-10);
  padding: 3rem;
  margin-bottom: 35px;

  .containerDataUser {
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      color: var(--color-gray-1);
      font-family: var(--fontDefault-Inter);
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
    }
  }

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

  form {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;

    border: 1px solid var(--color-gray-5);
    padding: 2.5%;

    button {
      height: 40px;
      min-width: 90px;
      max-width: 150px;

      font-size: 14px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  form > textarea {
    width: 80%;
    height: 80px;

    resize: none;
    border: none;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }

  form > textarea:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  .containerButtos {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    button {
      background: var(--color-gray-7);
      width: auto;
      height: 24px;

      padding: 0px 12px;
      border: none;
      border-radius: 24px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;

      @media only screen and (max-width: 350px) {
        font-size: 11px;
      }
    }

    button:hover {
      background: var(--color-gray-6);
    }
  }
`;

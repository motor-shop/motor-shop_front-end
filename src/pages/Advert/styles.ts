import styled from "styled-components";

export const AdvertStyled = styled.div`
  background: linear-gradient(var(--color-brand-1), var(--color-brand-1))
    no-repeat;
  background-size: 100% 55vh;
  background-position: top;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 40px;
  gap: 15px;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1248px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 46px;
  }

  .container1 {
    width: 96%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (min-width: 880px) {
      width: 70%;
    }

    @media screen and (min-width: 1248px) {
      width: 50%;
    }

    .imgContainer {
      background-color: var(--color-gray-10);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      width: 100%;
      height: 355px;

      img {
        width: 90%;
        max-height: 99%;

        @media screen and (min-width: 880px) {
          width: 70%;
        }
      }
    }

    .infos {
      display: flex;
      flex-direction: column;
      gap: 39px;

      .carContainer {
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

        .carTitle {
          font-weight: bold;
          font-size: 1.17rem;
        }

        button {
          margin-top: 1rem;
          width: 6rem;
          height: 2rem;
          padding: 0;
        }
        .carValues {
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;

          @media (max-width: 430px) {
            flex-direction: column;
            gap: 2rem;
          }

          span {
            padding: 0.5rem;
            background-color: var(--color-brand-4);
            color: var(--color-brand-1);
            width: 3.25rem;
            height: 2rem;
            font-size: 0.875rem;
            font-weight: 600;
            border-radius: 4px;
          }
        }
      }
    }
  }

  .container2 {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 96%;

    @media screen and (min-width: 1248px) {
      gap: 34px;
    }

    @media screen and (min-width: 450px) {
      width: 440px;
    }
  }
`;

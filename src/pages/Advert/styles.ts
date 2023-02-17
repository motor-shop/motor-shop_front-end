import styled from "styled-components";

export const AdvertStyled = styled.div`
  background: var(--color-brand-1);
  height: 38rem;

  .imgContainer {
    margin: 1rem;
    background-color: var(--color-gray-10);
    justify-content: center;
    border-radius: 4px;
    padding: 5rem;

    @media (max-width: 430px) {
      padding: 7rem;
      display: flex;
    }
  }

  .carContainer {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
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
`;

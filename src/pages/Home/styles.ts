import styled from "styled-components";

export const HomeStyled = styled.div``;

export const CardFilter = styled.div`
  background-color: var(--color-brand-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 12rem 8rem 5rem 8rem;
  margin-bottom: 3rem;

  @media (max-width: 430px) {
    padding: 10rem 1rem;

    div {
      display: block;
      flex-direction: column;
    }
  }

  .text1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 3rem;
    font-family: var(--font-Lexend);
    width: 45%;
    text-align: center;

    @media (max-width: 430px) {
      font-size: 1.8rem;
      width: 85%;
    }
  }

  .text2 {
    font-family: var(--fontDefault-Inter);
    font-size: 0.9rem;
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    gap: 1rem;

    button {
      border: 1px solid;
      width: 10rem;
      padding: 0.8rem;
      font-family: var(--fontDefault-Inter);
      background-color: var(--color-brand-2);
      font-size: 0.9rem;

      @media (max-width: 430px) {
        width: 22rem;
      }
    }
  }
`;

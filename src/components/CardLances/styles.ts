import styled from "styled-components";

export const CardLancesContainer = styled.div`
  background-color: var(--color-gray-10);
  padding: 3rem;
  border-radius: 4px;
  margin-bottom: 3rem;

  .titleLances {
    font-weight: bold;
    margin-bottom: 2rem;
    font-size: 1.3rem;
  }

  li {
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 1rem 0rem 1rem 0rem;
  }

  .inputContainer {
    height: 3rem;
    display: flex;
    align-items: center;

    button {
      width: 50%;
      font-size: 0.8rem;
    }
  }
`;

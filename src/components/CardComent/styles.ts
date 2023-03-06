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

  .cardTitle {
    font-size: 1.17rem;
    font-weight: bold;
  }
`;

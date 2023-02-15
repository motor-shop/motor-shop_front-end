import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem;
  background-color: var(--color-gray-0);

  p {
    color: var(--color-whiteFixed);
  }

  button {
    background-color: var(--color-gray-1);
    border-radius: 4px;
    width: 3rem;
    height: 3rem;
    border: none;
  }

  @media (max-width: 450px) {
    background-color: red;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem;
  }
`;

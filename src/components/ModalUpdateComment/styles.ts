import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  textarea {
    width: 99%;
    height: 180px;
    resize: none;

    margin: 10px 2px 10px 2px;
    padding: 0px;

    background: var(--color-gray-8);
    border: none;
    border-radius: 4px;

    font-size: 16px;
    cursor: pointer;

    :focus {
      box-shadow: 0 0 0 0;
      outline: 1.5px solid var(--color-brand-2);
    }

    :hover {
      background: var(--color-gray-9);
    }

    ::placeholder {
      font-weight: 400;
      font-size: 16px;
      color: var(--color-gray-3);
    }
  }

  .containerFinalButtons {
    margin: 20px 0px 10px 0px;
    display: flex;
    gap: 2%;
  }
`;

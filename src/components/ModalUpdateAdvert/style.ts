import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 700px;
  overflow-y: auto;

  h4 {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
  }

  div {
    margin: 20px 2px 20px 2px;
  }

  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-gray-1);
  }

  textarea {
    width: 99%;
    height: 70px;
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
    margin: 60px 0px 10px 0px;
    display: flex;
    gap: 2%;
  }
`;

export const ContainerButtons = styled.div`
  width: 99%;
  height: auto;

  margin: 10px 0px 10px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerInputs = styled.div`
  margin: 0px 0px 10px 0px;
  display: flex;
  gap: 2%;
`;

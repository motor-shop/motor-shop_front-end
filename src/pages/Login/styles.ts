import styled from "styled-components";

export const Div = styled.div`
height: 100vh;
display: flex;
justify-content: center;
flex-direction: column;
`
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    background-color: var(--color-gray-10);
    border-radius: 4px;
    padding: 3rem;
    width: 25rem;
    gap: 1rem;
    height: 542px ;

    .titleForm {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }

  p {
    text-align: end;
    font-size: 12px;
  }

  .containerButtonResetPassword {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .buttonResetPassword {
    background: transparent;

    border: none;

    text-align: end;
    font-size: 12px;
  }

  .newUser {
    margin-top: 1rem;
    p {
      text-align: center;
      margin-bottom: 1rem;
    }
    button {
      border-color: black;
      background: white;
      color: black;
    }
  }
`;

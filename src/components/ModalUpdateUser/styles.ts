import styled from "styled-components";

export const FormStyled = styled.form`
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
  }

  input {
    height: 48px;
    margin-top: 15px;
    background-color: #ffffff;
    border: 1.5px solid #e9ecef;
    border-radius: 4px;
  }

  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 24px;
  }
  .containerDescription {
    input {
      height: 80px;
      padding-top: 0px;
      padding-bottom: 30px;
    }
    ::placeholder {
      margin: 0px;
      padding: 0px;
    }
  }

  .finalButton {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    margin-bottom: 23px;

    button {
      margin-left: 10px;
    }
  }
`;

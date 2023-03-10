import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;

  margin-top: 46px;
  margin-bottom: 95px;

  @media screen and (max-width: 450px) {
    width: hug;
  }

  .container {
    border-radius: 4px;
    background: #fdfdfd;
    width: 411px;
  }

  h1 {
    margin-top: 44px;
    margin-left: 48px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }

  .containerPersonalInfo {
    display: flex;
    flex-direction: column;
    margin-left: 48px;
    margin-right: 48px;
    width: 100%;

    p {
      margin-top: 34px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }

    input {
      width: 315px;
      height: 48px;
      margin-top: 15px;
    }

    label {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #212529;
      margin-top: 24px;
    }
  }

  .containerAddressInfo {
    display: flex;
    flex-direction: column;
    margin-left: 48px;
    margin-right: 48px;
    width: 100%;

    p {
      margin-top: 34px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }

    input {
      width: 315px;
      height: 48px;
      margin-top: 15px;
    }

    label {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #212529;
      margin-top: 24px;
    }

    .addressInfo2 {
      display: flex;

      input {
        width: 150px;
        margin-right: 10px;
      }

      .errors {
        display: flex;
        flex-direction: column;
      }
    }

    .isSellerButton {
      display: flex;
      align-items: center;

      button {
        margin-right: 8px;
        margin-top: 28px;
      }
      button:hover {
        color: var(--color-whiteFixed);
      }
    }
  }

  .finalButton {
    margin-top: 28px;
    margin-left: 48px;
    margin-bottom: 44px;
  }
`;

import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  .containerAddressInfo {
    display: flex;
    flex-direction: column;
    width: 100%;

    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }

    input {
      width: 466px;
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
      color: #212529;
      margin-top: 24px;
    }

    .addressInfo2 {
      display: flex;
      justify-content: space-between;

      input {
        width: 230px;
      }
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

  @media (max-width: 500px) {
    .containerAddressInfo {
      input {
        width: 425px;
      }
      .addressInfo2 {
        display: flex;
        justify-content: space-between;

        input {
          width: 200px;
        }
      }
    }
  }

  @media (max-width: 425px) {
    .containerAddressInfo {
      input {
        width: 370px;
      }

      .addressInfo2 {
        input {
          width: 170px;
        }
      }
    }
  }

  @media (max-width: 380px) {
    .containerAddressInfo {
      input {
        width: 320px;
      }

      .addressInfo2 {
        input {
          width: 150px;
        }
      }
    }
  }
`;

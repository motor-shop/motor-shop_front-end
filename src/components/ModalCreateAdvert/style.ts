import styled from "styled-components";

export const CreateFormStyled = styled.form`
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--color-gray-1);
    margin-top: 28px;
  }

  .containerSeller {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    margin-bottom: 24px;

    button {
      margin-left: 5px;
    }

    button:hover {
      color: var(--color-whiteFixed);
    }
  }

  .info {
    display: flex;
    justify-content: space-between;

    input {
      width: 148px;
    }

    @media (max-width: 455px) {
      flex-wrap: wrap;
      justify-content: flex-start;
      input {
        margin-right: 10px;
      }
    }
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

  p {
    margin-top: 24px;
    margin-bottom: 18px;
  }
  .containerCar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      margin-left: 5px;
    }
    button:hover {
      color: var(--color-whiteFixed);
    }
  }

  .addImage {
    margin-top: 28px;
    margin-bottom: 55px;
    button:hover {
        color:var(--color-whiteFixed) ;
      }
  }

  .finalButton {
    display: flex;
    justify-content: flex-end;

    button {
      margin-left: 10px;
    }

    @media (max-width: 455px) {
      .finalButton {
        justify-content: space-between;
        align-items: center;

        button {
          margin-left: 0px;
        }
      }
    }
  }

  @media (max-width: 455px) {
    input {
      width: 95%;
    }
    button {
      margin-right: 15px;
    }

    .finalButton {
      justify-content: space-between;
      align-items: center;

      button {
        margin-left: 0px;
      }
    }
  }
`;

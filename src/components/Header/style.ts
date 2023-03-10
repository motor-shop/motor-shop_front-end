import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--color-gray-10);
  border-bottom: 2px solid var(--color-gray-6);
  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;

    .logo {
      cursor: pointer;
    }

    .headerDropDown {
      border: none;
      background: var(--color-whiteFixed);
      border-radius: 8px;
    }
  }

  .menu {
    .menu.active {
      opacity: 1;
      visibility: visible;
      background-color: var(--color-gray-10);
    }

    .menu {
      opacity: 0;
    }

    button {
      color: var(--color-gray-2);
      font-size: 16px;
      margin-bottom: 20px;
      border: none;
      background-color: var(--color-gray-10);
      cursor: pointer;
    }

    .login {
      margin-left: 16px;
    }

    .btnRegister {
      width: 300px;
      height: 40px;
      border: 1px solid var(--color-gray-5);
      border-radius: 5px;
      color: var(--color-gray-2);
    }

    .options {
      border-top: 2px solid var(--color-gray-6);
      border-bottom: 2px solid var(--color-gray-6);
      margin-left: 16px;
    }

    .profile {
      margin-top: 10px;
      height: 40px;
      .menuProfile {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 35px;

        .btnProfile {
          background-color: var(--color-gray-10);
          margin: 0;
          margin-right: 35px;
        }
      }

      .profileOptionsContainer {
        position: absolute;
        .profileOptions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background-color: var(--color-gray-10);
          margin-left: 16px;

          button {
            background-color: var(--color-gray-10);
          }
        }
      }

      .menu.open {
        opacity: 1;
        visibility: visible;
      }

      .menu.close {
        opacity: 0;
      }
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid var(--color-gray-6);
    height: 80px;
    .header {
      border: none;
      .headerDropDown {
        visibility: hidden;
      }
    }

    .menu {
      visibility: visible;
      display: flex;
      flex-direction: row;

      .menu.active {
        opacity: 0;
      }

      .menu {
        opacity: 1;
        visibility: visible;
      }

      button {
        margin-right: 15px;
        margin-bottom: 0;
      }
      .options {
        display: flex;
        align-items: center;
        border-bottom: none;
        margin: 0;
        border-right: 2px solid var(--color-gray-6);
        border-top: none;
      }

      .login {
        display: flex;
        align-items: center;
        margin-left: 10px;
      }

      .btnLogin {
        color: var(--color-brand-1);
      }
      .btnRegister {
        width: 100px;
      }

      .profile {
        .profileOptionsContainer {
          .profileOptions {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background-color: var(--color-gray-9);

            button {
              background-color: var(--color-gray-9);
            }
          }
        }
      }
      .menu.open {
        opacity: 1;
        visibility: visible;
        position: absolute;
        background-color: var(--color-gray-9);
        box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        line-height: 28px;
        width: 200px;
      }

      .menu.close {
        opacity: 0;
      }
    }
  }
`;

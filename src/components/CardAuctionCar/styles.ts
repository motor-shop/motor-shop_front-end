import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 77%);
  width: 90%;
  height: 490px;

  :hover {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 30%);

    div:first-child {
      img {
        filter: brightness(25%);
      }
    }
  }

  h3 {
    color: var(--color-gray-10);
    width: 90%;
    font-size: 19px;
    font-weight: 600;
    text-align: initial;
    line-height: 25px;
    margin-left: 5%;
    z-index: 1;
  }

  p {
    color: var(--color-gray-5);
    width: 90%;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    text-align: initial;
    margin-left: 5%;
    z-index: 1;
  }

  a {
    background-color: var(--color-brand-1);
    color: var(--color-whiteFixed);
    width: 100%;
    height: 50px;

    font-size: 16px;
    font-weight: 600;
    text-decoration: none;

    padding: 0% 5% 0% 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a:hover {
    background-color: var(--color-brand-2);
  }

  a > svg {
    width: 38px;
    height: 65%;
  }

  a > p {
    margin: 0px;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (min-width: 500px) {
    max-width: 650px;
    height: 390px;
  }
`;

export const ContainerTime = styled.div`
  background-color: var(--color-whiteFixed);
  width: 120px;
  height: 40px;

  border-radius: 32px;
  margin: 10% 0% 0% 5%;

  display: flex;
  align-items: center;
  justify-content: initial;

  svg {
    color: var(--color-brand-1);
    width: 35%;
    height: 100%;
    margin: 0px 0px 0px 5px;
  }

  p {
    color: var(--color-gray-1);
    font-size: 16px;
    font-weight: 600;
    margin-left: 9px;
  }

  @media only screen and (min-width: 500px) {
    margin: 4.5% 0% 0% 5%;
  }
`;

export const ContainerInfoSeller = styled.div`
  width: 90%;
  height: 32px;

  margin-left: 5%;
  z-index: 1;

  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 32px;
    height: 32px;

    border-radius: 150px;
  }

  p {
    color: var(--color-whiteFixed);
    font-size: 14px;
    font-weight: 600;
    margin: 0px;
  }
`;

export const ContainerInfoCar = styled.div`
  width: 100%;
  height: 70px;

  padding: 0% 5% 0% 5%;

  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: space-between;

  p {
    color: var(--color-whiteFixed);
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
  }
`;

export const CardInfoCar = styled.div`
  width: 115px;
  height: 35px;
  z-index: 1;

  display: flex;
  gap: 11px;

  span {
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);
    width: 52px;
    height: 32px;

    font-size: 14px;
    font-weight: 600;

    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerImageBackground = styled.div`
  width: 90%;
  height: 82%;
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  img {
    width: 90%;
    position: absolute;
    filter: brightness(35%);
  }

  @media only screen and (min-width: 500px) {
    max-width: 650px;
    height: 300px;

    img {
      width: 80%;
      position: absolute;
      filter: brightness(33%);
    }
  }
`;

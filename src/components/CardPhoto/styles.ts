import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-gray-10);
  width: 100%;

  border-radius: 4px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 10px 36px 10px;

  @media screen and (min-width: 440px) {
    padding: 0 33px 36px 33px;
    height: 365px;
  }

  h3 {
    color: var(--color-gray-1);
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    margin-left: 2.5%;
  }
  div {
    width: 95%;
    height: 70%;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .listImages {
    display: flex;
    gap: 13px;
    width: 100%;

    button {
      width: 108px;
      height: 108px;
      border-radius: 4px;
      background: var(--color-gray-7);
      border: none;
      margin: 0;
      padding: 27px 7px;
    }
    img {
      width: 94px;
    }
  }
`;

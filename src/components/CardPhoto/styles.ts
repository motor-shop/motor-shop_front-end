import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-gray-10);
  width: 90%;
  height: 365px;
  max-width: 420px;

  border-radius: 4px;
  margin-bottom: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

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

    margin-left: 2.5%;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  div > img {
    width: 30%;
    margin-bottom: 15px;
    border-radius: 5px;
  }
`;

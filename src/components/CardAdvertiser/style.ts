import styled from "styled-components";

export const CardAdvertiserStyled = styled.div`
  position: absolute;
  width: 351px;
  height: 398px;
  margin-left: 12px;
  margin-top: 20px;
  padding: 40px 28px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background: var(--color-gray-10);
  border-radius: 4px;
  img {
    width: 104px;
    height: 104px;
  }
  .username {
    font-size: 20px;
    line-height: 25px;
    color: var(--color-gray-1);
    font-weight: bold;
  }

  .description {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: var(--color-gray-2);
  }

  @media (min-width: 1020px) {
    width: 440px;
    height: 426px;
  }
`;

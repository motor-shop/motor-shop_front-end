import styled from "styled-components";

interface iPropsCarrousel {
  gapBetweenItems?: string;
}

export const CarrouselStyled = styled.div<iPropsCarrousel>`
  width: 100vw;

  .carrouselTitle {
    padding: 0 0 63px 23px;
    font-family: var(--font-Lexend);
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: var(--color-gray-0);
    @media screen and (min-width: 462px) {
      padding: 0 0 63px 60px;
    }
  }

  .ListItems {
    padding-left: 23px;
    width: 100vw;
    height: 370px;
    overflow: hidden;

    display: flex;
    gap: ${({ gapBetweenItems }) =>
      gapBetweenItems ? gapBetweenItems : "48px"};

    @media screen and (min-width: 462px) {
      padding-left: 60px;
    }
  }
`;

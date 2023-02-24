import styled from "styled-components";

export const AllAdvertStyled = styled.div`
  height: 357px;
  display: flex;
  justify-content: center;

  background: var(--color-brand-1);

  .profileContainer {
    margin-top: 155px;
    position: absolute;
    padding: 3rem;
    height: 327px;
    width: 85%;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-gray-10);
    border-radius: 4px;

    @media (max-width: 430px) {
      height: auto;
      padding: 1rem;
    }

    img {
      width: 104px;
      height: 104px;
    }

    .name {
      display: flex;
      flex-direction: row;
      align-items: center;

      .profileName {
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        margin-right: 15px;
        color: var(--color-gray-1);
      }

      .isSeller {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 92px;
        height: 32px;
        border-radius: 4px;
        background: var(--color-brand-4);

        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: var(--color-brand-1);
        }
      }
    }
    .description {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      color: var(--color-gray-2);
    }
  }
`;

export const AdvertsStyled = styled.div`
  margin-top: 250px;
  display: flex;
  flex-direction: column;

  @media (max-width: 430px) {
    margin-top: 150px;
  }

  .motorcycles {
    margin-top: 250px;

    @media (max-width: 430px) {
      margin-top: 150px;
    }
    @media (max-height: 2000px) {
      margin-top: 50px;
    }
  }
`;

import styled from "styled-components";

export const CardVehicleStyled = styled.div`
  width: 312px;
  min-width: 312px;
  height: 350px;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  :hover .containerImgVehicle {
    border: 2px solid var(--color-brand-1);
    img {
      transform: scale(1.1);
      max-width: 99%;
      max-height: 179px;
    }
  }

  .containerImgVehicle {
    border: 2px solid inherit;
    height: 179px;
    max-height: 179px;
    min-height: 179px;
    padding: 0;
    margin-bottom: 13.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-gray-7);

    img {
      width: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-out;
    }
  }

  .containerVehicleTexts {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;

    .title {
      font-family: var(--font-Lexend);
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;

      color: var(--color-gray-1);
    }

    .description {
      font-family: var(--font-Inter);
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-gray-2);

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }

  .containerAdvertiserInfos {
    display: flex;
    gap: 8px;
    align-items: center;

    .containerImgAdvertiser {
      width: 32px;
      height: 32px;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--color-brand-2);

      font-weight: 500;
      font-size: 14px;
      line-height: 0px;
      color: var(--color-whiteFixed);

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
    }
    .advertiserName {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: var(--color-gray-2);
    }
  }
  .containerAdvertInfos {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;

    .containerAdvertTags {
      display: flex;
      gap: 28px;

      .advertTag {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-brand-1);
      }
    }

    .advertValue {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: var(--color-gray-1);
    }
  }
`;

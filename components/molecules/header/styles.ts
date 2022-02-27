import styled from "styled-components";

export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  align-items: center;
  height: 100%;
  width: 250px;
  border-left: 1px solid #eaefed;

  @media (max-width: 650px) {
    width: auto;
    position: absolute;
    border-left: none;
    left: 16px;
  }

  .container-user--data {
    display: flex;
    flex-direction: column;

    @media (max-width: 650px) {
      display: none;
    }
  }

  .icon-user {
    background: #b5f1dd;
    border-radius: 100%;
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #34423d;
    font-weight: 400;
  }

  .name-user {
    font-size: 14px;
    color: #34423d;
    line-height: 14px;
    font-weight: 600;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    color: #587169;
  }
`;

export const IconLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 100%;
  border-right: 1px solid #eaefed;
  background-position: center;
  background-size: contain;
  background-image: url("/images/logo.png");

  @media (max-width: 650px) {
    border: none;
  }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 62px;
  border-bottom: 1px solid #eaefed;
  position: relative;

  @media (max-width: 650px) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`;

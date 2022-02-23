import styled from "styled-components";

export const User = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  align-items: center;
  height: 100%;
  width: 250px;
  border-left: 1px solid #eaefed;

  .container-user--data {
    display: flex;
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
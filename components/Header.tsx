import styled from "styled-components";
import { useState } from "react";

export const FlexCentralize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  height: 62px;
  border-bottom: 1px solid #eaefed;
`;

export const Icon = styled(FlexCentralize)`
  width: 90px;
  height: 100%;
  border-right: 1px solid #eaefed;
  background-position: center;
  background-size: contain;
  background-image: url("./images/logo.png");
`;

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

interface Props {
  username: string;
}

export const Header = ({ username }: Props) => {
  function letterName(): string {
    let [name, surname]: string[] = username.split(" ");
    let abbreviationLetters = [name[0], surname[0]].join("");
    return abbreviationLetters;
  }

  return (
    <HeaderStyled>
      <Icon />
      <User>
        <div className="icon-user">{letterName()}</div>
        <div className="container-user--data">
          <div>
            <div className="name-user">{username}</div>
            <span>meus dados</span>
          </div>
        </div>
      </User>
    </HeaderStyled>
  );
};

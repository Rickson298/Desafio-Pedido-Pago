import styled from "styled-components";
import { IconLogo } from "./IconLogo";
import { User } from "./User";

export const HeaderStyled = styled.header`
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
      <IconLogo />
      <User>
        <div className="icon-user">{letterName()}</div>
        <div className="container-user--data">
          <div className="name-user">{username}</div>
          <span>meus dados</span>
        </div>
      </User>
    </HeaderStyled>
  );
};

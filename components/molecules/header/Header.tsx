import * as C from "./styles";

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
    <C.Container>
      <C.IconLogo />
      <C.User>
        <div className="icon-user">{letterName()}</div>
        <div className="container-user--data">
          <div className="name-user">{username}</div>
          <span>meus dados</span>
        </div>
      </C.User>
    </C.Container>
  );
};

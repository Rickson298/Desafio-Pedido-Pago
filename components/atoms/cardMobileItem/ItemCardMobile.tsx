import * as C from "./styles";

interface PropsCardItemMobile extends C.PropsCardMobileItemStyled {
  title: string;
  info: string | JSX.Element;
  src?: string;
  status?: boolean;
}

export const ItemCardMobile: React.FC<PropsCardItemMobile> = ({
  title,
  info,
  src,
  width,
  status,
  ...rest
}) => {
  return (
    <C.Container {...rest} width={width}>
      <span className="title-card-mobile">{title}</span>
      <div className="wrapper-card-mobile">
        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="Foto de perfil" className="icon-card-mobile" />
        )}
        <span className={`info-card-mobile ${status && "status"}`}>{info}</span>
      </div>
    </C.Container>
  );
};

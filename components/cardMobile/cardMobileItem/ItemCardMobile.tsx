import styled from "styled-components";
import { PropsCardItemMobile, PropsCardMobileItemStyled } from "./types";

const CardMobileItemStyled = styled.div<PropsCardMobileItemStyled>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "auto"};
  font-weight: ${({ fontWeight }) => fontWeight || "500"};
  height: 54px;
  justify-content: center;

  .icon-card-mobile {
    background: lightGray;
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }

  .title-card-mobile {
    font-size: 12px;
    color: #587169;
    font-weight: 600;
    margin-bottom: 2px;
  }
  .info-card-mobile {
    font-size: 12px;
    font-weight: 400;
    color: #587169;
  }

  .wrapper-card-mobile {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const ItemCardMobile: React.FC<PropsCardItemMobile> = ({
  title,
  info,
  src,
  width,
  ...rest
}) => {
  return (
    <CardMobileItemStyled {...rest} width={width}>
      <span className="title-card-mobile">{title}</span>
      <div className="wrapper-card-mobile">
        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt="Foto de perfil" className="icon-card-mobile" />
        )}
        <span className="info-card-mobile">{info}</span>
      </div>
    </CardMobileItemStyled>
  );
};

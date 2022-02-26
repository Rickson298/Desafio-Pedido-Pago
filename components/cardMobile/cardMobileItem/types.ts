export interface PropsCardMobileItemStyled {
  width?: string;
  fontWeight?: string;
}

export interface PropsCardItemMobile extends PropsCardMobileItemStyled {
  title: string;
  info: string | JSX.Element;
  src?: string;
}

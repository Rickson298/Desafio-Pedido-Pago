import styled from "styled-components";

export interface PropsCardMobileItemStyled {
  width?: string;
  bold?: boolean;
  inactiveStatus?: boolean;
}

export const Container = styled.div<PropsCardMobileItemStyled>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || "auto"};
  height: 54px;
  justify-content: center;

  .status {
    width: 74px;
    height: 24px;
    padding: 4px 8px;
    background: ${({ inactiveStatus }) =>
      inactiveStatus ? "#EAEFED" : "#b5f1dd"};
    border-radius: 80px;
    font-weight: 500;
    display: flex;
    justify-content: center;

    align-items: center;
    font-size: 14px;
  }

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
    color: ${({ inactiveStatus }) => (inactiveStatus ? "#A3B8B0" : "#587169")};

    font-weight: ${({ bold }) => (bold ? "600" : "500")};
  }

  .wrapper-card-mobile {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

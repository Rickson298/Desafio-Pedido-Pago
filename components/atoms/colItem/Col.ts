import styled from "styled-components";

interface PropsStyleColItem {
  desktopWidth?: string;
  mobileWidth?: string;
}

export const ColItem = styled.div<PropsStyleColItem>`
  display: inline-block;
  font-size: 12px;
  color: #587169;
  width: ${({ desktopWidth }) => desktopWidth || "120px"};
  font-weight: 600;
  color: #587169;

  @media (max-width: 650px) {
    width: ${({ mobileWidth }) => mobileWidth};
  }
`;

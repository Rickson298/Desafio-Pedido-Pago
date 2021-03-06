import styled from "styled-components";

interface PropsMainContentStyled {
  height?: string;
  justifyContent?: string;
}

export const MainContent = styled.main<PropsMainContentStyled>`
  width: 956px;
  min-height: ${({ height }) => height || "785px"};
  background: white;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: flex-start;
  padding: 30px 24px;

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    height: 100%;
  }
  @media (max-width: 650px) {
    padding: 15px 12px;
  }
`;

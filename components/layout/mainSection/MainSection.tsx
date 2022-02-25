import styled from "styled-components";

export const MainSection = styled.main`
  min-height: calc(100vh - 62px);
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  background: #f8faf9;
  padding: 24px;
  @media (max-width: 550px) {
    padding: 12px;
  }
`;

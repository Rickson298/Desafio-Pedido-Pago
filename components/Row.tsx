import styled from "styled-components";

interface Props {
  justifyContent?: string;
}

export const Row = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid #eaefed;
  height: 60px;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  position: relative;
`;

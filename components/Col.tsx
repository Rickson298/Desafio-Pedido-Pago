import styled from "styled-components";

interface Props {
  justifyContent?: string;
}

export const Col = styled.div<Props>`
  border: 1px solid #cad6d1;
  width: 100%;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
`;

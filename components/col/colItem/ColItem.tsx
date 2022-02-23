import styled from "styled-components";

interface PropsStyleColItem {
  width?: string;
}

export const ColItem = styled.div<PropsStyleColItem>`
  display: inline-block;
  font-size: 12px;
  color: #587169;
  width: ${({ width }) => width || "120px"};
  font-weight: 600;
  color: #587169;
`;

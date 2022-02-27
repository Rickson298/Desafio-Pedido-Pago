import styled from "styled-components";

interface PropsStyleCategory {
  color: string;
}

export const Category = styled.div<PropsStyleCategory>`
  display: flex;
  justify-content: center;
  color: ${({ color }) => color};
  font-weight: 600;
  cursor: pointer;
  height: 40px;
  width: 180px;
  transition: all ease 0.2s;
`;

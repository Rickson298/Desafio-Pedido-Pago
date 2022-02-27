import styled from "styled-components";

export interface PropsStyleGenericInfoCard {
  background?: string;
  color?: string;
  border?: string;
  width?: string;
}

export const Container = styled.div<PropsStyleGenericInfoCard>`
  position: relative;
  width: ${({ width }) => width || "415px"};
  height: 56px;
  background: ${({ background }) => background || "#f5faf8"};
  border-radius: 8px;
  border: ${({ border }) => border || "2px solid #cad6d1"};
  color: ${({ color }) => color || "#587169"};
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 15px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

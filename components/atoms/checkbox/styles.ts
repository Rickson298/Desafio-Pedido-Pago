import styled from "styled-components";

interface PropsStyledCheckbox {
  checked?: boolean;
}

export const Container = styled.div<PropsStyledCheckbox>`
  height: 20px;
  width: 20px;
  border-radius: 6px;
  background: ${({ checked }) => checked && "#1dd195"};
  color: white;
  text-align: center;
  border: ${({ checked }) => !checked && "2px solid #cad6d1"};
`;

import styled from "styled-components";
import { PropsCheckbox, PropsStyledCheckbox } from "./types";
import { BsCheck } from "react-icons/bs";

const CheckboxStyled = styled.div<PropsStyledCheckbox>`
  height: 20px;
  width: 20px;
  border-radius: 6px;
  background: ${({ checked }) => checked && "#1dd195"};
  color: white;
  text-align: center;
  border: ${({ checked }) => !checked && "2px solid #cad6d1"};
`;

export const Checkbox: React.FC<PropsCheckbox> = ({ checked }) => {
  return (
    <CheckboxStyled checked={checked}>
      <BsCheck size={20} />
    </CheckboxStyled>
  );
};

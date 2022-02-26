import styled from "styled-components";
import { PropsStyledButtonMobile } from "./types";

export const ButtonMobile = styled.div<PropsStyledButtonMobile>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 2px solid #b5f1dd;
  transition: all ease 0.2;
  padding: 14px 24px;
  width: 100%;
  border-radius: 8px;
  font-size: 16px;
  color: ${({ color }) => color || "#34423d"};
  font-weight: 600;
  background: ${({ background }) => background || "none"};
  cursor: pointer;

  .icon {
    height: 20px;
  }
`;

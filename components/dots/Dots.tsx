import styled from "styled-components";
import { Modal } from "../modal/Modal";

const DotModalStyled = styled.div`
  background: #587169;
  width: 4px;
  height: 4px;
  border-radius: 4px;
  position: relative;
  transform: translate(0px, 12px);

  &::before {
    content: "";
    position: absolute;
    background: #587169;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    bottom: -7px;
  }

  &::after {
    content: "";
    position: absolute;
    background: #587169;
    width: 4px;
    height: 4px;
    border-radius: 4px;
    bottom: 7px;
  }
`;

const ContainerDotModal = styled.div`
  cursor: pointer;
  height: 28px;
  width: 28px;
  display: flex;
  margin-left: auto;
  justify-content: center;
  transition: all ease 0.2s;
  border-radius: 4px;
  transform: translate(10px 10px);
  &:hover {
    background: lightGray;
  }

  &:hover + ${Modal} {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Dots = ({ ...rest }) => (
  <ContainerDotModal {...rest}>
    <DotModalStyled />
  </ContainerDotModal>
);

import styled from "styled-components";

interface Arrow {
  isOpen: boolean;
}

export const Arrow = styled.div<Arrow>`
  position: absolute;
  right: 22px;
  top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all ease 0.5s;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};

  &:hover {
    background: lightGray;
  }
`;

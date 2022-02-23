import styled from "styled-components";

interface PropsStyleHeader {
  left: string;
}

interface PropsStyleOption {
  color: string;
}

export const ContainerHeaderDashboar = styled.div<PropsStyleHeader>`
  width: 100%;
  display: flex;
  gap: 15px;
  position: relative;
  border-bottom: 2px solid #eaefed;

  &:before {
    content: "";
    position: absolute;
    background: #22e0a1;
    height: 2px;
    width: 180px;
    bottom: -2px;
    left: ${({ left }) => left};
    transition: all ease 0.2s;
  }
`;

export const HeaderOption = styled.div<PropsStyleOption>`
  display: flex;
  justify-content: center;
  color: ${({ color }) => color};
  font-weight: 600;
  cursor: pointer;
  height: 40px;
  width: 180px;
  transition: all ease 0.2s;
`;

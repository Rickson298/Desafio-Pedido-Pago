import { useState } from "react";
import styled from "styled-components";

type PropsHeader = {
  left: string;
};

type HeaderOption = {
  color: string;
};

const HeaderDashboardStyled = styled.div<PropsHeader>`
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

const HeaderOption = styled.div<HeaderOption>`
  display: flex;
  justify-content: center;
  color: ${({ color }) => color};
  font-weight: 600;
  cursor: pointer;
  height: 40px;
  width: 180px;
  transition: all ease 0.2s;
`;

interface Props {
  onClick?: (option: string) => void;
}

export const OptionsHeader: React.FC<Props> = ({ onClick = () => {} }) => {
  const [width, setWidth] = useState<string>("0px");
  const [currentOption, setCurrentOption] = useState<string>("Colaboradores");
  let options = ["Colaboradores", "Cargos"];

  return (
    <HeaderDashboardStyled left={width}>
      {options.map((option: string, index: number) => (
        <HeaderOption
          color={currentOption === option ? "#34423D" : "#A3B8B0"}
          onClick={() => {
            setCurrentOption(option);
            setWidth(`${195 * index}px`);
            onClick(option);
          }}
          key={index}
        >
          {option}
        </HeaderOption>
      ))}
    </HeaderDashboardStyled>
  );
};

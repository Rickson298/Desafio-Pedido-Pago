import { useState } from "react";
import styled from "styled-components";
import { IMapOptions, IOptionsHeaderProps } from "./types";

interface PropsStyleCategories {
  left: string;
}

const ContainerCategories = styled.div<PropsStyleCategories>`
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

export const CategoriesDesktop: React.FC<IOptionsHeaderProps> = ({
  onClick = () => {},
}) => {
  const [width, setWidth] = useState<string>("0px");
  const [currentOption, setCurrentOption] = useState<string>("Colaboradores");
  let options = [
    { label: "Colaboradores", endPoint: "/agents" },
    { label: "Cargos", endPoint: "roles" },
  ];

  return (
    <ContainerCategories left={width}>
      {options.map((option: IMapOptions, index: number) => (
        <Category
          color={currentOption === option.label ? "#34423D" : "#A3B8B0"}
          onClick={() => {
            setCurrentOption(option.label);
            setWidth(`${195 * index}px`);
            onClick(option.endPoint);
          }}
          key={index}
        >
          {option.label}
        </Category>
      ))}
    </ContainerCategories>
  );
};

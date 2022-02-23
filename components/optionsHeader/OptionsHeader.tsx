import { useState } from "react";
import { ContainerHeaderDashboar, HeaderOption } from "../modal/styles";
import { IMapOptions, IOptionsHeaderProps } from "./types";

export const OptionsHeader: React.FC<IOptionsHeaderProps> = ({
  onClick = () => {},
}) => {
  const [width, setWidth] = useState<string>("0px");
  const [currentOption, setCurrentOption] = useState<string>("Colaboradores");
  let options = [
    { label: "Colaboradores", endPoint: "/agents" },
    { label: "Cargos", endPoint: "roles" },
  ];

  return (
    <ContainerHeaderDashboar left={width}>
      {options.map((option: IMapOptions, index: number) => (
        <HeaderOption
          color={currentOption === option.label ? "#34423D" : "#A3B8B0"}
          onClick={() => {
            setCurrentOption(option.label);
            setWidth(`${195 * index}px`);
            onClick(option.endPoint);
          }}
          key={index}
        >
          {option.label}
        </HeaderOption>
      ))}
    </ContainerHeaderDashboar>
  );
};

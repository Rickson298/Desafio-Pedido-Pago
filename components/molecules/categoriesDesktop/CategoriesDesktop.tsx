import { useState } from "react";
import { Category } from "../../atoms/category/Category";
import * as C from "./styles";

interface IOptionsHeaderProps {
  onClick?: (option: string) => void;
}
interface IMapOptions {
  label: string;
  endPoint: string;
  name: string;
}

export const CategoriesDesktop: React.FC<IOptionsHeaderProps> = ({
  onClick = () => {},
}) => {
  const [width, setWidth] = useState<string>("0px");
  const [currentOption, setCurrentOption] = useState<string>("Colaboradores");
  let options = [
    {
      label: "Colaboradores",
      endPoint: "/agents",
      name: "button-colaboradores",
    },
    { label: "Cargos", endPoint: "roles", name: "button-cargos" },
  ];

  return (
    <C.Container left={width}>
      {options.map((option: IMapOptions, index: number) => (
        <Category
          data-cy={option.name}
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
    </C.Container>
  );
};

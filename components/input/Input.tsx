import Image from "next/image";
import { Label } from "../label/Label";
import { ContainerInput, InputStyled } from "./styled";
import { IUserProps } from "./types";

export const Input: React.FC<IUserProps> = ({
  placeholder,
  srcIcon,
  onChange,
  ...rest
}) => (
  <ContainerInput>
    <Label>Pesquisar por</Label>
    <div>
      {srcIcon && (
        <Image alt="Icon input" src={srcIcon} width={45} height={40} />
      )}
      <InputStyled onChange={onChange} {...rest} placeholder={placeholder} />
    </div>
  </ContainerInput>
);

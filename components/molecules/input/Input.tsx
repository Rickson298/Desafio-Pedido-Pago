import Image from "next/image";
import { Label } from "../../atoms/label/Label";
import * as C from "./styles";

export interface IUserProps {
  placeholder: string;
  srcIcon?: string;
  onChange: () => void;
}

export const Input: React.FC<IUserProps> = ({
  placeholder,
  srcIcon,
  onChange,
  ...rest
}) => (
  <C.Container>
    <Label>Pesquisar por</Label>
    <div>
      {srcIcon && (
        <Image alt="Icon input" src={srcIcon} width={45} height={40} />
      )}
      <input
        className="input"
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  </C.Container>
);

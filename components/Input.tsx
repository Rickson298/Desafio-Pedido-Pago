import styled from "styled-components";
import { Label } from "./Label";
import Image from "next/image";

const InputStyled = styled.input`
  width: 100%;
  font-family: "Poppins";
  border: none;
  outline: none;
  padding: 5px;

  &::placeholder {
    color: #587169;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    top: 15px;
    left: 50px;
  }
`;

const ContainerInput = styled.div`
  width: 100%;
  border: 2px solid #cad6d1;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 5px;
  outline: #ccc;
  margin: 32px 0px;
  position: relative;

  div {
    display: flex;
    align-items: center;
  }
`;

type Props = {
  placeholder: string;
  srcIcon?: string;
  onChange: () => void;
};

export const Input: React.FC<Props> = ({
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

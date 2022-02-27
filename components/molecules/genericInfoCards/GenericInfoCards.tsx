import styled from "styled-components";
import { Label } from "../../atoms/label/Label";
import * as C from "./styles";

export interface PropsGenericInfoCard extends C.PropsStyleGenericInfoCard {
  label: string;
  info: string | number;
}

export const GenericInfoCard: React.FC<PropsGenericInfoCard> = ({
  label,
  info,
  ...rest
}) => (
  <C.Container {...rest}>
    <Label>{label}</Label>
    {info}
  </C.Container>
);

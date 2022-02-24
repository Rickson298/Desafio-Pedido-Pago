import styled from "styled-components";
import { PropsStyleIconProfile } from "./types";

export const IconProfileColaborador = styled.div<PropsStyleIconProfile>`
  height: 80px;
  width: 80px;
  background-image: ${({ url }) => `url(${url})`};
  border-radius: 40px;
`;

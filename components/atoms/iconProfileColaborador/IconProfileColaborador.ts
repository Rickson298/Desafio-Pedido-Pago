import styled from "styled-components";

export interface PropsStyleIconProfile {
  url: string;
}

export const IconProfileColaborador = styled.div<PropsStyleIconProfile>`
  height: 80px;
  width: 80px;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: contain;
  border-radius: 40px;
`;

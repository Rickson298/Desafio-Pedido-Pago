import styled from "styled-components";

interface PropsStyle {
  marginTop?: string;
  marginBottom?: string;
}

export const TitleInfoDashboard = styled.div<PropsStyle>`
  font-size: 16px;
  font-weight: 600;
  color: #34423d;
  margin-top: ${({ marginTop }) => marginTop || "32px"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "32px"};
`;

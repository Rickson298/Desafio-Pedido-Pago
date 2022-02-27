import styled from "styled-components";

export const ContainerGenericInfoCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  justify-content: center;
  @media (max-width: 1005px) {
    justify-content: start;
  }
`;

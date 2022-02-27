import styled from "styled-components";

export const InfoColaborador = styled.div`
  display: flex;
  flex-direction: column;

  .single-name {
    font-weight: 600;
    color: #34423d;
    font-size: 18px;
  }

  .single-email {
    font-weight: 400;
    font-size: 14px;
    color: #587169;
  }
`;

export const DadosOrganizacionais = styled.div`
  min-height: 235px;
  width: 100%;
  border-radius: 8px;
  border: 2px solid #eaefed;
  padding: 24px;
`;

export const ContainerProfileColaborador = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
`;

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

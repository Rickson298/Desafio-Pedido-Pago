import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  width: 276px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
  background: #f5faf8;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  padding: 16px;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const ContainerCardPersonalInfo = styled.div`
  display: flex;
  flex-direction: column;

  .card-name {
    font-size: 12px;
    color: #587169;
  }

  .card-info {
    font-size: 14px;
    font-weight: 600;
    color: #34423d;
  }
`;

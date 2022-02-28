import styled from "styled-components";

export const H1 = styled.h1`
  width: 956px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 26px;
  gap: 16px;
  color: #34423d;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: #eaefed;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    gap: 0;
    padding: 0;
    transition: all ease 0.2s;
    cursor: pointer;
    &:hover {
      background: #cad6d1;
    }
  }

  @media (max-width: 1100px) {
    width: 100%;
  }

  @media (max-width: 550px) {
    font-size: 20px;
  }
`;

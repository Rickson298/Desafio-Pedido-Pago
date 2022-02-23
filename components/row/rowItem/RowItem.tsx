import styled from "styled-components";
import { PropStyleRowItem } from "./types";

export const RowItem = styled.div<PropStyleRowItem>`
  display: inline-block;
  font-size: 12px;
  color: #587169;
  font-weight: 400;
  position: ${({ position }) => position || "relative"};
  width: ${({ width }) => width || "120px"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({ inactiveStatus }) => (inactiveStatus ? "#A3B8B0" : "#587169")};
  display: flex;
  align-items: center;
  gap: 10px;
  right: ${({ right }) => right};

  .status {
    width: 74px;
    height: 24px;
    padding: 4px 8px;
    background: ${({ inactiveStatus }) =>
      inactiveStatus ? "#EAEFED" : "#b5f1dd"};
    border-radius: 80px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    color: "#34423D";
    align-items: center;
    font-size: 14px;
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    filter: ${({ inactiveStatus }) => inactiveStatus && "grayscale(100%)"};
    opacity: ${({ inactiveStatus }) => inactiveStatus && "0.2"};
  }
`;

import styled from "styled-components";

export const Modal = styled.div`
  width: 340px;
  transform: scale(0);
  transform-origin: 100% -5%;
  overflow: hidden;
  height: 132px;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  font-weight: 500;
  font-size: 16px;
  color: #587169;
  display: flex;
  z-index: 2;
  flex-direction: column;
  background: white;
  justify-content: space-around;
  align-items: start;
  position: absolute;
  left: -340px;
  top: 5px;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.175, 0, 0.32, 1.5);
  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &:hover {
    transform: scale(1);
    opacity: 1;
  }

  .trash-icon {
    height: 33px;
  }

  .eye-icon {
    height: 23px;
  }
`;

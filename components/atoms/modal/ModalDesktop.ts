import styled from "styled-components";

export const ModalDesktop = styled.div`
  width: 340px;
  transform: scale(0);
  transform-origin: 100% 100%;
  overflow: hidden;
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
  justify-content: center;
  align-items: start;
  position: absolute;
  left: -340px;
  bottom: 5px;
  opacity: 0;
  gap: 34px;
  transition: all 0.4s cubic-bezier(0.175, 0, 0.32, 1.5);

  .disable {
    color: #cad6d1;
  }
  a,
  button {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    .eye-icon {
      width: 23px;
    }

    img {
      height: auto;
      width: 21px;
      border-radius: 0px;
      margin-right: 15px;
    }
  }

  button {
    background: none;
    border: none;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    color: #587169;
  }

  &:hover {
    transform: scale(1);
    opacity: 1;
  }
`;

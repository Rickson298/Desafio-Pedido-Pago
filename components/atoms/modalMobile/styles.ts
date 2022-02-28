import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  inset: 0;
  transition: all ease 0.2s;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  padding: 10px;
  display: none;
  overflow: hidden;
  align-items: end;

  .trash-icon {
    height: 33px;
  }

  .center {
    display: flex;
    align-items: center;
  }

  .link {
    cursor: pointer;
    width: max-content;
    transition: all ease 0.2s;
    border-bottom: 1px solid white;

    &:hover {
      border-bottom: 1px solid #587169;
    }
  }

  .modal {
    background: white;
    transition: all ease 0.2s;
    width: 100%;
    height: auto;
    padding: 32px;
    border-radius: 8px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    font-weight: 500;
    color: #587169;
    gap: 34px;

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
        margin-left: 5px;
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

    .title {
      color: black;
    }
  }
`;

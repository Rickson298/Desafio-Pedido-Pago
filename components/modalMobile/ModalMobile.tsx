import { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const ModalMobileStyled = styled.div`
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

  .eye-icon {
    height: 23px;
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

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;

      img {
        height: auto;
        width: 21px;
        border-radius: 0px;
        margin-right: 15px;
      }
    }

    .title {
      color: black;
    }
  }
`;

interface Props {
  isOpenModalMobile: boolean;
  setIsOpenModalMobile: React.Dispatch<React.SetStateAction<boolean>>;
  // setEndPointByOption?: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalMobile: React.FC<Props> = ({
  isOpenModalMobile,
  setIsOpenModalMobile,
  children,
  ...rest
}) => {
  const modalRef = useRef<any>();

  const openModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.style.display = "flex";
      setTimeout(() => {
        if (modalRef.current) modalRef.current.style.opacity = "1";
      }, 100);
    }
  }, []);

  const closeModal = useCallback(() => {
    if (modalRef.current) modalRef.current.style.opacity = "0";
    setTimeout(() => {
      if (modalRef.current) modalRef.current.style.display = "none";
    }, 100);
  }, []);

  useEffect(() => {
    isOpenModalMobile ? openModal() : closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenModalMobile]);

  return (
    <ModalMobileStyled
      ref={modalRef}
      {...rest}
      onClick={() => setIsOpenModalMobile(!isOpenModalMobile)}
    >
      <div className="modal">{children}</div>
    </ModalMobileStyled>
  );
};

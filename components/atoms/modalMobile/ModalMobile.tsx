import { useEffect, useRef, useCallback } from "react";
import * as C from "./styles";

interface PropsModalMobile {
  isOpenModalMobile: boolean;
  setIsOpenModalMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalMobile: React.FC<PropsModalMobile> = ({
  isOpenModalMobile,
  setIsOpenModalMobile,
  children,
  ...rest
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

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
    <C.Container
      ref={modalRef}
      {...rest}
      onClick={() => setIsOpenModalMobile(!isOpenModalMobile)}
    >
      <div className="modal">{children}</div>
    </C.Container>
  );
};

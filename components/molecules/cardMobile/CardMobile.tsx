import { useCallback, useRef, useState } from "react";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Arrow } from "../../atoms/arrow/Arrow";
import { ButtonMobile } from "../../atoms/buttonMobile/Button";
import * as C from "./styles";

interface PropsCardMobile {
  componentModal?: React.ElementType;
  setIsOpenModalMobile?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardMobile: React.FC<PropsCardMobile> = ({
  children,
  setIsOpenModalMobile,
}) => {
  let cardRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardSize = useCallback(() => {
    if (cardRef.current)
      cardRef.current.style.maxHeight == "600px"
        ? (cardRef.current.style.maxHeight = "90px")
        : (cardRef.current.style.maxHeight = "600px");
  }, []);

  return (
    <>
      <C.Container ref={cardRef}>
        <Arrow
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
            handleCardSize();
          }}
        >
          <IoIosArrowDown />
        </Arrow>
        <div className="container-items-card-mobile">{children}</div>
        <ButtonMobile
          onClick={() => setIsOpenModalMobile && setIsOpenModalMobile(true)}
        >
          <BsFileEarmarkPlus color="#1DD195" />
          Ações
        </ButtonMobile>
      </C.Container>
    </>
  );
};

import styled from "styled-components";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useRef, useState } from "react";
import { Arrow } from "../../arrow/Arrow";
import { ButtonMobile } from "../../buttonMobile/ButtonMobile";
import { useCallback } from "react";

const CardMobileStyled = styled.div`
  border: 2px solid #b5f1dd;
  filter: drop-shadow(0px 4px 8px rgba(165, 171, 179, 0.16));
  border-radius: 8px;
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  gap: 18px;
  flex-wrap: wrap;
  max-height: 90px;
  transition: all ease 0.5s;
  position: relative;

  .container-items-card-mobile {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    gap: 20px;
  }
`;

interface props {
  componentModal?: React.ElementType;
  setIsOpenModalMobile?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardMobile: React.FC<props> = ({
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
      <CardMobileStyled ref={cardRef}>
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
      </CardMobileStyled>
    </>
  );
};

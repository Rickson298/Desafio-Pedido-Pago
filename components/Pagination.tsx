import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
  fullData: any[];
  currentData: any[];
  setCurrentData: React.Dispatch<React.SetStateAction<any[]>>;
  paginationInfoComplete?: boolean;
}

interface PropsStyled {
  isFirstPage: boolean;
  isLastPage: boolean;
}

export const PaginationStyled = styled.div<PropsStyled>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: -36px;

  .items-quantity--description {
    font-weight: 400;
    font-size: 16px;
    color: #587169;
  }

  .page-number {
    width: 75px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    color: #587169;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
  }

  .button-forward {
    border-radius: 0px 8px 8px 0px;
    border: 1.4px solid
      ${({ isLastPage }) => (isLastPage ? "#CAD6D1" : "#709085")};
    .arrow.forward {
      color: ${({ isLastPage }) => (isLastPage ? "#CAD6D1" : "#709085")};
    }
  }

  .button-backward {
    border-radius: 8px 0px 0px 8px;
    border: 1.4px solid
      ${({ isFirstPage }) => (isFirstPage ? "#CAD6D1" : "#709085")};
    .arrow.back {
      color: ${({ isFirstPage }) => (isFirstPage ? "#CAD6D1" : "#709085")};
    }
  }

  .button-forward,
  .button-backward {
    transition: all ease 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    width: 48px;
    height: 36px;
    outline: none;
    background: #fff;
    cursor: pointer;
    .arrow {
      font-size: 32px;
      transition: all ease 0.2s;
    }
    &:hover .arrow {
      transform: scale(1.2);
    }
  }
`;

export const Pagination = ({
  fullData,
  currentData,
  setCurrentData,
  paginationInfoComplete,
}: Props) => {
  let quantityShowList: number = 6;

  const [startCount, setStartCount] = useState<number>(0);
  const [endCount, setEndCount] = useState<number>(quantityShowList);

  let currentPage: number = endCount / quantityShowList,
    totalPages: number = Math.ceil(fullData.length / quantityShowList),
    isFirstPage: boolean = currentPage === 1,
    isLastPage: boolean = currentPage === totalPages;

  useEffect(() => {
    setCurrentData(() => {
      return fullData.slice(
        startCount,
        endCount > fullData.length ? fullData.length : endCount
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullData, startCount, endCount]);

  return (
    <PaginationStyled isFirstPage={isFirstPage} isLastPage={isLastPage}>
      {paginationInfoComplete && (
        <span className="items-quantity--description">
          Mostrando {currentData.length} de {fullData.length} registros
        </span>
      )}
      <div className="buttons">
        <button
          className="button-backward"
          onClick={() => {
            if (startCount > 0) {
              setStartCount((prevState) => prevState - quantityShowList);
              setEndCount((prevState) => prevState - quantityShowList);
            }
          }}
        >
          <IoIosArrowBack className="arrow back" />
        </button>
        <span className="page-number">
          {currentPage} de {totalPages}
        </span>
        <button
          className="button-forward"
          onClick={() => {
            if (endCount < fullData.length) {
              setStartCount((prevState) => prevState + quantityShowList);
              setEndCount((prevState) => prevState + quantityShowList);
            }
          }}
        >
          <IoIosArrowForward className="arrow forward" />
        </button>
      </div>
    </PaginationStyled>
  );
};

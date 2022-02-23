import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { ContainerPagination } from "./styles";

interface IPropsPagination {
  fullData: any[];
  currentData: any[];
  setCurrentData: React.Dispatch<React.SetStateAction<any[]>>;
  paginationInfoComplete?: boolean;
}
export const Pagination = ({
  fullData,
  currentData,
  setCurrentData,
  paginationInfoComplete,
}: IPropsPagination) => {
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
    <ContainerPagination isFirstPage={isFirstPage} isLastPage={isLastPage}>
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
    </ContainerPagination>
  );
};

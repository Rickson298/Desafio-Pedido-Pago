import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ContainerPagination } from "./styles";
import { IPropsPagination } from "./types";

export const Pagination = ({
  unpagedData,
  pagedData,
  setPagedData,
  paginationInfoComplete,
}: IPropsPagination) => {
  let quantityShowList: number = 6;

  const [startGetData, setStartGetData] = useState<number>(0);
  const [endGetData, setEndGetData] = useState<number>(quantityShowList);

  let currentPage: number = endGetData / quantityShowList,
    totalPages: number = Math.ceil(unpagedData.length / quantityShowList),
    isFirstPage: boolean = currentPage === 1,
    isLastPage: boolean = currentPage === totalPages;

  useEffect(() => {
    setPagedData(() => {
      return unpagedData.slice(
        startGetData,
        endGetData > unpagedData.length ? unpagedData.length : endGetData
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unpagedData, startGetData, endGetData]);

  return (
    <ContainerPagination isFirstPage={isFirstPage} isLastPage={isLastPage}>
      {paginationInfoComplete && (
        <span className="items-quantity--description">
          Mostrando {pagedData.length} de {unpagedData.length} registros
        </span>
      )}
      <div className="buttons">
        <button
          className="button-backward"
          onClick={() => {
            if (startGetData > 0) {
              setStartGetData((prevState) => prevState - quantityShowList);
              setEndGetData((prevState) => prevState - quantityShowList);
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
            if (endGetData < unpagedData.length) {
              setStartGetData((prevState) => prevState + quantityShowList);
              setEndGetData((prevState) => prevState + quantityShowList);
            }
          }}
        >
          <IoIosArrowForward className="arrow forward" />
        </button>
      </div>
    </ContainerPagination>
  );
};

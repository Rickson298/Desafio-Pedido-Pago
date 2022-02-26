import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { ButtonMobile } from "../buttonMobile/ButtonMobile";

interface IPropsPagination {
  unpagedData: any[];
  setPagedData: React.Dispatch<React.SetStateAction<any[]>>;
}
export const PaginationMobile = ({
  unpagedData,
  setPagedData: setCurrentData,
}: IPropsPagination) => {
  let quantityShowList: number = 6;

  const [startGetData] = useState<number>(0);
  const [endGetData, setEndGetData] = useState<number>(quantityShowList);
  const hasNextPage = endGetData < unpagedData.length;

  useEffect(() => {
    setCurrentData(() => {
      return unpagedData.slice(
        startGetData,
        hasNextPage ? endGetData : unpagedData.length
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unpagedData, startGetData, endGetData]);

  return (
    <ButtonMobile
      color={!hasNextPage ? "#b5f1dd" : "#34423d"}
      onClick={() => {
        setEndGetData((prevState) => prevState + quantityShowList);
      }}
    >
      <img className="icon" src="/icons/load-icon.png" />
      Carregar mais
    </ButtonMobile>
  );
};

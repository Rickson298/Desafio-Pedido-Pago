/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styled from "styled-components";
import useWindowSize from "../../../../hooks/useWindowSize";
import { CardMobile } from "../../../cardMobile/cardMobile/CardMobile";
import { ItemCardMobile } from "../../../cardMobile/cardMobileItem/ItemCardMobile";
import { Col } from "../../../col/col/Col";
import { ColItem } from "../../../col/colItem/ColItem";
import { H3 } from "../../../h3/H3";
import { Input } from "../../../input/Input";
import { Pagination } from "../../../pagination/Pagination";
import { PaginationMobile } from "../../../paginationMobile/PaginationMobile";
import { Row } from "../../../row/row/Row";
import { RowItem } from "../../../row/rowItem/RowItem";
import { ModalDesktopCargos } from "../modals/ModalDesktopCargos";
import { ModalMobileCargos } from "../modals/ModalMobileCargos";

import { IDataCargos, PropsCargos } from "./types";

export const ListagemCargos: React.FC<PropsCargos> = ({
  data = [],
  onChangeInput,
}) => {
  const [pagedData, setPagedData] = useState<IDataCargos[]>([]);
  const { windowWidth }: { windowWidth: any } = useWindowSize();
  const [isOpenModalMobile, setIsOpenModalMobile] = useState(false);

  return (
    <>
      {!!data.length && (
        <>
          <Input
            onChange={() => onChangeInput()}
            placeholder="Pesquise por cargos"
            srcIcon="/icons/search.png"
          />
          <H3>Listagem de Cargos</H3>
          {windowWidth > 750 ? (
            <>
              <Col justifyContent="start">
                <ColItem desktopWidth="196px">Cargo</ColItem>
                <ColItem desktopWidth="224px">Departamento</ColItem>
                <ColItem desktopWidth="96px">Colaboradores</ColItem>
              </Col>
              <div
                style={{
                  minHeight: "360px",
                }}
              >
                {pagedData.map((item: IDataCargos, index: number) => (
                  <Row justifyContent="start" key={index}>
                    <RowItem desktopWidth="196px">{item.name}</RowItem>
                    <RowItem desktopWidth="224px">{item.departament}</RowItem>
                    <RowItem desktopWidth="96px">
                      {item.agents_quantity}
                    </RowItem>
                    <RowItem position="absolute" right="-80px">
                      <ModalDesktopCargos />
                    </RowItem>
                  </Row>
                ))}
              </div>
              <Pagination
                unpagedData={data}
                pagedData={pagedData}
                setPagedData={setPagedData}
              />
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {pagedData.map((item: IDataCargos, index: number) => (
                <CardMobile
                  setIsOpenModalMobile={setIsOpenModalMobile}
                  key={index}
                >
                  <ItemCardMobile width="100%" title="Cargo" info={item.name} />
                  <ItemCardMobile
                    title="Departamento"
                    info={item.departament}
                  />
                  <ItemCardMobile
                    title="Colaboradores"
                    info={item.agents_quantity}
                  />
                </CardMobile>
              ))}
              <ModalMobileCargos
                isOpenModalMobile={isOpenModalMobile}
                setIsOpenModalMobile={setIsOpenModalMobile}
              />
              <PaginationMobile
                unpagedData={data}
                setPagedData={setPagedData}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

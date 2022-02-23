import { useState } from "react";
import styled from "styled-components";
import { Col } from "../../col/col/Col";
import { ColItem } from "../../col/colItem/ColItem";
import { Dots } from "../../dots/Dots";
import { Input } from "../../input/Input";
import { Pagination } from "../../pagination/Pagination";
import { Row } from "../../row/row/Row";
import { RowItem } from "../../row/rowItem/RowItem";
import { TitleInfoDashboard } from "../../titleInfoDashboard/TitleInfoDashboard";
import { IDataCargos, PropsCargos } from "./types";

export const ColaboradoresStyled = styled.div``;

export const Cargos: React.FC<PropsCargos> = ({ data = [], onChangeInput }) => {
  const [currentData, setCurrentData] = useState<IDataCargos[]>([]);
  return (
    <>
      {!!data.length && (
        <>
          <Input
            onChange={() => onChangeInput()}
            placeholder="Pesquise por cargos"
            srcIcon="/icons/search.png"
          />
          <TitleInfoDashboard>Listagem de Cargos</TitleInfoDashboard>
          <Col justifyContent="start">
            <ColItem width="196px">Cargo</ColItem>
            <ColItem width="224px">Departamento</ColItem>
            <ColItem width="96px">Colaboradores</ColItem>
          </Col>
          <div
            style={{
              minHeight: "360px",
            }}
          >
            {currentData.map((item: IDataCargos, index: number) => (
              <Row justifyContent="start" key={index}>
                <RowItem width="196px">{item.name}</RowItem>
                <RowItem width="224px">{item.departament}</RowItem>
                <RowItem width="96px">{item.agents_quantity}</RowItem>

                <RowItem position="absolute" right="-80px">
                  <Dots />
                </RowItem>
              </Row>
            ))}
          </div>
          <Pagination
            fullData={data}
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        </>
      )}
    </>
  );
};

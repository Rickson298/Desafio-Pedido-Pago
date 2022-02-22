import { Col } from "../../Col";
import styled from "styled-components";
import { ColItem } from "../../ColItem";
import { Row } from "../../Row";
import { RowItem } from "../../RowItem";
import { Input } from "../../Input";
import { IDataCargos, PropsCargos } from "./types";
import { TitleInfoDashboard } from "../../TitleInfoDashboard";
import { Dots } from "../../Dots";
export const ColaboradoresStyled = styled.div``;

export const Cargos: React.FC<PropsCargos> = ({ data = [], onChangeInput }) => {
  return (
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
      {data.map((item: IDataCargos, index: number) => (
        <Row justifyContent="start" key={index}>
          <RowItem width="196px">{item.name}</RowItem>
          <RowItem width="224px">{item.departament}</RowItem>
          <RowItem width="96px">{item.agents_quantity}</RowItem>

          <RowItem position="absolute" right="-80px">
            <Dots />
          </RowItem>
        </Row>
      ))}
    </>
  );
};

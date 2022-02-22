import { Col } from "../../Col";
import styled from "styled-components";
import { ColItem } from "../../ColItem";
import { Row } from "../../Row";
import { RowItem } from "../../RowItem";
import { Input } from "../../Input";
import { TitleInfoDashboard } from "../../TitleInfoDashboard";
import { IDataColaboradores, PropsColaboradores } from "./types";

function isActive(status: string): string {
  if (status === "active") {
    return "Ativo";
  }
  return "Inativo";
}

let inactive = (status: string): boolean => status === "inactive";

export const Colaboradoes = ({
  data = [],
  onChangeInput,
}: PropsColaboradores) => {
  return (
    <>
      <Input
        onChange={() => onChangeInput()}
        placeholder="Pesquise por nome ou cpf"
        srcIcon="/icons/search.png"
      />
      <TitleInfoDashboard>Listagem de colaboradores</TitleInfoDashboard>
      <Col>
        <ColItem width="150px">Nome completo</ColItem>
        <ColItem width="124px">Departamento</ColItem>
        <ColItem width="96px">Cargo</ColItem>
        <ColItem width="142px">Unidade</ColItem>
        <ColItem width="182px">Status</ColItem>
      </Col>
      {data.map((item: IDataColaboradores, index: number) => (
        <Row key={index}>
          <RowItem
            width="150px"
            inactive={inactive(item.status)}
            fontWeight="600"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Logo colaborador" src={item.image} />
            {item.name}
          </RowItem>
          <RowItem width="124px" inactive={inactive(item.status)}>
            {item.department}
          </RowItem>
          <RowItem width="96px" inactive={inactive(item.status)}>
            {item.role}
          </RowItem>
          <RowItem width="142px" inactive={inactive(item.status)}>
            {item.branch}
          </RowItem>
          <RowItem
            width="182px"
            color="#34423D"
            inactive={inactive(item.status)}
            fontWeight="500"
          >
            <span className="status">{isActive(item.status)}</span>
          </RowItem>
          <RowItem position="absolute" right="-80px">
            +
          </RowItem>
        </Row>
      ))}
    </>
  );
};

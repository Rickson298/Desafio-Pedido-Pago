import { Col } from "../../Col";
import styled from "styled-components";
import { ColItem } from "../../ColItem";
import { Row } from "../../Row";
import { RowItem } from "../../RowItem";
import { Input } from "../../Input";
import { TitleInfoDashboard } from "../../TitleInfoDashboard";
import { IDataColaboradores, PropsColaboradores } from "./types";
import { inactiveStatus } from "../../../utils/inactiveStatus";
import { statusPortuguese } from "../../../utils/statusPortuguese";
import { Dots } from "../../Dots";
import { ModalColaboradores } from "./ModalColaboradores";

export const Colaboradoes: React.FC<PropsColaboradores> = ({
  data = [],
  onChangeInput,
}) => {
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
            inactiveStatus={inactiveStatus(item.status)}
            fontWeight="600"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Logo colaborador" src={item.image} />
            {item.name}
          </RowItem>
          <RowItem width="124px" inactiveStatus={inactiveStatus(item.status)}>
            {item.department}
          </RowItem>
          <RowItem width="96px" inactiveStatus={inactiveStatus(item.status)}>
            {item.role}
          </RowItem>
          <RowItem width="142px" inactiveStatus={inactiveStatus(item.status)}>
            {item.branch}
          </RowItem>
          <RowItem
            width="182px"
            color="#34423D"
            inactiveStatus={inactiveStatus(item.status)}
            fontWeight="500"
          >
            <span className="status">{statusPortuguese(item.status)}</span>
          </RowItem>
          <RowItem position="absolute" right="-80px">
            <ModalColaboradores />
          </RowItem>
        </Row>
      ))}
    </>
  );
};

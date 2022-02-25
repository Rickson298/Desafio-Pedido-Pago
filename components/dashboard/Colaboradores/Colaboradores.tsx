import { useState } from "react";
import { inactiveStatus } from "../../../utils/inactiveStatus";
import { formatStatusToPortuguese } from "../../../utils/formatStatusToPortuguese";
import { Col } from "../../col/col/Col";
import { ColItem } from "../../col/colItem/ColItem";
import { Input } from "../../input/Input";
import { Row } from "../../row/row/Row";
import { RowItem } from "../../row/rowItem/RowItem";
import { H3 } from "../../h3/H3";
import { ModalColaboradores } from "./ModalColaboradores";
import { Pagination } from "../../pagination/Pagination";
import { IDataColaboradores, PropsColaboradores } from "./types";

export const Colaboradoes: React.FC<PropsColaboradores> = ({
  data = [],
  onChangeInput,
}) => {
  const [currentData, setCurrentData] = useState<IDataColaboradores[]>([]);

  return (
    <>
      {!!data.length && (
        <>
          <Input
            onChange={() => onChangeInput()}
            placeholder="Pesquise por nome ou cpf"
            srcIcon="/icons/search.png"
          />
          <H3>Listagem de colaboradores</H3>
          <Col>
            <ColItem desktopWidth="150px">Nome completo</ColItem>
            <ColItem desktopWidth="124px">Departamento</ColItem>
            <ColItem desktopWidth="96px">Cargo</ColItem>
            <ColItem desktopWidth="142px">Unidade</ColItem>
            <ColItem desktopWidth="182px">Status</ColItem>
          </Col>
          <div
            style={{
              minHeight: "360px",
            }}
          >
            {currentData.map((item: IDataColaboradores, index: number) => (
              <Row key={index}>
                <RowItem
                  desktopWidth="150px"
                  inactiveStatus={inactiveStatus(item.status)}
                  fontWeight="600"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Logo colaborador" src={item.image} />
                  {item.name}
                </RowItem>
                <RowItem
                  desktopWidth="124px"
                  inactiveStatus={inactiveStatus(item.status)}
                >
                  {item.department}
                </RowItem>
                <RowItem
                  desktopWidth="96px"
                  inactiveStatus={inactiveStatus(item.status)}
                >
                  {item.role}
                </RowItem>
                <RowItem
                  desktopWidth="142px"
                  inactiveStatus={inactiveStatus(item.status)}
                >
                  {item.branch}
                </RowItem>
                <RowItem
                  desktopWidth="182px"
                  // color="#34423D"
                  inactiveStatus={inactiveStatus(item.status)}
                  fontWeight="500"
                >
                  <span className="status">
                    {formatStatusToPortuguese(item.status)}
                  </span>
                </RowItem>
                <RowItem position="absolute" right="-80px">
                  <ModalColaboradores />
                </RowItem>
              </Row>
            ))}
          </div>
          <Pagination
            paginationInfoComplete
            fullData={data}
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        </>
      )}
    </>
  );
};

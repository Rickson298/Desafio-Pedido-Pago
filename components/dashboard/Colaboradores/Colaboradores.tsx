import { useState } from "react";
import { inactiveStatus } from "../../../utils/inactiveStatus";
import { statusPortuguese } from "../../../utils/statusPortuguese";
import { Col } from "../../Col";
import { ColItem } from "../../ColItem";
import { Input } from "../../Input";
import { Row } from "../../Row";
import { RowItem } from "../../RowItem";
import { TitleInfoDashboard } from "../../TitleInfoDashboard";
import { ModalColaboradores } from "./ModalColaboradores";
import { Pagination } from "../../Pagination";
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
          <TitleInfoDashboard>Listagem de colaboradores</TitleInfoDashboard>
          <Col>
            <ColItem width="150px">Nome completo</ColItem>
            <ColItem width="124px">Departamento</ColItem>
            <ColItem width="96px">Cargo</ColItem>
            <ColItem width="142px">Unidade</ColItem>
            <ColItem width="182px">Status</ColItem>
          </Col>
          <div
            style={{
              minHeight: "360px",
            }}
          >
            {currentData.map((item: IDataColaboradores, index: number) => (
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
                <RowItem
                  width="124px"
                  inactiveStatus={inactiveStatus(item.status)}
                >
                  {item.department}
                </RowItem>
                <RowItem
                  width="96px"
                  inactiveStatus={inactiveStatus(item.status)}
                >
                  {item.role}
                </RowItem>
                <RowItem
                  width="142px"
                  inactiveStatus={inactiveStatus(item.status)}
                >
                  {item.branch}
                </RowItem>
                <RowItem
                  width="182px"
                  color="#34423D"
                  inactiveStatus={inactiveStatus(item.status)}
                  fontWeight="500"
                >
                  <span className="status">
                    {statusPortuguese(item.status)}
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

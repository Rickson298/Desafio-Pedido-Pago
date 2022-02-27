import { useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { formatStatusToPortuguese } from "../../../utils/formatStatusToPortuguese";
import { inactiveStatus } from "../../../utils/inactiveStatus";
import { CardMobile } from "../../molecules/cardMobile/CardMobile";
import { ItemCardMobile } from "../../atoms/cardMobileItem/ItemCardMobile";
import { Col } from "../../atoms/col/Col";
import { ColItem } from "../../atoms/colItem/Col";
import { H3 } from "../../atoms/h3/H3";
import { Input } from "../../molecules/input/Input";
import { ModalMobileColaboradores } from "../../molecules/colaboradores/modals/ModalMobileColaboradores";
import { Pagination } from "../../molecules/pagination/Pagination";
import { PaginationMobile } from "../../molecules/paginationMobile/PaginationMobile";
import { Row } from "../../atoms/row/Row";
import { RowItem } from "../../atoms/rowItem/RowItem";
import { ModalDesktopColaboradores } from "../../molecules/colaboradores/modals/ModalDesktopColaboradores";
interface IDataColaboradores {
  agent_id: number;
  branch: string;
  department: string;
  image: string;
  name: string;
  role: string;
  status: string;
}
interface PropsColaboradores {
  data: IDataColaboradores[];
  onChangeInput: () => void;
}

export const ListagemColaboradores: React.FC<PropsColaboradores> = ({
  data = [],
  onChangeInput,
}) => {
  const [pagedData, setPagedData] = useState<IDataColaboradores[]>([]);
  const { windowWidth }: { windowWidth: any } = useWindowSize();
  const [isOpenModalMobile, setIsOpenModalMobile] = useState(false);

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

          {windowWidth > 750 ? (
            <>
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
                {pagedData.map((item: IDataColaboradores, index: number) => (
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
                      <ModalDesktopColaboradores />
                    </RowItem>
                  </Row>
                ))}
              </div>
              <Pagination
                paginationInfoComplete
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
              {pagedData.map((item: IDataColaboradores, index: number) => (
                <>
                  <CardMobile
                    setIsOpenModalMobile={setIsOpenModalMobile}
                    key={index}
                  >
                    <ItemCardMobile
                      bold
                      width="100%"
                      src={item.image}
                      title="Nome Completo"
                      info={item.name}
                    />
                    <ItemCardMobile
                      title="Departamento"
                      info={item.department}
                    />
                    <ItemCardMobile title="Cargo" info={item.role} />
                    <ItemCardMobile title="Unidade" info={item.branch} />
                    <ItemCardMobile
                      status
                      inactiveStatus={inactiveStatus(item.status)}
                      width="100%"
                      title="Status"
                      info={formatStatusToPortuguese(item.status)}
                    />
                  </CardMobile>
                </>
              ))}
              <ModalMobileColaboradores
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

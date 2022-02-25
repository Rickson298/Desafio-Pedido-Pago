import { useRouter } from "next/router";
import { useEffect } from "react";
import { Checkbox } from "../../components/checkbox/Checkbox";
import { Col } from "../../components/col/col/Col";
import { ColItem } from "../../components/col/colItem/ColItem";
import { ContainerGenericInfoCards } from "../../components/genericInfoCard/ContainerGenericInfoCards";
import { GenericInfoCard } from "../../components/genericInfoCard/GenericInfoCard";
import { H3 } from "../../components/h3/H3";
import { Layout } from "../../components/layout/Layout";
import { Row } from "../../components/row/row/Row";
import { RowItem } from "../../components/row/rowItem/RowItem";
import { useGetApi } from "../../hooks/useGetApi";

interface IMapPermissions {
  role: string;
  permissions: string;
}

export default function CargoPermissoes() {
  const {
    query: { cargoId },
  } = useRouter();

  const [fetchData, data] = useGetApi();

  useEffect(() => {
    cargoId && fetchData(`/role/${cargoId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cargoId]);

  return (
    <Layout iconBack mainTitle="Cargos e Permissões">
      <H3 marginTop="0">Dados do cargo</H3>
      <ContainerGenericInfoCards>
        <GenericInfoCard
          background="white"
          label="Departamento"
          info={data.role?.department}
        />
        <GenericInfoCard
          background="white"
          label="Cargo"
          info={data.role?.name}
        />
      </ContainerGenericInfoCards>
      <H3>Listagem de permissões</H3>

      <Col>
        <ColItem mobileWidth="250px" desktopWidth="500px">
          Cargo
        </ColItem>
        <ColItem desktopWidth="96px">Ler</ColItem>
        <ColItem desktopWidth="96px">Editar</ColItem>
        <ColItem desktopWidth="96px">Excluir</ColItem>
      </Col>
      {data.role?.grouprules.map((item: IMapPermissions, index: number) => (
        <Row key={index}>
          <RowItem mobileWidth="250px" desktopWidth="500px">
            {item.role}
          </RowItem>
          <RowItem desktopWidth="96px">
            <Checkbox checked={item.permissions.includes("read")} />
          </RowItem>
          <RowItem desktopWidth="96px">
            <Checkbox checked={item.permissions.includes("write")} />
          </RowItem>
          <RowItem desktopWidth="96px">
            <Checkbox checked={item.permissions.includes("delete")} />
          </RowItem>
        </Row>
      ))}
    </Layout>
  );
}

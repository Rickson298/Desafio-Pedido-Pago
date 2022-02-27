/* eslint-disable react/display-name */
import { useRouter } from "next/router";
import { memo, useEffect } from "react";
import { useGetApi } from "../../../hooks/useGetApi";
import Checkbox from "../../atoms/checkbox/Checkbox";
import { Col } from "../../atoms/col/Col";
import { ColItem } from "../../atoms/colItem/Col";
import { H3 } from "../../atoms/h3/H3";
import { Row } from "../../atoms/row/Row";
import { RowItem } from "../../atoms/rowItem/RowItem";
import { Layout } from "../../layout/Layout";
import { GenericInfoCard } from "../../molecules/genericInfoCards/GenericInfoCards";
import * as C from "./styles";
import React from "react";

interface IMapPermissions {
  role: string;
  permissions: string;
}

interface Props {
  cargoId?: string | string[];
}

export const CargosPermissoes = React.memo<Props>(({ cargoId }) => {
  const [fetchData, data] = useGetApi();

  useEffect(() => {
    cargoId && fetchData(`/role/${cargoId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cargoId]);

  return (
    <Layout iconBack mainTitle="Cargos e Permissões">
      <>
        <H3 marginTop="0">Dados do cargo</H3>
        <C.ContainerGenericInfoCards>
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
        </C.ContainerGenericInfoCards>
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
      </>
    </Layout>
  );
});

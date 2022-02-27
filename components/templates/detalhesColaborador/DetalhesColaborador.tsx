/* eslint-disable react/display-name */
import React, { useEffect } from "react";
import { useGetApi } from "../../../hooks/useGetApi";
import { formatCpf } from "../../../utils/formatCpf";
import { formatDate } from "../../../utils/formatDate";
import { formatPhoneNumberByObject } from "../../../utils/formatPhoneNumberByObject";
import { formatStatusToPortuguese } from "../../../utils/formatStatusToPortuguese";
import { CardsColaborador } from "../../atoms/cardsColaborador/CardsColaborador";
import { H3 } from "../../atoms/h3/H3";
import { IconProfileColaborador } from "../../atoms/iconProfileColaborador/IconProfileColaborador";
import { Layout } from "../../layout/Layout";
import { CardPersonalInfo } from "../../molecules/cardPersonalInfo/CardPersonalInfo";
import { GenericInfoCard } from "../../molecules/genericInfoCards/GenericInfoCards";
import * as C from "./styles";

interface Props {
  idColaborador?: string | string[];
}

export const DetalhesColaborador = React.memo<Props>(({ idColaborador }) => {
  const [fetchData, data, loading] = useGetApi();
  useEffect(() => {
    idColaborador && fetchData(`/agent/${idColaborador}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idColaborador]);

  return (
    <Layout
      iconBack
      height="600px"
      pageTitle={data ? data?.agent?.name : "Carregando..."}
      mainTitle="Detalhes do Colaborador"
    >
      <>
        <C.ContainerProfileColaborador>
          <IconProfileColaborador url={data.agent?.image} />
          <C.InfoColaborador>
            <span className="single-name">{data?.agent?.name}</span>
            <span className="single-email">{data?.agent?.email}</span>
          </C.InfoColaborador>
        </C.ContainerProfileColaborador>
        <H3>Informações Pessoais</H3>
        <CardsColaborador>
          <CardPersonalInfo
            cardName={data.agent?.document.type}
            cardInfo={formatCpf(data.agent?.document.number)}
          />
          <CardPersonalInfo
            cardName="Telefone"
            cardInfo={formatPhoneNumberByObject(
              data.agent?.phone.ddi,
              data.agent?.phone.ddd,
              data.agent?.phone.number
            )}
          />
          <CardPersonalInfo
            cardName="Data de Nascimento"
            cardInfo={formatDate(data.agent?.birth_date)}
          />
        </CardsColaborador>
        <C.DadosOrganizacionais>
          <H3 marginTop="0px" marginBottom="24px">
            Dados organizacionais
          </H3>
          <C.ContainerGenericInfoCards>
            <GenericInfoCard
              label="Departamento"
              info={data.agent?.department}
            />
            <GenericInfoCard label="Cargo" info={data.agent?.role} />
            <GenericInfoCard label="Unidade" info={data.agent?.branch} />
            <GenericInfoCard
              label="Status"
              info={formatStatusToPortuguese(data.agent?.status)}
            />
          </C.ContainerGenericInfoCards>
        </C.DadosOrganizacionais>
      </>
    </Layout>
  );
});

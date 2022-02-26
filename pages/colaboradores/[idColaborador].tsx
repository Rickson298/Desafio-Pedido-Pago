import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import { CardColaborador } from "../../components/dashboard/detalhesColaborador/cardColaborador/cardColaborador/CardColaborador";
import { CardsColaborador } from "../../components/dashboard/detalhesColaborador/cardsColaborador/CardsColaborador";
import { IconProfileColaborador } from "../../components/dashboard/detalhesColaborador/iconProfileColaborador/IconProfileColaborador";
import { InfoColaborador } from "../../components/dashboard/detalhesColaborador/infoColaborador/infoColaborador";
import { PersonalInfo } from "../../components/dashboard/detalhesColaborador/personalInfo/PersonalInfo";
import { ContainerGenericInfoCards } from "../../components/genericInfoCard/ContainerGenericInfoCards";
import { GenericInfoCard } from "../../components/genericInfoCard/GenericInfoCard";
import { H3 } from "../../components/h3/H3";
import { Layout } from "../../components/layout/Layout";
import { useGetApi } from "../../hooks/useGetApi";
import { formatCpf } from "../../utils/formatCpf";
import { formatDate } from "../../utils/formatDate";
import { formatPhoneNumberByObject } from "../../utils/formatPhoneNumberByObject";
import { formatStatusToPortuguese } from "../../utils/formatStatusToPortuguese";

const ContainerProfileColaborador = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
`;

export default function SingleColaborador() {
  const { query } = useRouter();
  const idColaborador = query.idColaborador;
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
      <ContainerProfileColaborador>
        <IconProfileColaborador url={data.agent?.image} />
        <InfoColaborador>
          <span className="single-name">{data?.agent?.name}</span>
          <span className="single-email">{data?.agent?.email}</span>
        </InfoColaborador>
      </ContainerProfileColaborador>
      <H3>Informações Pessoais</H3>
      <CardsColaborador>
        <CardColaborador
          cardName={data.agent?.document.type}
          cardInfo={formatCpf(data.agent?.document.number)}
        />
        <CardColaborador
          cardName="Telefone"
          cardInfo={formatPhoneNumberByObject(
            data.agent?.phone.ddi,
            data.agent?.phone.ddd,
            data.agent?.phone.number
          )}
        />
        <CardColaborador
          cardName="Data de Nascimento"
          cardInfo={formatDate(data.agent?.birth_date)}
        />
      </CardsColaborador>
      <PersonalInfo>
        <H3 marginTop="0px" marginBottom="24px">
          Informações Pessoais
        </H3>
        <ContainerGenericInfoCards>
          <GenericInfoCard label="Departamento" info={data.agent?.department} />
          <GenericInfoCard label="Cargo" info={data.agent?.role} />
          <GenericInfoCard label="Unidade" info={data.agent?.branch} />
          <GenericInfoCard
            label="Status"
            info={formatStatusToPortuguese(data.agent?.status)}
          />
        </ContainerGenericInfoCards>
      </PersonalInfo>
    </Layout>
  );
}

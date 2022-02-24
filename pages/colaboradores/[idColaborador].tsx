import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import { CardColaborador } from "../../components/dashboard/infoColaborador/cardColaborador/cardColaborador/CardColaborador";
import { CardsColaborador } from "../../components/dashboard/infoColaborador/cardsColaborador/CardsColaborador";
import { IconProfileColaborador } from "../../components/dashboard/infoColaborador/iconProfileColaborador/IconProfileColaborador";
import { InfoColaborador } from "../../components/dashboard/infoColaborador/infoColaborador/infoColaborador";
import { Layout } from "../../components/layout/Layout";
import { TitleInfoDashboard } from "../../components/titleInfoDashboard/TitleInfoDashboard";
import { useGetApi } from "../../hooks/useGetApi";
import { formatDate } from "../../utils/formatDate";
import { formatPhoneNumberByObject } from "../../utils/formatPhoneNumberByObject";
import { formatStatusToPortuguese } from "../../utils/formatStatusToPortuguese";
import { IoIosArrowBack } from "react-icons/io";
import { Label } from "../../components/label/Label";
import { PersonalInfo } from "../../components/dashboard/infoColaborador/personalInfo/PersonalInfo";
import { CardPersonalInfo } from "../../components/dashboard/infoColaborador/cardPersonalInfo/CardPersonalInfo";
import { formatCpf } from "../../utils/formatCpf";

const ContainerProfileColaborador = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
`;

export const ContainerPersonalInfoCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  @media (max-width: 1005px) {
    justify-content: start;
  }
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
      iconTitle={<IoIosArrowBack />}
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
      <TitleInfoDashboard>Informações Pessoais</TitleInfoDashboard>
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
        <TitleInfoDashboard marginTop="0px" marginBottom="24px">
          Informações Pessoais
        </TitleInfoDashboard>
        <ContainerPersonalInfoCards>
          <CardPersonalInfo>
            <Label>Departamento</Label>
            {data.agent?.department}
          </CardPersonalInfo>
          <CardPersonalInfo>
            <Label>Cargo</Label>
            {data.agent?.role}
          </CardPersonalInfo>
          <CardPersonalInfo>
            <Label>Unidade</Label>
            {data.agent?.branch}
          </CardPersonalInfo>
          <CardPersonalInfo>
            <Label>Status</Label>
            {formatStatusToPortuguese(data.agent?.status)}
          </CardPersonalInfo>
        </ContainerPersonalInfoCards>
      </PersonalInfo>
    </Layout>
  );
}

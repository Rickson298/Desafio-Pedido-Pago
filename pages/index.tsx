import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Cargos } from "../components/dashboard/Cargos/Cargos";
import { Colaboradoes } from "../components/dashboard/Colaboradores/Colaboradores";
import { Header } from "../components/header/Header";
import { OptionsHeader } from "../components/optionsHeader/OptionsHeader";
import { SideBar } from "../components/sidebar/SideBar";
import { useGetApi } from "../hooks/useGetApi";

export const MainSection = styled.main`
  min-height: calc(100vh - 62px);
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f8faf9;
  padding: 24px;
`;

export const DashboardTitle = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 26px;
  color: #34423d;
  display: flex;
  align-items: start;
  margin-bottom: 24px;
`;

export const Dashboard = styled.div`
  max-width: 956px; //956
  min-height: 770px;
  background: white;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: 30px 24px;
  overflow: hidden;
`;

const Home: NextPage = () => {
  const [fetchData, data, loading] = useGetApi();

  const [endPointByOption, setEndPointByOption] = useState<string>("/agents");
  let divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchData(endPointByOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endPointByOption]);

  useEffect(() => {
    loading
      ? divRef.current && (divRef.current.style.opacity = "0")
      : divRef.current && (divRef.current.style.opacity = "1");
  }, [loading]);

  return (
    <div>
      <Head>
        <title>Desafio Pedido Pago</title>
        <meta name="description" content="Desafio Pedidod Pago" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header username="Rickson Oliveira" />
      <div
        style={{
          display: "flex",
        }}
      >
        <SideBar />
        <MainSection>
          <div
            style={{
              width: "60%",
            }}
          >
            <DashboardTitle>Organização</DashboardTitle>
            <Dashboard>
              <OptionsHeader
                onClick={(option) => {
                  setEndPointByOption(option);
                }}
              />
              <div
                ref={divRef}
                style={{
                  width: "100%",
                  transition: "all ease 0.2s",
                  opacity: 1,
                }}
              >
                {endPointByOption === "/agents" ? (
                  <Colaboradoes
                    onChangeInput={() => console.log("teste")}
                    data={data.items}
                  />
                ) : (
                  <Cargos
                    onChangeInput={() => console.log("teste")}
                    data={data.roles}
                  />
                )}
              </div>
            </Dashboard>
          </div>
        </MainSection>
      </div>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Dashboard } from "../components/Dashboard";
import { Cargos } from "../components/dashboard/Cargos/Cargos";
import { Colaboradoes } from "../components/dashboard/Colaboradores/Colaboradores";
import { Header } from "../components/Header";
import { OptionsHeader } from "../components/OptionsHeader";
import { SideBar } from "../components/SideBar";
import { useGetApi } from "./api/httpClient";

export const MainSection = styled.main`
  height: calc(100vh - 62px);
  display: flex;
`;

export const DashboardTitle = styled.div`
  width: 956px;
  font-weight: 600;
  font-size: 26px;
  color: #34423d;
  display: flex;
  align-items: start;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const Content = styled.div`
  width: 956px;
  height: 100%;
  background: white;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: 30px 24px;
  margin-bottom: 34px;
  overflow: hidden;
`;

const Home: NextPage = () => {
  const [fetchData, data, loading2] = useGetApi();

  useEffect(() => {
    fetchData("/agents");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [currentOption, setCurrentOption] = useState<string>("Colaboradoes");
  let divRef = useRef<HTMLDivElement | null>(null);
  // let teste = document?.getElementById("teste") as HTMLElement;
  const [loading, setLoading] = useState(false);

  function changeOpacity() {
    divRef.current && (divRef.current.style.opacity = "0");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      divRef.current && (divRef.current.style.opacity = "1");
    }, 1000);
  }

  return (
    <div>
      <Head>
        <title>Desafio Pedido Pago</title>
        <meta name="description" content="Desafio Pedidod Pago" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header username="Rickson Oliveira" />
      <MainSection>
        <SideBar />
        <Dashboard>
          <DashboardTitle>Organização</DashboardTitle>
          <Content>
            <OptionsHeader
              onClick={(option) => {
                changeOpacity();
                setCurrentOption(option);
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
              {!loading &&
                (currentOption === "Colaboradores" ? (
                  <Colaboradoes
                    onChangeInput={() => console.log("teste")}
                    data={data.items}
                  />
                ) : (
                  <Cargos
                    onChangeInput={() => console.log("teste")}
                    data={data.roles}
                  />
                ))}
            </div>
          </Content>
        </Dashboard>
      </MainSection>
    </div>
  );
};

export default Home;

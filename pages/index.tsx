import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Cargos } from "../components/dashboard/Cargos/Cargos";
import { Colaboradoes } from "../components/dashboard/Colaboradores/Colaboradores";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import { OptionsHeader } from "../components/optionsHeader/OptionsHeader";
import { SideBar } from "../components/sidebar/SideBar";
import { useGetApi } from "../hooks/useGetApi";

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
    <Layout mainTitle="Organização">
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
    </Layout>
  );
};

export default Home;

import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { ListagemColaboradores } from "../components/dashboard/colaboradores/listagemColaboradores/ListagemColaboradores";
import { Layout } from "../components/layout/Layout";
import { CategoriesDesktop } from "../components/dashboard/categoriesDesktop/CategoriesDesktop";
import { useGetApi } from "../hooks/useGetApi";
import { Dots } from "../components/dots/Dots";
import { ModalMobileCategories } from "../components/dashboard/categoriesMobile/modalMobileCategories/ModalMobileCategories";
import { CategoriesMobile } from "../components/dashboard/categoriesMobile/categoriesMobile/CategoriesMobile";
import useWindowSize from "../hooks/useWindowSize";
import { ListagemCargos } from "../components/dashboard/cargos/listagemCargos/ListagemCargos";

const Home: NextPage = () => {
  const [fetchData, data, loading] = useGetApi();
  const [endPointByOption, setEndPointByOption] = useState<string>("/agents");
  let divRef = useRef<HTMLDivElement | null>(null);
  const { windowWidth }: { windowWidth: any } = useWindowSize();

  useEffect(() => {
    fetchData(endPointByOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endPointByOption]);

  useEffect(() => {
    loading
      ? divRef.current && (divRef.current.style.opacity = "0")
      : divRef.current && (divRef.current.style.opacity = "1");
  }, [loading]);

  const [isOpenModalMobile, setIsOpenModalMobile] = useState(false);

  return (
    <Layout mainTitle="Organização">
      {windowWidth > 750 ? (
        <CategoriesDesktop
          onClick={(option) => {
            setEndPointByOption(option);
          }}
        />
      ) : (
        <>
          <CategoriesMobile>
            {endPointByOption == "/agents" ? "Colaboradores" : "Cargos"}
            <Dots onClick={() => setIsOpenModalMobile(true)} />
          </CategoriesMobile>
          <ModalMobileCategories
            setEndPointByOption={setEndPointByOption}
            setIsOpenModalMobile={setIsOpenModalMobile}
            isOpenModalMobile={isOpenModalMobile}
          />
        </>
      )}

      <div
        ref={divRef}
        style={{
          width: "100%",
          transition: "all ease 0.2s",
          opacity: 1,
        }}
      >
        {endPointByOption === "/agents" ? (
          <ListagemColaboradores
            onChangeInput={() => console.log("teste")}
            data={data.items}
          />
        ) : (
          <ListagemCargos
            onChangeInput={() => console.log("teste")}
            data={data.roles}
          />
        )}
      </div>
    </Layout>
  );
};

export default Home;

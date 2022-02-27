import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { CategoriesMobile } from "../components/atoms/categoriesMobile/CategoriesMobile";
import { Dots } from "../components/atoms/dots/Dots";
import { Layout } from "../components/layout/Layout";
import { CategoriesDesktop } from "../components/molecules/categoriesDesktop/CategoriesDesktop";
import { ModalMobileCategories } from "../components/molecules/modalMobileCategories/ModalMobileCategories";
import { ListagemCargos } from "../components/organisms/listagemCargos/ListagemCargos";
import { ListagemColaboradores } from "../components/organisms/listagemColaboradores/ListagemColaboradores";
import { useGetApi } from "../hooks/useGetApi";
import useWindowSize from "../hooks/useWindowSize";

const Home: NextPage = () => {
  const [fetchData, data, loading] = useGetApi();
  const [endPointByOption, setEndPointByOption] = useState<string>("/agents");
  const divRef = useRef<HTMLDivElement | null>(null);
  const { windowWidth }: { windowWidth?: number } = useWindowSize();

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
      <>
        {windowWidth && windowWidth > 750 ? (
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
      </>
    </Layout>
  );
};

export default Home;

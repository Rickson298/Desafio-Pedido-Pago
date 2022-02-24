import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../header/Header";
import { SideBar } from "../sidebar/SideBar";
import { H1 } from "./h1/H1";
import { MainContent } from "./mainContent/MainContent";
import { MainSection } from "./mainSection/MainSection";

interface IPropsLayout {
  mainTitle: string;
  pageTitle?: string;
  height?: string;
  iconTitle?: JSX.Element;
}

export const Layout: React.FC<IPropsLayout> = ({
  mainTitle,
  children,
  pageTitle = "Desafio Pedido Pago",
  height,
  iconTitle,
}) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Desafio Pedidod Pago" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header username="Rickson Oliveira" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SideBar />
          <MainSection>
            <H1>
              <span onClick={() => router.back()} className="icon">
                {iconTitle}
              </span>
              <span className="title">{mainTitle}</span>
            </H1>
            <MainContent justifyContent="start" height={height}>
              {children}
            </MainContent>
          </MainSection>
        </div>
      </body>
    </div>
  );
};

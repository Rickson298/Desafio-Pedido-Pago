import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "../molecules/header/Header";
import { SideBar } from "../atoms/sidebar/SideBar";
import { MainContent } from "./mainContent/MainContent";
import { MainSection } from "./mainSection/MainSection";
import { BiArrowBack } from "react-icons/bi";
import { H1 } from "../atoms/h1/H1";
import { memo } from "react";
import Link from "next/link";

interface IPropsLayout {
  mainTitle: string;
  pageTitle?: string;
  height?: string;
  iconBack?: boolean;
  children: JSX.Element;
}

const LayoutComponent: React.FC<IPropsLayout> = ({
  mainTitle,
  children,
  pageTitle = "Desafio Pedido Pago",
  height,
  iconBack,
}) => {
  const router = useRouter();

  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Head>
        <title>{pageTitle || "Desafio Pedido Pago"}</title>
        <meta name="description" content="Desafio Pedidod Pago" />
        <meta name="theme-color" content="#034AFD" />
        <link rel="icon" href="/images/logo.png" />
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
              {iconBack && (
                <Link href="/">
                  <a className="icon">
                    <BiArrowBack />
                  </a>
                </Link>
              )}
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

export const Layout = memo(LayoutComponent);

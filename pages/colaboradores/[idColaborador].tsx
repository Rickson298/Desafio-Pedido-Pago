import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { DetalhesColaborador } from "../../components/templates/detalhesColaborador/DetalhesColaborador";

const ContainerProfileColaborador = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;
`;

export default function PageDetalhesColaborador() {
  const {
    query: { idColaborador },
  } = useRouter();

  const [idColaboradorState, setIdColaboradorState] = useState<
    string | string[]
  >();
  useEffect(() => {
    setIdColaboradorState(idColaborador);
  }, [idColaborador]);

  return <DetalhesColaborador idColaborador={idColaboradorState} />;
}
